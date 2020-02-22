<template>
    <div class="k-content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>专栏</el-breadcrumb-item>
        </el-breadcrumb>
        <query-table-page :queryFunc="queryFunc" :tableColumns="tableColumns" />
    </div>
</template>

<script>
import QueryTablePage from "@/components/QueryTablePage";
import { getSpecialPage } from "@/api/special";
export default {
    name: "index",
    components: { QueryTablePage },
    data() {
        return {
            queryFunc: getSpecialPage,
            tableColumns: [
                {
                    label: "名称",
                    prop: "name",
                    type: "link",
                    click: row => this.$router.push(`/specials/${row.id}`)
                },
                {
                    label: "文章数",
                    prop: ""
                },
                {
                    label: "作者",
                    prop: "createUserId"
                },
                {
                    label: "创建时间",
                    prop: "createTime"
                },
                {
                    label: "描述",
                    prop: "intro"
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss"></style>

<template>
    <div class="k-content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/tags' }">标签</el-breadcrumb-item>
            <el-breadcrumb-item>标签？</el-breadcrumb-item>
        </el-breadcrumb>
        <query-table-page :queryFunc="queryFunc" :tableColumns="tableColumns" />
    </div>
</template>

<script>
import QueryTablePage from "@/components/QueryTablePage";
import { getMyArticlePage } from "@/api/article";

export default {
    name: "TagArticle",
    components: { QueryTablePage },
    data() {
        return {
            queryFunc: getMyArticlePage,
            tableColumns: [
                {
                    label: "标题",
                    prop: "title",
                    type: "link",
                    click: row => this.$router.push(`/view/article/${row.id}`)
                },
                {
                    label: "标签",
                    type: "tags",
                    nameProp: "name"
                },
                {
                    label: "专栏",
                    prop: "specialName"
                },
                {
                    label: "创建时间",
                    prop: "createTime"
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss"></style>

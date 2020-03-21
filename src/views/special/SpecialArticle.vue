<template>
    <div class="k-content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/specials' }">专栏</el-breadcrumb-item>
            <el-breadcrumb-item>{{ special.name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            {{ special.intro }}
        </el-card>
        <query-table-page
            :queryItems="queryItems"
            :queryFunc="queryFunc"
            :tableColumns="tableColumns"
        />
    </div>
</template>

<script>
import QueryTablePage from "@/components/QueryTablePage";
import { getInfo } from "@/api/special";
import { getUnderSpecialArticlesPage } from "@/api/article";

export default {
    name: "SpecialArticle",
    components: { QueryTablePage },
    props: {
        id: String
    },
    data() {
        return {
            special: {},
            queryItems: [{ prop: "specialId", value: this.id, visible: false }],
            queryFunc: getUnderSpecialArticlesPage,
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
                    label: "创建时间",
                    prop: "createTime"
                }
            ]
        };
    },
    mounted() {
        getInfo(this.$route.params.id).then(data => (this.special = data));
    }
};
</script>

<style scoped lang="scss"></style>

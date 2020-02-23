<template>
    <div class="k-content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/tags' }">标签</el-breadcrumb-item>
            <el-breadcrumb-item>{{ tag.name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            {{ tag.intro }}
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
import { getTagInfo } from "@/api/tag";
import { getUnderTagArticlesPage } from "@/api/article";

export default {
    name: "TagArticle",
    components: { QueryTablePage },
    data() {
        return {
            tag: {},
            queryItems: [{ prop: "tagId", value: this.$route.params.id, visible: false }],
            queryFunc: getUnderTagArticlesPage,
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
    },
    mounted() {
        getTagInfo(this.$route.params.id).then(data => (this.tag = data));
    }
};
</script>

<style scoped lang="scss"></style>

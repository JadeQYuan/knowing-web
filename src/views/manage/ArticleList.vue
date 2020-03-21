<template>
    <query-table-page
        :queryItems="queryItems"
        :queryFunc="queryFunc"
        :tableColumns="tableColumns"
        :tableActions="tableActions"
    />
</template>

<script>
import QueryTablePage from "@/components/QueryTablePage/index";
import { getAllArticlePage } from "@/api/article";

export default {
    name: "ArticleList",
    components: { QueryTablePage },
    data() {
        return {
            queryItems: [{ label: "标题", prop: "title", placeholder: "标题", value: "" }],
            queryFunc: getAllArticlePage,
            tableColumns: [
                {
                    label: "标题",
                    prop: "title",
                    type: "link",
                    click: row => this.$router.push(`/view/article/${row.id}`)
                },
                {
                    label: "标签",
                    prop: "",
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
            ],
            tableActions: []
        };
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.content {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>

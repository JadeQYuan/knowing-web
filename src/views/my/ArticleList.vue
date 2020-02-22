<template>
    <query-table-page
        class="k-content"
        :queryItems="queryItems"
        :queryFunc="queryFunc"
        :tableColumns="tableColumns"
        :tableActions="tableActions"
    />
</template>

<script>
import QueryTablePage from "@/components/QueryTablePage/index";
import { getMyArticlePage } from "@/api/article";

export default {
    name: "ArticleList",
    components: { QueryTablePage },
    data() {
        return {
            queryItems: [{ label: "标题", prop: "title", placeholder: "标题", value: "" }],
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
            tableActions: [
                {
                    label: "查看",
                    click: row => this.$router.push(`/view/article/${row.id}`)
                },
                {
                    label: "编辑",
                    click: row => this.$router.push(`/article/update/${row.id}`)
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss"></style>

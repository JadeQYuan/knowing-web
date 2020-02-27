<template>
    <query-table-page
        :queryItems="queryItems"
        :queryFunc="queryFunc"
        :tableColumns="tableColumns"
        :tableActions="tableActions"
    />
</template>

<script>
import QueryTablePage from "@/components/QueryTablePage";
import { getAllNotePage } from "@/api/note";

export default {
    name: "NoteList",
    components: { QueryTablePage },
    data() {
        return {
            queryItems: [{ label: "标题", prop: "title", placeholder: "标题", value: "" }],
            queryFunc: getAllNotePage,
            tableColumns: [
                {
                    label: "标题",
                    prop: "title",
                    type: "link",
                    click: row => this.$router.push(`/view/note/${row.id}`)
                },
                {
                    label: "创建人",
                    prop: "createUserName"
                },
                {
                    label: "创建时间",
                    prop: "createTime"
                },
                {
                    label: "内容",
                    prop: "content"
                }
            ],
            tableActions: []
        };
    },
    methods: {}
};
</script>

<style scoped lang="scss"></style>

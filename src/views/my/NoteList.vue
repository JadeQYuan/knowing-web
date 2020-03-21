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
import { getNotePage } from "@/api/note";

export default {
    name: "NoteList",
    components: { QueryTablePage },
    data() {
        return {
            queryItems: [{ label: "标题", prop: "title", placeholder: "标题", value: "" }],
            queryFunc: getNotePage,
            tableColumns: [
                {
                    label: "标题",
                    prop: "title",
                    type: "link",
                    click: row => this.$router.push(`/view/note/${row.id}`)
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
            tableActions: [
                {
                    label: "编辑",
                    click: row => this.$router.push(`/note/update/${row.id}`)
                }
            ]
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

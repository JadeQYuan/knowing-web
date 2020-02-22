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
    methods: {
        simple(row) {
            if (!row.content) {
                return "";
            } else {
                const str = row.content
                    .replace(/(\*\*|__)(.*?)(\*\*|__)/g, "") //全局匹配内粗体
                    .replace(/\\!\[[\s\S]*?\]\([\s\S]*?\)/g, "") //全局匹配图片
                    .replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, "") //全局匹配连接
                    .replace(/<\/?.+?\/?>/g, "") //全局匹配内html标签
                    .replace(/(\*)(.*?)(\*)/g, "") //全局匹配内联代码块
                    .replace(/`{1,2}[^`](.*?)`{1,2}/g, "") //全局匹配内联代码块
                    .replace(/```([\s\S]*?)```[\s]*/g, "") //全局匹配代码块
                    .replace(/\\~\\~(.*?)\\~\\~/g, "") //全局匹配删除线
                    .replace(/[\s]*[-\\*]+(.*)/g, "") //全局匹配无序列表
                    .replace(/[\s]*[0-9]+\.(.*)/g, "") //全局匹配有序列表
                    .replace(/(#+)(.*)/g, "") //全局匹配标题
                    .replace(/(>+)(.*)/g, "") //全局匹配摘要
                    .replace(/\r\n/g, "") //全局匹配换行
                    .replace(/\n/g, "") //全局匹配换行
                    .replace(/\s/g, ""); //全局匹配空字符;
                return str.slice(0, 155);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

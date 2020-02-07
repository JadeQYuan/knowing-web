<template>
    <ul class="k-article infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li
            class="k-article-card infinite-list-item"
            v-for="article in articles"
            :key="article.id"
            @click="view(article.id)"
        >
            <el-card shadow="always">
                <div slot="header" class="clearfix">
                    <span>{{ article.title }}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                        操作按钮
                    </el-button>
                </div>
                {{ simple(article.content) }}
            </el-card>
        </li>
    </ul>
</template>

<script>
import { getArticlePage } from "@/api/article";

export default {
    name: "HomeArticle",
    data() {
        return {
            articles: [],
            query: {
                pageNum: 1,
                pageSize: 3
            }
        };
    },
    mounted() {
        this.getArticles();
    },
    methods: {
        load() {
            this.query.pageNum++;
            this.getArticles();
        },
        getArticles() {
            const _this = this;
            getArticlePage(this.query)
                .then(data => {
                    data.list.forEach(value => {
                        _this.articles.push(value);
                    });
                    // Object.assign(_this.articles, data.list);
                })
                .catch(error => {
                    this.$alert(error, {
                        confirmButtonText: "确定"
                    });
                });
        },
        view(id) {
            this.$router.push(`/view/article/${id}`);
        },
        simple: function(res) {
            return res
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
        }
    }
};
</script>

<style scoped lang="scss">
.k-article {
    padding-top: 20px;
    height: 650px;
    .k-article-card {
        padding: 5px 0;
    }
}
</style>

<template>
    <div class="k-article infinite-list-wrapper" style="overflow:auto">
        <ul class="list" v-infinite-scroll="load" :infinite-scroll-disabled="true">
            <li><el-divider></el-divider></li>
            <li v-for="article in articles" class="list-item" :key="article.id">
                <article-card :article="article" />
                <el-divider></el-divider>
            </li>
        </ul>
        <p v-if="loading">
            <el-button round :loading="true">加载中...</el-button>
        </p>
        <p v-if="noMore">
            <el-button round :disabled="true">没有更多了...</el-button>
        </p>
        <p v-if="!loading && !noMore">
            <el-button round @click="load">点击加载更多</el-button>
        </p>
    </div>
</template>

<script>
import { getNewestArticlePage } from "@/api/article";
import ArticleCard from "./ArticleCard";

export default {
    name: "HomeArticle",
    components: { ArticleCard },
    data() {
        return {
            articles: [],
            loading: false,
            totalPage: 1,
            query: {
                pageNum: 1,
                pageSize: 5
            }
        };
    },
    computed: {
        noMore() {
            return this.query.pageNum === this.totalPage;
        }
    },
    mounted() {
        this.getArticles();
    },
    methods: {
        load() {
            this.loading = true;
            setTimeout(() => {
                this.query.pageNum++;
                this.getArticles();
                this.loading = false;
            }, 200);
        },
        getArticles() {
            const _this = this;
            getNewestArticlePage(this.query)
                .then(data => {
                    _this.totalPage = data.totalPage;
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
    padding: 20px 0;
    .el-divider {
        &:first-child {
            margin-bottom: 0;
        }
    }
    .k-article-card {
        padding: 5px 0;
    }
    p {
        text-align: center;
    }
}
</style>

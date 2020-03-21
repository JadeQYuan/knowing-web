<template>
    <div class="k-article infinite-list-wrapper" style="overflow:auto">
        <ul class="list" v-infinite-scroll="load" :infinite-scroll-disabled="true">
            <li v-for="article in articles" class="list-item" :key="article.id">
                <article-card :article="article" class="card" />
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
                pageSize: 15
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
            getNewestArticlePage(this.query).then(data => {
                _this.totalPage = data.totalPage;
                data.list.forEach(value => {
                    _this.articles.push(value);
                });
                // Object.assign(_this.articles, data.list);
            });
        }
    }
};
</script>

<style scoped lang="scss">
.k-article {
    padding: 20px 0;
    .card {
        margin-bottom: 24px;
    }
    p {
        text-align: center;
    }
}
</style>

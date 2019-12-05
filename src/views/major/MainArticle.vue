<template>
    <ul class="k-article infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li class="k-article-card infinite-list-item" v-for="article in articles" :key="article.id">
            <el-card shadow="always">
                <div slot="header" class="clearfix">
                    <span>{{ article.title }}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                        操作按钮
                    </el-button>
                </div>
                {{ article.content }}
            </el-card>
        </li>
    </ul>
</template>

<script>
import { getArticlePage } from "@/api/article";

export default {
    name: "MainArticle",
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

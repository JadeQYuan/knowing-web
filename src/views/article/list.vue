<template>
    <el-container>
        <router-link to="/articleForm">ADD</router-link>
        <el-main>
            <span v-for="article in articles" :key="article.id" @click="info(article.id)">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        {{ article.title }}
                    </div>
                    <div>
                        <el-tag v-for="tag in article.tags" :key="tag.id">
                            {{ tag.name }}
                        </el-tag>
                    </div>
                    <div>
                        {{ article.content }}
                    </div>
                </el-card>
            </span>
        </el-main>
    </el-container>
</template>

<script>
import { getArticleList } from "@/api/article";

export default {
    name: "articleList",
    data() {
        return {
            articles: [],
        };
    },
    mounted() {
        getArticleList().then(data => {
            this.articles = data;
        });
    },
    methods: {
        info(id) {
            this.$router.push(`/article/${id}`);
        },
    },
};
</script>

<style scoped></style>

<template>
    <el-container>
        <router-link to="/article/add">ADD</router-link>
        <el-main>
            <span v-for="article in articles" :key="article.id">
                <el-card class="box-card">
                    <div slot="header" class="clearfix" @click="info(article.id)">
                        {{ article.title }}
                    </div>
                    <span @click="modify(article.id)"><button>修改</button></span>
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
            articles: []
        };
    },
    mounted() {
        getArticleList()
            .then(data => {
                this.articles = data;
            })
            .catch(error => {
                this.$alert(error, {
                    confirmButtonText: "确定"
                });
            });
    },
    methods: {
        info(id) {
            this.$router.push(`/article/${id}/view`);
        },
        modify(id) {
            this.$router.push(`/article/${id}`);
        }
    }
};
</script>

<style scoped></style>

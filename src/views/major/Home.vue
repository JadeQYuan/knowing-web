<template>
    <el-container>
        <el-header>
            <div>Knowing HOW, Then Knowing WHY!</div>
        </el-header>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="2" :offset="3">
                    <div class="grid-content bg-purple">
                        <el-divider content-position="left">频道</el-divider>
                        <div class="k-tag">
                            <div v-for="tag in tags" :key="tag.id">
                                {{ tag.name }}
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <el-carousel height="150px" type="card">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3 class="small">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                        <div class="k-article">
                            <div
                                class="k-article-card"
                                v-for="article in articles"
                                :key="article.id"
                            >
                                <el-card shadow="always">
                                    <div slot="header" class="clearfix">
                                        <span>{{ article.title }}</span>
                                        <el-button style="float: right; padding: 3px 0" type="text">
                                            操作按钮
                                        </el-button>
                                    </div>
                                    {{ article.content }}
                                </el-card>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <div class="k-more">
                            <h3>关于我</h3>
                            <div class="k-avatar">
                                <el-avatar icon="el-icon-user-solid"></el-avatar>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import { getTagList } from "@/api/tag";
import { getArticleList } from "@/api/article";
export default {
    name: "home",
    data() {
        return {
            tags: [],
            articles: []
        };
    },
    mounted() {
        getTagList()
            .then(data => {
                this.tags = data;
            })
            .catch(error => {
                this.$alert(error, {
                    confirmButtonText: "确定"
                });
            });
        getArticleList()
            .then(data => {
                this.articles = data;
            })
            .catch(error => {
                this.$alert(error, {
                    confirmButtonText: "确定"
                });
            });
    }
};
</script>

<style scoped lang="scss">
.el-header {
    background-color: #a9b7c6;
    div {
        width: 100%;
        text-align: center;
        background-color: #a9b7c6;
        color: #dbdbdb;
        font-size: 50px;
    }
}
.el-main {
    .el-divider {
        background-color: #0977ab;
    }
    .k-tag {
        div {
            padding: 10px 10px;
            border-radius: 15px;
            text-shadow: 5px 5px 5px #0977ab;
            font-size: 14px;
            &:hover {
                background-color: #0977ab;
            }
        }
    }
    .k-article {
        padding-top: 20px;
        .k-article-card {
            padding: 5px 0;
        }
    }
    .k-more {
        background-color: #dbdbdb;
        width: 100%;
        h3 {
            text-align: center;
        }
        .k-avatar {
            width: 100%;
            height: 50px;
        }
    }
}
.el-footer {
    background-color: #909399;
}
</style>

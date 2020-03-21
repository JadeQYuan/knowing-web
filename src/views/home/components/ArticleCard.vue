<template>
    <div class="main">
        <div class="head">
            <span class="title" @click="viewArticle">
                {{ article.title }}
            </span>
            <span class="special" v-if="article.specialId" @click="viewSpecial">
                【 {{ article.specialName }} 】
            </span>
        </div>
        <p class="content" @click="viewArticle">{{ article.content }}</p>
        <div class="foot">
            <div class="tag">
                <el-tag
                    v-for="tag in article.tags"
                    :key="tag.id"
                    size="small"
                    @click="viewTag(tag.id)"
                >
                    {{ tag.name }}
                </el-tag>
            </div>
            <div class="time">{{ article.createTime }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleCard",
    props: {
        article: Object
    },
    methods: {
        viewArticle() {
            this.$router.push(`/view/article/${this.article.id}`);
        },
        viewSpecial() {
            this.$router.push(`/specials/${this.article.specialId}`);
        },
        viewTag(tagId) {
            this.$router.push(`/tags/${tagId}`);
        }
    }
};
</script>

<style scoped lang="scss">
.main {
    height: 120px;
    background-color: #dbdbdb;
    .head {
        padding-bottom: 10px;
        font-size: 18px;
        .title {
            font-weight: 500;
        }
        .special {
            padding-left: 25px;
        }
    }
    .content {
        display: -webkit-box;
        overflow: hidden;
        height: 54px;
        font-size: 14px;
        font-weight: 300;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .foot {
        padding-top: 10px;
        .tag {
            display: inline-block;
            .el-tag {
                margin-right: 5px;
            }
        }
        .time {
            display: inline-block;
            float: right;
            font-weight: 200;
        }
    }
}
</style>

<template>
    <div class="k-content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>标签</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="categoryCard" v-for="category in tree" :key="category.id">
            <div slot="header">
                <h3>{{ category.name }}</h3>
            </div>
            <div class="tagCardBox">
                <div v-for="tag in category.children" :key="tag.id" class="tagCard">
                    <el-card shadow="hover">
                        <div slot="header">
                            <h4 @click="info(tag.id)">{{ tag.name }}</h4>
                        </div>
                        <p>{{ tag.data.intro }}</p>
                    </el-card>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import { getTagTree } from "../../api/tag";

export default {
    name: "index",
    data() {
        return {
            tree: []
        };
    },
    mounted() {
        this.getTree();
    },
    methods: {
        getTree() {
            getTagTree().then(data => {
                this.tree = data;
            });
        },
        info(tagId) {
            this.$router.push(`/tags/${tagId}`);
        }
    }
};
</script>

<style scoped lang="scss">
.categoryCard {
    background-color: #a9b7c6;
    .tagCardBox {
        display: flex;
        flex-wrap: wrap;
        .tagCard {
            width: 30%;
            padding: 1.5%;
            h4:hover {
                color: #409eff;
            }
        }
    }
}
</style>

<template>
    <el-container>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="2" :offset="3">
                    <main-tag></main-tag>
                </el-col>
                <el-col :span="12">
                    <main-image></main-image>
                    <main-article></main-article>
                </el-col>
                <el-col :span="4">
                    <main-about></main-about>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import MainTag from "./components/HomeTag";
import MainImage from "./components/HomeImage";
import MainArticle from "./components/HomeArticle";
import MainAbout from "./components/HomeAbout";

export default {
    name: "Home",
    components: {
        MainTag,
        MainImage,
        MainArticle,
        MainAbout
    },
    methods: {
        manage() {
            this.$router.push("/manage");
        }
    }
};
</script>

<style scoped lang="scss">
.el-main {
    .el-divider {
        background-color: #0977ab;
    }
}
.el-footer {
    background-color: #909399;
}
</style>

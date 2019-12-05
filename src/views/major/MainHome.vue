<template>
    <el-container>
        <el-header>
            <div>Knowing HOW, Then Knowing WHY<span @click="manage">!</span></div>
        </el-header>
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
import MainTag from "./MainTag";
import MainImage from "./MainImage";
import MainArticle from "./MainArticle";
import MainAbout from "./MainAbout";

export default {
    name: "MainHome",
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
}
.el-footer {
    background-color: #909399;
}
</style>

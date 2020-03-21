<template>
    <div>
        <el-row class="k-content">
            <!--            <el-col :span="3">-->
            <!--                <main-tag></main-tag>-->
            <!--            </el-col>-->
            <el-col :span="18">
                <main-image></main-image>
                <main-article></main-article>
                <el-backtop target=".el-container"></el-backtop>
            </el-col>
            <el-col :span="5" :offset="1">
                <main-about></main-about>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import MainTag from "./components/HomeTag";
import MainImage from "./components/HomeImage";
import MainArticle from "./components/HomeArticle";
import MainAbout from "./components/HomeAbout";

export default {
    name: "Home",
    components: {
        // MainTag,
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

<style scoped lang="scss"></style>

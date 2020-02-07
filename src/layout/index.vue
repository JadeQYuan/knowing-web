<template>
    <el-container>
        <el-header :height="headerHeight">
            <nav-bar />
        </el-header>
        <el-main>
            <router-view />
        </el-main>
        <el-footer>
            <knowing-copyright />
        </el-footer>
    </el-container>
</template>

<script>
import NavBar from "@/layout/components/NavBar";
import KnowingCopyright from "./components/KnowingCopyright";
export default {
    name: "index",
    data() {
        return {
            headerHeight: "40px"
        };
    },
    components: {
        NavBar,
        KnowingCopyright
    }
};
</script>

<style scoped lang="scss">
.el-header {
    background-color: #a9b7c6;
    padding: 0;
}
.el-main {
    padding: 0;
    min-height: calc(100vh - 100px);
}
.el-footer {
    background-color: #a9b7c6;
}
</style>

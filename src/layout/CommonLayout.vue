<template>
    <el-scrollbar style="height: 100vh">
        <el-backtop target=".el-scrollbar__wrap"></el-backtop>
        <el-container class="wrapper">
            <el-header :height="headerHeight">
                <nav-bar />
            </el-header>
            <el-main>
                <router-view />
            </el-main>
            <snow-down />
            <dance-tree />
        </el-container>
    </el-scrollbar>
</template>

<script>
import NavBar from "@/layout/components/NavBar";
import DanceTree from "@/components/DanceTree/index";
import SnowDown from "../components/SnowDown/index";

export default {
    name: "CommonLayout",
    components: {
        SnowDown,
        NavBar,
        DanceTree
    },
    data() {
        return {
            headerHeight: "40px"
        };
    }
};
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .el-header {
        flex: 0 0 40px;
        padding: 0;
        background-color: #a9b7c6;
    }
    .el-main {
        flex: 1;
        padding: 0;
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    }
}
</style>

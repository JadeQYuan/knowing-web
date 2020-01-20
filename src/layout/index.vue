<template>
    <el-container>
        <el-header>
            <nav-bar />
        </el-header>
        <el-main>
            <router-view />
        </el-main>
        <el-footer>
            ???
        </el-footer>
    </el-container>
</template>

<script>
import NavBar from "@/layout/components/NavBar";
export default {
    name: "index",
    components: {
        NavBar
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
    min-height: 88vh;
}
.el-footer {
    background-color: #a9b7c6;
    div {
        width: 100%;
        text-align: center;
        background-color: #a9b7c6;
        color: #dbdbdb;
        font-size: 35px;
    }
}
</style>

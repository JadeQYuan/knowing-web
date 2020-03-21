<template>
    <el-container class="wrapper">
        <el-header :height="headerHeight">
            <nav-bar />
        </el-header>
        <el-container>
            <el-aside>
                <menu-bar />
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import NavBar from "@/layout/components/NavBar";
import MenuBar from "./components/MenuBar";
export default {
    name: "ManageLayout",
    data() {
        return {
            headerHeight: "40px"
        };
    },
    components: {
        MenuBar,
        NavBar
    }
};
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.el-header {
    padding: 0;
    background-color: #a9b7c6;
}
.el-aside {
    min-height: calc(100vh - 40px);
    background-color: #545c64;
}
.el-main {
    flex: 1;
    padding: 0;
    /*min-height: calc(100vh - 40px);*/
    /*background-color: #090a0f;*/
    /*opacity: 0.8;*/
}
</style>

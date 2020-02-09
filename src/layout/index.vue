<template>
    <el-container>
        <el-header :height="headerHeight">
            <nav-bar />
        </el-header>
        <el-container v-if="side">
            <el-aside>
                <menu-bar />
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
        <el-main v-else>
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
import MenuBar from "./components/MenuBar";
export default {
    name: "index",
    computed: {
        side() {
            return this.$route.path.startsWith("/manage");
        }
    },
    data() {
        return {
            headerHeight: "40px"
        };
    },
    components: {
        MenuBar,
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
.el-aside {
    min-height: calc(100vh - 100px);
    background-color: #545c64;
}
.el-main {
    padding: 0;
    min-height: calc(100vh - 100px);
}
.el-footer {
    background-color: #a9b7c6;
}
</style>

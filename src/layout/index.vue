<template>
    <el-scrollbar style="height: 100vh">
        <el-backtop target=".el-scrollbar__wrap"></el-backtop>
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
            <template v-else>
                <el-main>
                    <router-view />
                </el-main>
                <el-footer v-if="form">
                    <knowing-copyright />
                </el-footer>
            </template>
        </el-container>
    </el-scrollbar>
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
        },
        form() {
            return (
                this.$route.path.indexOf("/create") === -1 &&
                this.$route.path.indexOf("/update") === -1
            );
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
    min-height: calc(100vh - 40px);
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

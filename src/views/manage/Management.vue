<template>
    <el-container>
        <el-header>
            <div>Knowing HOW, Then Knowing WHY!</div>
        </el-header>
        <el-container>
            <el-aside>
                <el-row>
                    <el-col>
                        <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#a9b7c6"
                            text-color="#dbdbdb"
                            active-text-color="#ffd04b"
                            router="true"
                        >
                            <el-submenu index="1">
                                <template slot="title">
                                    <span>标签</span>
                                </template>
                                <el-menu-item index="/manage/tag">列表</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <span>文章</span>
                                </template>
                                <el-menu-item index="/manage/article">列表</el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <span>笔记</span>
                                </template>
                                <el-menu-item index="/manage/note">列表</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: "Management",
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
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
</style>

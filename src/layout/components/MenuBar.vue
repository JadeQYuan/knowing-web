<template>
    <el-menu
        background-color="#545c64"
        text-color="#dbdbdb"
        active-text-color="#ffd04b"
        :router="true"
    >
        <el-menu-item index="/manage">管理</el-menu-item>
        <el-menu-item index="/manage/special">专栏管理</el-menu-item>
        <el-menu-item index="/manage/tag">标签管理</el-menu-item>
        <el-menu-item index="/manage/article">文章管理</el-menu-item>
        <el-menu-item index="/manage/note">笔记管理</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: "MenuBar"
};
</script>

<style scoped>
.el-menu {
    border: 0;
}
</style>

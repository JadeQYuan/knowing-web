<template>
    <el-container>
        <el-aside>
            <el-row>
                <el-col>
                    <el-menu
                        background-color="#545c64"
                        text-color="#dbdbdb"
                        active-text-color="#ffd04b"
                        :router="true"
                    >
                        <el-menu-item index="/manage/tag">标签管理</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "Management",
    methods: {}
};
</script>

<style scoped lang="scss">
.el-aside {
    background-color: #545c64;
    min-height: calc(100vh - 100px);
}
</style>

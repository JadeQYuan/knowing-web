<template>
    <el-container>
        <el-header>
            <div>
                Knowing HOW, Then Knowing WHY!
                <span @click="home">首页</span>
                <span @click="special">专栏</span>
                <span>搜索</span>
                <span @click="login">登录</span>
                <span @click="manage">创建</span>
                <span>我的</span>
            </div>
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
export default {
    name: "index",
    methods: {
        home() {
            this.$router.push("/");
        },
        special() {
            this.$router.push("/special");
        },
        login() {
            this.$router.push("/login");
        },
        manage() {
            this.$router.push("/manage");
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
        font-size: 35px;
    }
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

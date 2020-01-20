<template>
    <div class="nav">
        <el-row>
            <el-col :offset="4" :span="4">
                <span>
                    <span @click="home">首页</span>
                    <span @click="special">专栏</span>
                </span>
            </el-col>
            <el-col :span="8">
                <span>
                    <span>
                        <el-input placeholder="请输入内容" v-model="input3">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </span>
                </span>
            </el-col>
            <el-col :offset="2" :span="4">
                <span>
                    <span @click="login">登录</span>
                    <span @click="manage">
                        创建
                        <!--                        <el-dropdown>-->
                        <!--                            <span class="el-dropdown-link">-->
                        <!--                                创建-->
                        <!--                            </span>-->
                        <!--                            <el-dropdown-menu slot="dropdown">-->
                        <!--                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>-->
                        <!--                                <el-dropdown-item icon="el-icon-circle-plus"-->
                        <!--                                    >狮子头</el-dropdown-item-->
                        <!--                                >-->
                        <!--                                <el-dropdown-item icon="el-icon-circle-plus-outline"-->
                        <!--                                    >螺蛳粉</el-dropdown-item-->
                        <!--                                >-->
                        <!--                                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>-->
                        <!--                                <el-dropdown-item icon="el-icon-circle-check"-->
                        <!--                                    >蚵仔煎</el-dropdown-item-->
                        <!--                                >-->
                        <!--                            </el-dropdown-menu>-->
                        <!--                        </el-dropdown>-->
                    </span>
                    <span>管理</span>
                    <span>我的</span>
                </span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "NavBar",
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
.nav {
    width: 100%;
    background-color: #a9b7c6;
    color: #dbdbdb;
    font-size: 30px;
    line-height: 2em;
}
</style>

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
                        <el-input placeholder="请输入内容" v-model="query">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </span>
                </span>
            </el-col>
            <el-col :offset="2" :span="4">
                <span v-if="!token">
                    <span @click="login">登录</span>
                </span>
                <span v-else>
                    <!--                    <span @click="manage">创建</span>-->
                    <!--                    <span>管理</span>-->
                    <!--                    <span>我的</span>-->
                    <span>{{ user.nickname }}</span>
                    <img :src="user.avatarUrl" />
                </span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "NavBar",
    computed: mapState(["token", "user"]),
    data() {
        return {
            query: ""
        };
    },
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

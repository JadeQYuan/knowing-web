<template>
    <div class="nav">
        <el-row>
            <el-col :offset="4" :span="2">
                <span>
                    <span class="navBtn" @click="home">首页</span>
                    <span class="navBtn" @click="special">专栏</span>
                </span>
            </el-col>
            <el-col :span="6">
                <span>
                    <span>
                        <el-input placeholder="请输入内容" v-model="query">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </span>
                </span>
            </el-col>
            <el-col :offset="8" :span="4">
                <span v-if="!token">
                    <span class="navBtn" @click="login">登录</span>
                </span>
                <span v-else>
                    <el-dropdown size="medium" @command="handleCreate">
                        <span class="navBtn">
                            创建
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="article">文章</el-dropdown-item>
                            <el-dropdown-item command="note">笔记</el-dropdown-item>
                            <el-dropdown-item command="special">专栏</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span class="navBtn" v-if="user" @click="manage">管理</span>
                    <span class="navBtn"></span>
                    <el-dropdown size="medium" @command="handleMy">
                        <span class="navBtn">
                            <img :src="user.avatarUrl" />
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="">
                                我的
                            </el-dropdown-item>
                            <el-dropdown-item command="special" :divided="true">
                                专栏
                            </el-dropdown-item>
                            <el-dropdown-item command="article">
                                文章
                            </el-dropdown-item>
                            <el-dropdown-item command="note">
                                笔记
                            </el-dropdown-item>
                            <el-dropdown-item command="logout" :divided="true">
                                退出
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
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
            this.push("/");
        },
        special() {
            this.push("/special");
        },
        login() {
            this.push("/login");
        },
        manage() {
            this.push("/manage");
        },
        handleCreate(command) {
            this.push(`/${command}/create`);
        },
        handleMy(command) {
            if (command === "logout") {
                this.$store.commit("clearUser");
            } else {
                this.push(`/my/${command}`);
            }
        },
        push(path) {
            this.$router.push(path);
        }
    }
};
</script>

<style scoped lang="scss">
.nav {
    width: 100%;
    span.navBtn {
        padding-left: 5px;
        padding-right: 5px;
        font-size: 20px;
        line-height: 2em;
        color: #dbdbdb;
        &:hover {
            color: #5d5d5d;
        }
    }
    img {
        height: 28px;
        width: 28px;
        border-radius: 14px;
        position: absolute;
        top: 14%;
    }
}
</style>

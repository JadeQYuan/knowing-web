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
                    <span class="navBtn" @click="dialogTableVisible = true">登录</span>
                </span>
                <span v-else>
                    <el-dropdown size="medium" @command="handleCreate" placement="bottom-start">
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
                    <el-dropdown size="medium" @command="handleMy" placement="bottom-start">
                        <span class="navBtn">
                            <el-avatar
                                size="small"
                                :src="user.avatarUrl"
                                icon="el-icon-user-solid"
                            ></el-avatar>
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
        <el-dialog
            title="登录"
            :visible.sync="dialogTableVisible"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :center="true"
            width="450px"
        >
            <login v-on:clicked="clicked" />
        </el-dialog>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Login from "../../views/login/index";
export default {
    name: "NavBar",
    components: { Login },
    data() {
        return {
            dialogTableVisible: false,
            query: ""
        };
    },
    computed: mapState(["token", "user"]),
    methods: {
        home() {
            this.push("/");
        },
        special() {
            this.push("/specials");
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
                this.$router.push("/");
            } else {
                this.push(`/my/${command}`);
            }
        },
        push(path) {
            this.$router.push(path);
        },
        clicked() {
            this.dialogTableVisible = false;
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
        line-height: 2em;
        font-size: 20px;
        color: #dbdbdb;
        &:hover {
            color: #5d5d5d;
        }
    }
    .el-avatar {
        position: absolute;
        top: 14%;
    }
}
</style>

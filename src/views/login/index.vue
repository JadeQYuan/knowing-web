<template>
    <el-row>
        <el-col :span="8">
            <img src="@/assets/svg/qq.svg" @click="qqLogin" />
            <div @click="qqLogin">QQ登录</div>
        </el-col>
        <el-col :span="8">
            <img src="@/assets/svg/github.svg" @click="gitHubLogin" />
            <div @click="gitHubLogin">Github登录</div>
        </el-col>
        <el-col :span="8">
            <img src="@/assets/svg/weiBo.svg" @click="weiBoLogin" />
            <div @click="weiBoLogin">新浪微博登录</div>
        </el-col>
    </el-row>
</template>

<script>
import { getLoginUrl } from "@/api/auth";

export default {
    name: "login",
    methods: {
        qqLogin() {
            this.loginUrl("QQ");
        },
        gitHubLogin() {
            this.loginUrl("GitHub");
        },
        weiBoLogin() {
            this.$alert("新浪微博登录待实现！");
        },
        loginUrl(authPlateForm) {
            this.$emit("clicked");
            getLoginUrl(authPlateForm).then(data => {
                window.open(data, "_target");
            });
        }
    }
};
</script>

<style scoped lang="scss">
img {
    width: 80px;
    height: 80px;
}
div {
    text-align: center;
}
</style>

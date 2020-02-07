<template>
    <div>
        <img src="@/assets/QQ2.png" @click="qqLogin" width="450" height="320" />
        <a @click="gitHubLogin">GitHub登录</a>
    </div>
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
        loginUrl(authPlateForm) {
            getLoginUrl(authPlateForm).then(data => {
                window.open(data, "_target");
            });
        }
    }
};
</script>

<style scoped></style>

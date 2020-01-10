<template>
    <div>
        <img src="@/assets/QQ2.png" @click="qqLogin" width="450" height="320" />
    </div>
</template>

<script>
import { getQQLoginUrl } from "@/api/auth";

export default {
    name: "login",
    methods: {
        qqLogin() {
            getQQLoginUrl().then(data => {
                window.open(data, "_blank");
            });
            // var A=window.open("oauth/index.php","TencentLogin",
            //     "width=450,height=320,menubar=0,scrollbars=1,
            // resizable=1,status=1,titlebar=0,toolbar=0,location=1");
        }
    }
};
</script>

<style scoped></style>

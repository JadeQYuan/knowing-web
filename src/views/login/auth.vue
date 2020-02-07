<template>
    <div v-loading.fullscreen.lock="fullscreenLoading"></div>
</template>

<script>
import { login } from "@/api/auth";
export default {
    name: "index",
    data() {
        return {
            fullscreenLoading: true
        };
    },
    mounted: function() {
        if (this.$route.query.code && this.$route.query.state) {
            login(this.$route.query).then(data => {
                this.$store.commit("saveToken", { token: data });
                this.$router.replace("/");
            });
        }
    }
};
</script>

<style scoped></style>

<template>
    <div class="grid-content bg-purple">
        <div class="k-more">
            <h3>关于我</h3>
            <div class="k-avatar">
                <el-avatar icon="el-icon-user-solid"></el-avatar>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeAbout"
};
</script>

<style scoped lang="scss">
.k-more {
    background-color: #dbdbdb;
    width: 100%;
    h3 {
        text-align: center;
    }
    .k-avatar {
        width: 100%;
        height: 50px;
    }
}
</style>

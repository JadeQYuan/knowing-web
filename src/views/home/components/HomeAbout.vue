<template>
    <div class="about">
        <div class="avatar">
            <img src="@/assets/images/avatar.jpg" />
        </div>
        <div class="connect">
            <span class="github" @click="openGithub" />
            <el-tooltip effect="light">
                <div slot="content">
                    <img src="@/assets/images/myQQ.jpg" width="128px" height="128px" />
                </div>
                <span class="qq" />
            </el-tooltip>
            <el-tooltip effect="light">
                <div slot="content">
                    <img src="@/assets/images/myWeChat.jpg" width="128px" height="128px" />
                </div>
                <span class="weChat" />
            </el-tooltip>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeAbout",
    methods: {
        openGithub() {
            window.open("https://github.com/KnowingPlus", "_black");
        }
    }
};
</script>

<style scoped lang="scss">
.about {
    width: 200px;
    height: 250px;
    background-color: #dbdbdb;
    text-align: center;
    .avatar {
        img {
            width: 200px;
            height: 200px;
        }
    }
    .connect {
        line-height: 3.5em;
        text-align: center;
        span {
            display: inline-block;
            width: 26px;
            height: 26px;
            padding: 0 10px;
        }
        .qq {
            background: url("../../../assets/svgs/qq.svg") no-repeat center center;
            background-size: 26px 26px;
            &:hover {
                background: url("../../../assets/svgs/qq-light.svg") no-repeat center center;
                background-size: 26px 26px;
            }
        }
        .github {
            background: url("../../../assets/svgs/github.svg") no-repeat center center;
            background-size: 26px 26px;
            &:hover {
                background: url("../../../assets/svgs/github-light.svg") no-repeat center center;
                background-size: 26px 26px;
            }
        }
        .weChat {
            background: url("../../../assets/svgs/weChat.svg") no-repeat center center;
            background-size: 26px 26px;
            &:hover {
                background: url("../../../assets/svgs/weChat-light.svg") no-repeat center center;
                background-size: 26px 26px;
            }
        }
    }
    .my {
        width: 64px;
        height: 64px;
    }
}
</style>

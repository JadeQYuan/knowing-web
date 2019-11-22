<template>
    <div class="home">
        <!--        <el-carousel :interval="4000" type="card" height="200px">-->
        <!--            <el-carousel-item v-for="item in a" :key="item">-->
        <!--                <h3 class="medium">-->
        <!--                    <router-link :to="item.path">{{ item.name }}</router-link>-->
        <!--                </h3>-->
        <!--            </el-carousel-item>-->
        <!--        </el-carousel>-->
        <p>
            <router-link to="/tag">TAG</router-link>
        </p>
        <p>
            <router-link to="/article">ARTICLE</router-link>
        </p>
        <p>
            <router-link to="/note">NOTE</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            // a: [
            //     { name: "article", path: "/article" },
            //     { name: "note", path: "/note" },
            //     { name: "tag", path: "/tag" }
            // ]
        };
    }
};
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>

<template>
    <div class="k-content">
        <div class="header-wrapper">
            <h2>{{ model.title }}</h2>
            <time>{{ model.createTime }}</time>
            <div class="tag-wrapper">
                <el-tag v-for="tag in model.tags" :key="tag.id">
                    {{ tag.name }}
                </el-tag>
            </div>
        </div>
        <md-editor :value="model.content" mode="view" />
    </div>
</template>

<script>
import MdEditor from "@/components/MdEditor";
import { getInfo } from "@/api/article";

export default {
    name: "ArticleView",
    components: {
        MdEditor
    },
    props: {
        id: String
    },
    data() {
        return {
            model: {
                id: "",
                title: "",
                tags: [],
                content: ""
            }
        };
    },
    mounted() {
        getInfo(this.id).then(data => {
            this.model = data;
        });
    }
};
</script>

<style scoped lang="scss">
.header-wrapper {
    padding: 10px 0;
    background-color: #ddd;
    text-align: center;
    .tag-wrapper {
        margin-top: 10px;
    }
}
</style>

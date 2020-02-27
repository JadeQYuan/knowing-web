<template>
    <div class="k-content">
        <div>{{ model.title }}</div>
        <div>
            <el-tag v-for="tag in model.tags" :key="tag.id">
                {{ tag.name }}
            </el-tag>
        </div>
        <md-editor :value="model.content" mode="view" />
    </div>
</template>

<script>
import MdEditor from "@/components/MdEditor";
import { getInfo } from "@/api/article";

export default {
    name: "ArticleView",
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
    components: {
        MdEditor
    },
    mounted() {
        getInfo(this.$route.params.id).then(data => {
            this.model = data;
        });
    }
};
</script>

<style scoped></style>

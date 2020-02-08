<template>
    <div class="k-content">
        <div>{{ model.title }}</div>
        <div>
            <el-tag v-for="tag in model.tags" :key="tag.id">
                {{ tag.name }}
            </el-tag>
        </div>
        <!--    <div>{{ model.content }}</div>-->
        <mavonEditor
            :value="model.content"
            :subfield="false"
            defaultOpen="preview"
            :editable="false"
            :toolbarsFlag="false"
            :navigation="true"
        ></mavonEditor>
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
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
        mavonEditor
    },
    mounted() {
        getInfo(this.$route.params.id)
            .then(data => {
                this.model = data;
            })
            .catch(error => {
                this.$alert(error, {
                    confirmButtonText: "确定"
                });
            });
    }
};
</script>

<style scoped></style>

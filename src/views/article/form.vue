<template>
    <div>
        <el-form :model="formModel">
            <el-form-item> title : <el-input v-model="formModel.title"></el-input> </el-form-item>
            <el-form-item>
                tags :
                <el-checkbox-group v-model="formModel.tags">
                    <template v-for="tag in tags">
                        <el-checkbox :label="tag" :key="tag.id">{{ tag.name }}</el-checkbox>
                    </template>
                </el-checkbox-group>
                <el-tag v-for="tag in formModel.tags" :key="tag.id" closable type="info">
                    {{ tag.name }}
                </el-tag>
            </el-form-item>
            <el-form-item>
                <!--        content : <el-input v-model="formModel.content"></el-input>-->
                <mavon-editor v-model="formModel.content"></mavon-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="add">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { getTagList } from "@/api/tag";
import { addArticle } from "@/api/article";

export default {
    name: "articleForm",
    data() {
        return {
            formModel: {
                title: "",
                tags: [],
                content: "",
            },
            tags: [],
        };
    },
    components: {
        mavonEditor,
    },
    mounted() {
        getTagList().then(data => {
            this.tags = data.data;
        });
    },
    methods: {
        add() {
            addArticle(this.formModel);
        },
    },
};
</script>

<style scoped></style>

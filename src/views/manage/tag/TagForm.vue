<template>
    <div>
        <el-form :model="formModel">
            <el-form-item label="名称">
                <el-input v-model="formModel.name"></el-input>
            </el-form-item>
            <el-select v-model="formModel.categoryId" placeholder="请选择分类">
                <el-option
                    v-for="item in categoryList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                >
                </el-option>
            </el-select>
            <el-form-item label="描述">
                <el-input v-model="formModel.intro"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="commit">{{ btnName }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { addTag, getTagInfo, updateTag, getTagCategoryList } from "@/api/tag";

export default {
    name: "TagForm",
    props: ["id"],
    data() {
        return {
            categoryList: [],
            formModel: {
                name: "",
                categoryId: "",
                intro: ""
            }
        };
    },
    computed: {
        btnName: function() {
            return this.id ? "更新" : "创建";
        }
    },
    mounted() {
        if (this.id) {
            getTagInfo(this.id).then(data => (this.formModel = data));
        }
        getTagCategoryList().then(data => {
            this.categoryList = data;
        });
    },
    methods: {
        commit() {
            if (!this.id) {
                addTag(this.formModel).then(() => {
                    this.$emit("refresh");
                });
            } else {
                updateTag(this.id, this.formModel).then(() => {
                    this.$emit("refresh");
                });
            }
        }
    }
};
</script>

<style scoped></style>

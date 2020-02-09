<template>
    <el-form :model="formModel" class="k-content">
        <el-form-item>
            <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="专栏">
            <el-select v-model="formModel.specialId" placeholder="请选择专栏">
                <el-option
                    v-for="item in specials"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                >
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            标签 :
            <el-checkbox-group v-model="formModel.tags" v-show="tagSelectable">
                <template v-for="tag in tags">
                    <el-checkbox :label="tag" :key="tag.id">{{ tag.name }}</el-checkbox>
                </template>
            </el-checkbox-group>
            <el-tag v-for="tag in formModel.tags" :key="tag.id" closable @close="handleClose(tag)">
                {{ tag.name }}
            </el-tag>
        </el-form-item>
        <el-form-item>
            <!--        content : <el-input v-model="formModel.content"></el-input>-->
            <mavon-editor v-model="formModel.content"></mavon-editor>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">{{ btnName }}</el-button>
            <el-button @click="back">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { getTagList } from "@/api/tag";
import { getMySpecialList } from "@/api/special";
import { addArticle, getInfo, updateArticle } from "@/api/article";

export default {
    name: "ArticleForm",
    computed: {
        btnName: function() {
            return this.id ? "更新" : "创建";
        },
        tagSelectable: function() {
            return !this.id;
        }
    },
    data() {
        return {
            id: "",
            formModel: {
                title: "",
                tags: [],
                content: "",
                specialId: ""
            },
            specials: [],
            tags: []
        };
    },
    components: {
        mavonEditor
    },
    mounted() {
        const id = this.$route.params.id;
        this.id = id;
        if (id) {
            getInfo(id)
                .then(data => (this.formModel = data))
                .catch(error => {
                    this.$alert(error, {
                        confirmButtonText: "确定"
                    });
                });
        } else {
            getTagList()
                .then(data => {
                    this.tags = data;
                })
                .catch(error => {
                    this.$alert(error, {
                        confirmButtonText: "确定"
                    });
                });
            getMySpecialList()
                .then(data => {
                    this.specials = data;
                })
                .catch(error => {
                    this.$alert(error, {
                        confirmButtonText: "确定"
                    });
                });
        }
    },
    methods: {
        submit() {
            if (this.id) {
                updateArticle(this.id, this.formModel)
                    .then(() => {
                        this.$router.go(-1);
                    })
                    .catch(error => {
                        this.$alert(error, {
                            confirmButtonText: "确定"
                        });
                    });
            } else {
                addArticle(this.formModel)
                    .then(() => {
                        this.$router.go(-1);
                    })
                    .catch(error => {
                        this.$alert(error, {
                            confirmButtonText: "确定"
                        });
                    });
            }
        },
        handleClose(tag) {
            this.formModel.tags.remove(tag);
        },
        back() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped></style>

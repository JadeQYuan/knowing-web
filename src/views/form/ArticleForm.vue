<template xmlns:el-col="http://www.w3.org/1999/html">
    <el-form :model="formModel" class="k-content">
        <el-form-item>
            <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item>
            <el-col :span="24">
                <el-select
                    v-model="formModel.specialId"
                    placeholder="请选择专栏"
                    style="width: 100%"
                >
                    <el-option
                        v-for="item in specials"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    >
                    </el-option>
                </el-select>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col :span="24">
                <el-cascader
                    style="width: 100%"
                    v-model="formModel.tags"
                    placeholder="请选择标签"
                    :options="tags"
                    :show-all-levels="false"
                    :filterable="true"
                    :props="{
                        expandTrigger: 'hover',
                        multiple: true,
                        max: 5,
                        label: 'name',
                        value: 'id',
                        emitPath: false
                    }"
                    clearable
                >
                </el-cascader>
            </el-col>
        </el-form-item>
        <el-form-item>
            <md-editor mode="edit" :value="formModel.content" @save="save" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">{{ btnName }}</el-button>
            <el-button @click="back">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import MdEditor from "@/components/MdEditor";
import { getTagTree } from "@/api/tag";
import { getMySpecialList } from "@/api/special";
import { addArticle, getInfo, updateArticle } from "@/api/article";

export default {
    name: "ArticleForm",
    computed: {
        btnName: function() {
            return this.id ? "更新" : "创建";
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
        MdEditor
    },
    mounted() {
        const id = this.$route.params.id;
        this.id = id;
        if (id) {
            getInfo(id).then(data => (this.formModel = data));
        } else {
            getTagTree().then(data => {
                this.tags = data;
            });
            getMySpecialList().then(data => {
                this.specials = data;
            });
        }
    },
    methods: {
        save() {
            if (this.id) {
                this.submit();
            }
        },
        submit() {
            if (this.id) {
                updateArticle(this.id, this.formModel).then(() => {
                    this.$router.go(-1);
                });
            } else {
                addArticle(this.formModel).then(() => {
                    this.$router.go(-1);
                });
            }
        },
        back() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped lang="scss"></style>

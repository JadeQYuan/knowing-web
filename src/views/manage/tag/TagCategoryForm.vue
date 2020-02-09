<template>
    <div>
        <el-form :model="formModel">
            <el-form-item> 名称 : <el-input v-model="formModel.name"></el-input> </el-form-item>
            <el-form-item label="共享">
                <el-radio v-model="formModel.shared" :label="true">是</el-radio>
                <el-radio v-model="formModel.shared" :label="false">否</el-radio>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="commit">{{ btnName }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { addTagCategory, getTagCategory, updateTagCategory } from "@/api/tag";

export default {
    name: "TagCategoryForm",
    props: ["id"],
    data() {
        return {
            formModel: {
                name: "",
                shared: ""
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
            getTagCategory(this.id)
                .then(data => (this.formModel = data))
                .catch(error => {
                    this.$alert(error, {
                        confirmButtonText: "确定"
                    });
                });
        }
    },
    methods: {
        commit() {
            if (!this.id) {
                addTagCategory(this.formModel)
                    .then(() => {
                        this.$emit("refresh");
                    })
                    .catch(error => {
                        this.$alert(error, {
                            confirmButtonText: "确定"
                        });
                    });
            } else {
                updateTagCategory(this.id, this.formModel)
                    .then(() => {
                        this.$emit("refresh");
                    })
                    .catch(error => {
                        this.$alert(error, {
                            confirmButtonText: "确定"
                        });
                    });
            }
        }
    }
};
</script>

<style scoped></style>

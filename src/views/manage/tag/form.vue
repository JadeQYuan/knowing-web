<template>
    <div>
        <el-form :model="formModel">
            <el-form-item> name : <el-input v-model="formModel.name"></el-input> </el-form-item>
            <el-form-item>
                description : <el-input v-model="formModel.description"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="commit">{{ btnName }}</el-button>
                <el-button @click="back">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { addTag, getTagInfo } from "@/api/tag";

export default {
    name: "tagForm",
    data() {
        return {
            id: "",
            formModel: {
                name: "",
                description: ""
            }
        };
    },
    computed: {
        btnName: function() {
            return this.id ? "更新" : "创建";
        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.id = id;
        if (id) {
            getTagInfo(id)
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
            addTag(this.formModel)
                .then(() => {
                    this.back();
                })
                .catch(error => {
                    this.$alert(error, {
                        confirmButtonText: "确定"
                    });
                });
        },
        back() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped></style>

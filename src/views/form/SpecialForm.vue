<template>
    <div>
        <el-form :model="formModel">
            <el-form-item>
                名称 :
                <el-input v-model="formModel.name"></el-input>
            </el-form-item>
            <el-form-item>
                描述 :
                <el-input v-model="formModel.intro" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
                共享 :
                <el-radio v-model="formModel.shared" :label="true">是</el-radio>
                <el-radio v-model="formModel.shared" :label="false">否</el-radio>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">{{ btnName }}</el-button>
                <el-button @click="back">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";
import { addSpecial, getInfo, updateSpecial } from "@/api/special";

export default {
    name: "NoteForm",
    computed: {
        btnName: function() {
            return this.id ? "更新" : "创建";
        }
    },
    data() {
        return {
            id: "",
            formModel: {
                name: "",
                intro: "",
                shared: false
            }
        };
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
        }
    },
    methods: {
        submit() {
            if (this.id) {
                updateSpecial(this.id, this.formModel)
                    .then(() => {
                        this.$router.go(-1);
                    })
                    .catch(error => {
                        this.$alert(error, {
                            confirmButtonText: "确定"
                        });
                    });
            } else {
                addSpecial(this.formModel)
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
        back() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped></style>

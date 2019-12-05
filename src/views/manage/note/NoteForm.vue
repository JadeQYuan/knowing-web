<template>
    <div>
        <el-form :model="formModel">
            <el-form-item> title : <el-input v-model="formModel.title"></el-input> </el-form-item>
            <el-form-item>
                <!--        content : <el-input v-model="formModel.content"></el-input>-->
                <mavonEditor v-model="formModel.content"></mavonEditor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">{{ btnName }}</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { addNote, getInfo, updateNote } from "@/api/note";

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
                title: "",
                content: ""
            }
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
        }
    },
    methods: {
        submit() {
            if (this.id) {
                updateNote(this.id, this.formModel)
                    .then(() => {
                        this.$router.go(-1);
                    })
                    .catch(error => {
                        this.$alert(error, {
                            confirmButtonText: "确定"
                        });
                    });
            } else {
                addNote(this.formModel)
                    .then(() => {
                        this.$router.go(-1);
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

<template>
    <el-form :model="formModel" class="k-content">
        <el-form-item>
            <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
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
        MdEditor
    },
    mounted() {
        const id = this.$route.params.id;
        this.id = id;
        if (id) {
            getInfo(id).then(data => (this.formModel = data));
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
                updateNote(this.id, this.formModel).then(() => {
                    this.$router.go(-1);
                });
            } else {
                addNote(this.formModel).then(() => {
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

<style scoped lang="scss">
.el-form {
    padding-top: 25px;
}
</style>

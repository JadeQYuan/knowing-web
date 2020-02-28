<template>
    <data-form
        class="k-content"
        :id="id"
        :insertFunc="insertFunc"
        :getFunc="getFunc"
        :updateFunc="updateFunc"
        :formItems="formItems"
        :rules="rules"
        @submitted="submitted"
    />
</template>

<script>
import DataForm from "@/components/DataForm";
import { addNote, getInfo, updateNote } from "@/api/note";

export default {
    name: "NoteForm",
    components: { DataForm },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    data() {
        return {
            insertFunc: addNote,
            getFunc: getInfo,
            updateFunc: updateNote,
            formItems: [
                { label: "标题", type: "text", prop: "title" },
                { label: "内容", type: "editor", prop: "content" }
            ],
            rules: {
                title: [
                    { required: true, message: "请输入标题", trigger: "blur" },
                    { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
                ],
                content: [
                    { required: true, message: "请填写内容", trigger: "blur" },
                    { min: 20, message: "长度不能小于 20", trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        submitted() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped lang="scss"></style>

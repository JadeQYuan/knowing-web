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
import { addSpecial, getInfo, updateSpecial } from "@/api/special";

export default {
    name: "NoteForm",
    components: { DataForm },
    props: {
        id: String
    },
    data() {
        return {
            insertFunc: addSpecial,
            getFunc: getInfo,
            updateFunc: updateSpecial,
            formItems: [
                { label: "名称", type: "text", prop: "name" },
                { label: "描述", type: "textarea", prop: "intro" },
                { label: "共享", type: "switch", prop: "shared", value: true }
            ],
            rules: {
                name: [
                    { required: true, message: "请输入专栏名称", trigger: "blur" },
                    { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
                ],
                intro: [
                    { required: true, message: "请填写专栏描述", trigger: "blur" },
                    { min: 5, max: 200, message: "长度在 5 到 200 个字符", trigger: "blur" }
                ],
                shared: [{ required: true, message: "请选择是否共享", trigger: "change" }]
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

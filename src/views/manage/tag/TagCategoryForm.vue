<template>
    <data-form
        :id="id"
        :insertFunc="insertFunc"
        :getFunc="getFunc"
        :updateFunc="updateFunc"
        :formItems="formItems"
        :rules="rules"
        @submitted="refresh"
    />
</template>

<script>
import DataForm from "@/components/DataForm";
import { addTagCategory, getTagCategory, updateTagCategory } from "@/api/tag";

export default {
    name: "TagCategoryForm",
    props: ["id"],
    components: { DataForm },
    data() {
        return {
            insertFunc: addTagCategory,
            getFunc: getTagCategory,
            updateFunc: updateTagCategory,
            formItems: [
                { label: "名称", type: "text", prop: "name" },
                { label: "共享", type: "switch", prop: "shared", value: true }
            ],
            rules: {
                name: [
                    { required: true, message: "请输入名称", trigger: "blur" },
                    { min: 2, max: 12, message: "长度在 2 到 12 个字符", trigger: "blur" }
                ],
                shared: [{ required: true, message: "请选择是否共享", trigger: "change" }]
            }
        };
    },
    methods: {
        refresh() {
            this.$emit("refresh");
        }
    }
};
</script>

<style scoped></style>

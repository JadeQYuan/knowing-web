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
import { addTag, getTagInfo, updateTag } from "@/api/tag";

export default {
    name: "TagForm",
    props: {
        id: String,
        tagCategoryList: Array
    },
    components: { DataForm },
    data() {
        return {
            insertFunc: addTag,
            getFunc: getTagInfo,
            updateFunc: updateTag,
            formItems: [
                { label: "名称", type: "text", prop: "name" },
                {
                    label: "分类",
                    type: "select",
                    prop: "categoryId",
                    options: this.tagCategoryList,
                    optionLabelProp: "name",
                    optionValueProp: "id"
                },
                { label: "描述", type: "textarea", prop: "intro" }
            ],
            rules: {
                name: [
                    { required: true, message: "请输入名称", trigger: "blur" },
                    { min: 2, max: 15, message: "长度在 2 到 15 个字符", trigger: "blur" }
                ],
                categoryId: [
                    { required: true, message: "请选择分类", trigger: "change" },
                    {
                        validator: (rule, value, callback) => {
                            if (value === "0") {
                                callback(new Error("请选择分类"));
                            } else {
                                callback();
                            }
                        },
                        trigger: "change"
                    }
                ],
                intro: [
                    { required: true, message: "请输入描述", trigger: "blur" },
                    { min: 8, max: 100, message: "长度在 8 到 100 个字符", trigger: "blur" }
                ]
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

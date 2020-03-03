<template xmlns:el-col="http://www.w3.org/1999/html">
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
import { getTagTree } from "@/api/tag";
import { getMySpecialList } from "@/api/special";
import { addArticle, getInfo, updateArticle } from "@/api/article";

export default {
    name: "ArticleForm",
    components: { DataForm },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    data() {
        return {
            insertFunc: addArticle,
            getFunc: getInfo,
            updateFunc: updateArticle,
            formItems: [
                { label: "标题", type: "text", prop: "title" },
                {
                    label: "专栏",
                    type: "select",
                    prop: "specialId",
                    optionsFunc: getMySpecialList,
                    optionLabelProp: "name",
                    optionValueProp: "id"
                },
                {
                    label: "标签",
                    type: "cascade",
                    prop: "tags",
                    value: [],
                    options: [],
                    optionsFunc: getTagTree,
                    optionLabelProp: "name",
                    optionValueProp: ""
                },
                { label: "内容", type: "editor", prop: "content" }
            ],
            rules: {
                title: [
                    { required: true, message: "请输入标题", trigger: "blur" },
                    { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
                ],
                tags: [
                    { required: true, message: "请选择标签", trigger: "change" },
                    {
                        validator: (rule, value, callback) => {
                            if (value.length > 5) {
                                callback(new Error("最多只能选择5个标签"));
                            } else {
                                callback();
                            }
                        },
                        trigger: "change"
                    }
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

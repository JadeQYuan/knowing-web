<template>
    <el-form :model="model" :rules="rules" ref="form" label-width="80px" label-position="left">
        <el-form-item
            v-for="(item, index) in formItems"
            :key="index"
            :label="item.label"
            :prop="item.prop"
        >
            <template v-if="item.type === 'text'">
                <el-input v-model="model[item.prop]" :placeholder="item.placeholder" />
            </template>
            <template v-else-if="item.type === 'textarea'">
                <el-input
                    v-model="model[item.prop]"
                    type="textarea"
                    :placeholder="item.placeholder"
                    :autosize="{ minRows: 2, maxRows: 5 }"
                />
            </template>
            <template v-else-if="item.type === 'radio'">
                <el-radio-group v-model="model[item.prop]">
                    <el-radio v-for="(option, i) in item.options" :key="i" :label="option.value">
                        {{ option.label }}
                    </el-radio>
                </el-radio-group>
            </template>
            <template v-else-if="item.type === 'checkbox'">
                <el-checkbox v-model="model[item.prop]" />
            </template>
            <template v-else-if="item.type === 'checkbox-group'">
                <el-checkbox-group v-model="model[item.prop]">
                    <el-checkbox v-for="(option, i) in item.options" :key="i" :label="option.value">
                        {{ option.label }}
                    </el-checkbox>
                </el-checkbox-group>
            </template>
            <template v-else-if="item.type === 'switch'">
                <el-switch v-model="model[item.prop]" />
            </template>
            <template v-else-if="item.type === 'select'">
                <el-select
                    v-model="model[item.prop]"
                    :multiple="item.multiple"
                    :placeholder="item.placeholder"
                >
                    <el-option
                        v-for="(option, i) in item.options"
                        :key="i"
                        :label="option[item.optionLabelProp]"
                        :value="option[item.optionValueProp]"
                    />
                </el-select>
            </template>
            <template v-else-if="item.type === 'cascade'">
                <el-cascader
                    style="width: 100%"
                    v-model="model[item.prop]"
                    :placeholder="item.placeholder"
                    :options="item.options"
                    :show-all-levels="false"
                    :filterable="true"
                    :props="{
                        expandTrigger: 'hover',
                        multiple: true,
                        label: item.optionLabelProp,
                        value: item.optionValueProp,
                        emitPath: false
                    }"
                    clearable
                />
            </template>
            <template v-else-if="item.type === 'editor'">
                <md-editor mode="edit" v-model="model[item.prop]" @save="save" />
            </template>
        </el-form-item>
        <el-form-item class="btnItem">
            <el-button type="primary" @click="submit">{{ btnName }}</el-button>
            <el-button @click="resetForm">重置</el-button>
            <el-button @click="back">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import MdEditor from "@/components/MdEditor";
export default {
    name: "DataForm",
    components: { MdEditor },
    props: {
        id: String,
        insertFunc: Function,
        getFunc: Function,
        updateFunc: Function,
        formItems: Array,
        rules: Object
    },
    computed: {
        btnName: function() {
            return this.id ? "更新" : "创建";
        }
    },
    mounted() {
        if (this.id) {
            this.getFunc(this.id).then(data => (this.model = data));
        }
    },
    data() {
        const model = {};
        this.formItems.forEach(item => {
            model[item.prop] = item.value === undefined ? "" : item.value;
            let funcArr = ["select", "cascade"];
            if (funcArr.includes(item.type) && item.optionsFunc instanceof Function) {
                item.optionsFunc().then(data => (item.options = data));
            }
        });
        return { model };
    },
    methods: {
        submit() {
            this.$refs["form"].validate(valid => {
                if (valid) {
                    if (this.id) {
                        this.updateFunc(this.id, this.model).then(() => {
                            this.success();
                        });
                    } else {
                        this.insertFunc(this.model).then(() => {
                            this.success();
                        });
                    }
                } else {
                    return false;
                }
            });
        },
        resetForm() {
            this.$refs["form"].resetFields();
        },
        back() {
            this.$router.go(-1);
        },
        save() {
            if (this.id) {
                this.submit();
            }
        },
        success() {
            this.$message({
                message: "提交成功！",
                type: "success"
            });
            this.$emit("submitted");
        }
    }
};
</script>

<style scoped lang="scss">
.btnItem {
    text-align: center;
}
</style>

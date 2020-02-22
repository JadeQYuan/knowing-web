<template>
    <div>
        <el-form :inline="true">
            <template v-for="item in items">
                <el-form-item :label="item.label" :key="item.label">
                    <el-input v-model="item.value" :placeholder="item.placeholder"></el-input>
                </el-form-item>
            </template>
            <el-form-item>
                <el-button type="primary" @click="handleQuery">查询</el-button>
                <el-button type="primary" @click="handleReset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "QueryForm",
    props: {
        items: Array
    },
    methods: {
        handleQuery() {
            this.$emit("query");
        },
        handleReset() {
            this.items.forEach(item => {
                item.value = "";
            });
            this.$emit("query");
        }
    }
};
</script>

<style scoped></style>

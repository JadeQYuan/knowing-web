<template>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 40]"
        :current-page="pageParam.pageNum"
        :page-size="pageParam.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageParam.total"
    >
    </el-pagination>
</template>

<script>
export default {
    name: "DataPage",
    computed: {
        pageParam() {
            return this.$parent.pageParam;
        }
    },
    methods: {
        handleSizeChange(val) {
            this.$emit("size-change", val);
        },
        handleCurrentChange(val) {
            this.$emit("current-change", val);
        }
    }
};
</script>

<style scoped></style>

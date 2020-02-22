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
    props: {
        pageParam: Object
    },
    methods: {
        handleSizeChange(val) {
            this.pageParam.pageSize = val;
            this.$emit("query");
        },
        handleCurrentChange(val) {
            this.pageParam.pageNum = val;
            this.$emit("query");
        }
    }
};
</script>

<style scoped></style>

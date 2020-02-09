<template>
    <div class="k-content">
        <el-table :data="tableData">
            <el-table-column prop="name" label="名称" width="180"> </el-table-column>
            <el-table-column prop="address" label="文章数" width="180"> </el-table-column>
            <el-table-column prop="address" label="作者" width="180"> </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="180"> </el-table-column>
            <el-table-column prop="name" label="描述"> </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="query.currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="query.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total"
        >
        </el-pagination>
    </div>
</template>

<script>
import { getSpecialPage } from "@/api/special";
export default {
    name: "index",
    data() {
        return {
            tableData: [],
            query: {
                pageNum: 1,
                pageSize: 10
            },
            page: {
                total: 0
            }
        };
    },
    mounted() {
        this.getList();
    },
    methods: {
        info(row) {
            this.$router.push(`/manage/article/${row.id}/view`);
        },
        modify(row) {
            this.$router.push(`/manage/article/${row.id}`);
        },
        getList() {
            getSpecialPage(this.query)
                .then(data => {
                    this.tableData = data.list;
                    this.page.total = data.total;
                })
                .catch(error => {
                    this.$alert(error, {
                        confirmButtonText: "确定"
                    });
                });
        },
        handleSizeChange(val) {
            this.query.pageSize = val;
            this.getList();
        },
        handleCurrentChange(val) {
            this.query.pageNum = val;
            this.getList();
        }
    }
};
</script>

<style scoped lang="scss"></style>

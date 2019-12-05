<template>
    <el-container>
        <el-main>
            <el-form :inline="true" :model="query" class="demo-form-inline">
                <el-form-item label="名称">
                    <el-input v-model="query.name" placeholder="名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getList">查询</el-button>
                    <el-button type="primary" @click="resetQuery">重置</el-button>
                    <el-button type="primary" @click="add">添加 </el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData" max-height="1200" border style="width: 100%">
                <el-table-column prop="name" label="名称" width="300"></el-table-column>
                <el-table-column prop="description" label="描述"></el-table-column>
                <el-table-column fixed="right" label="操作" width="50">
                    <template v-slot="scope">
                        <el-button @click="info(scope.row)" type="text" size="small">
                            编辑
                        </el-button>
                    </template>
                </el-table-column>
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
        </el-main>
    </el-container>
</template>

<script>
import { getTagPage } from "@/api/tag";

export default {
    name: "TagList",
    data() {
        return {
            tableData: [],
            query: {
                pageNum: 1,
                pageSize: 10,
                name: ""
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
        add() {
            this.$router.push(`/manage/tag/add`);
        },
        getList() {
            getTagPage(this.query)
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
        resetQuery() {
            this.query.name = "";
            this.getList();
        },
        handleSizeChange(val) {
            this.query.pageSize = val;
            this.getList();
        },
        handleCurrentChange(val) {
            this.query.pageNum = val;
            this.getList();
        },
        info(row) {
            this.$router.push(`/manage/tag/${row.id}`);
        }
    }
};
</script>

<style scoped></style>

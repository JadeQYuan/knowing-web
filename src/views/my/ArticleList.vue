<template>
    <el-container>
        <el-main>
            <el-form :inline="true" :model="query" class="demo-form-inline">
                <el-form-item label="标题">
                    <el-input v-model="query.title" placeholder="标题"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getList">查询</el-button>
                    <el-button type="primary" @click="resetQuery">重置</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData" max-height="1200" border style="width: 100%">
                <el-table-column prop="title" label="标题" width="300"></el-table-column>
                <el-table-column label="标签">
                    <template v-slot="scope">
                        <el-tag v-for="tag in scope.row.tags" :key="tag.id">{{ tag.name }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="specialName" label="专栏" width="300"></el-table-column>
                <el-table-column prop="createTime" label="创建时间" width="300"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template v-slot="scope">
                        <el-button @click="info(scope.row)" type="text" size="small">
                            查看
                        </el-button>
                        <el-button @click="modify(scope.row)" type="text" size="small">
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
import { getArticlePage } from "@/api/article";

export default {
    name: "ArticleList",
    data() {
        return {
            articles: [],
            tableData: [],
            query: {
                pageNum: 1,
                pageSize: 10,
                title: ""
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
            getArticlePage(this.query)
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
            this.query.title = "";
            this.getList();
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

<style scoped></style>

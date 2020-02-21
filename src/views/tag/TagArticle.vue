<template>
    <div class="k-content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/tags' }">标签</el-breadcrumb-item>
            <el-breadcrumb-item>标签？</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="tableData" max-height="1200" border style="width: 100%">
            <el-table-column label="标题" width="300">
                <template v-slot="scope">
                    <a @click="info(scope.row)">{{ scope.row.title }}</a>
                </template>
            </el-table-column>
            <el-table-column label="标签">
                <template v-slot="scope">
                    <el-tag v-for="tag in scope.row.tags" :key="tag.id">{{ tag.name }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="specialName" label="专栏" width="300"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="300"></el-table-column>
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
import { getMyArticlePage } from "@/api/article";

export default {
    name: "TagArticle",
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
            this.$router.push(`/view/article/${row.id}`);
        },
        getList() {
            getMyArticlePage(this.query)
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

<style scoped lang="scss">
a {
    color: #409eff;
}
</style>

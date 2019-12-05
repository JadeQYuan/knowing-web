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
                    <el-button type="primary" @click="add">添加 </el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData" max-height="1200" border style="width: 100%">
                <el-table-column prop="title" label="标题" width="300"></el-table-column>
                <el-table-column :formatter="simple" label="内容"></el-table-column>
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
import { getNotePage } from "@/api/note";

export default {
    name: "noteList",
    data() {
        return {
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
        add() {
            this.$router.push(`/manage/note/add`);
        },
        info(row) {
            this.$router.push(`/manage/article/${row.id}/view`);
        },
        modify(row) {
            this.$router.push(`/manage/article/${row.id}`);
        },
        getList() {
            getNotePage(this.query)
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
        },
        simple(row) {
            if (!row.content) {
                return "";
            } else {
                const str = row.content
                    .replace(/(\*\*|__)(.*?)(\*\*|__)/g, "") //全局匹配内粗体
                    .replace(/\\!\[[\s\S]*?\]\([\s\S]*?\)/g, "") //全局匹配图片
                    .replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, "") //全局匹配连接
                    .replace(/<\/?.+?\/?>/g, "") //全局匹配内html标签
                    .replace(/(\*)(.*?)(\*)/g, "") //全局匹配内联代码块
                    .replace(/`{1,2}[^`](.*?)`{1,2}/g, "") //全局匹配内联代码块
                    .replace(/```([\s\S]*?)```[\s]*/g, "") //全局匹配代码块
                    .replace(/\\~\\~(.*?)\\~\\~/g, "") //全局匹配删除线
                    .replace(/[\s]*[-\\*]+(.*)/g, "") //全局匹配无序列表
                    .replace(/[\s]*[0-9]+\.(.*)/g, "") //全局匹配有序列表
                    .replace(/(#+)(.*)/g, "") //全局匹配标题
                    .replace(/(>+)(.*)/g, "") //全局匹配摘要
                    .replace(/\r\n/g, "") //全局匹配换行
                    .replace(/\n/g, "") //全局匹配换行
                    .replace(/\s/g, ""); //全局匹配空字符;
                return str.slice(0, 155);
            }
        }
    }
};
</script>

<style scoped></style>

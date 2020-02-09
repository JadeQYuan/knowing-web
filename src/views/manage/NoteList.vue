<template>
    <div>
        <el-form :inline="true" :model="query">
            <el-form-item label="名称">
                <el-input v-model="query.title" placeholder="标题"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getList">查询</el-button>
                <el-button type="primary" @click="resetQuery">重置</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" max-height="1200" border style="width: 100%">
            <el-table-column label="标题" width="300">
                <template v-slot="scope">
                    <a @click="info(scope.row)">{{ scope.row.title }}</a>
                </template>
            </el-table-column>
            <el-table-column prop="createUserName" label="创建人" width="200"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="200"></el-table-column>
            <el-table-column prop="content" label="内容" :formatter="simple"></el-table-column>
            <el-table-column fixed="right" label="操作" width="50">
                <template v-slot="scope">
                    XXX
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
    </div>
</template>

<script>
import { getAllNotePage } from "@/api/note";

export default {
    name: "NoteList",
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
        getList() {
            getAllNotePage(this.query)
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
            this.$router.push(`/view/note/${row.id}`);
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

<style scoped lang="scss">
a {
    color: #409eff;
}
</style>

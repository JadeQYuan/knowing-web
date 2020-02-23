<template>
    <div>
        <query-form v-if="queryItems" :items="queryItems" @query="handleQuery" />
        <data-table :columns="tableColumns" :actions="tableActions" :data="tableData" />
        <data-page :pageParam="pageParam" @query="handleQuery" />
    </div>
</template>

<script>
import QueryForm from "./components/QueryForm";
import DataTable from "./components/DataTable";
import DataPage from "./components/DataPage";
export default {
    name: "QueryTablePage",
    components: { QueryForm, DataTable, DataPage },
    props: {
        queryItems: Array,
        tableColumns: {
            type: Array,
            required: true
        },
        tableActions: Array,
        queryFunc: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            pageParam: {
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
            tableData: []
        };
    },
    mounted() {
        this.handleQuery();
    },
    methods: {
        handleQuery() {
            let { pageNum, pageSize } = this.pageParam;
            let param = { pageNum, pageSize };
            if (this.queryItems) {
                this.queryItems.forEach(item => {
                    if (item.value.trim()) {
                        param[item.prop] = item.value.trim();
                    }
                });
            }
            this.queryFunc(param).then(data => {
                this.tableData = data.list;
                this.pageParam.total = data.total;
            });
        }
    }
};
</script>

<style scoped></style>

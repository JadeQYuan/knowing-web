<template>
    <div>
        <query-form v-if="queryShow" :items="queryItems" @query="handleQuery" />
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
    computed: {
        queryShow() {
            if (!this.queryItems) {
                return false;
            }
            for (const item of this.queryItems) {
                if (item.visible !== false) {
                    return true;
                }
            }
            return false;
        }
    },
    mounted() {
        this.handleQuery();
    },
    methods: {
        handleQuery() {
            let { pageNum, pageSize } = this.pageParam;
            let params = { pageNum, pageSize };
            if (this.queryItems) {
                this.queryItems.forEach(item => {
                    if (item.value && item.value.trim()) {
                        params[item.prop] = item.value.trim();
                    }
                });
            }
            this.queryFunc(params).then(data => {
                this.tableData = data.list;
                this.pageParam.total = data.total;
            });
        }
    }
};
</script>

<style scoped></style>

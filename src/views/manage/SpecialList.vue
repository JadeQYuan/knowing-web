<template>
    <query-table-page
        :queryItems="queryItems"
        :queryFunc="queryFunc"
        :tableColumns="tableColumns"
        :tableActions="tableActions"
    />
</template>

<script>
import QueryTablePage from "@/components/QueryTablePage/index";
import { getAllSpecialPage } from "@/api/special";

export default {
    name: "SpecialList",
    components: { QueryTablePage },
    data() {
        return {
            queryItems: [{ label: "名称", prop: "name", placeholder: "名称", value: "" }],
            queryFunc: getAllSpecialPage,
            tableColumns: [
                {
                    label: "名称",
                    prop: "name"
                },
                {
                    label: "共享",
                    type: "tag",
                    formatter: row => {
                        return row.shared ? "是" : "否";
                    }
                },
                {
                    label: "创建人",
                    prop: "createUserName"
                },
                {
                    label: "创建时间",
                    prop: "createTime"
                },
                {
                    label: "描述",
                    prop: "intro"
                }
            ],
            tableActions: []
        };
    }
};
</script>

<style scoped></style>

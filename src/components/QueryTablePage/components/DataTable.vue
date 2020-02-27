<template>
    <el-table :data="data" border stripe>
        <el-table-column type="index" />
        <template v-for="(column, index) in columns">
            <el-table-column
                v-if="!column.type || column.type === 'text'"
                header-align="center"
                :key="index"
                :prop="column.prop"
                :label="column.label"
                :formatter="column.formatter"
                :show-overflow-tooltip="true"
            />
            <el-table-column
                v-else-if="column.type === 'link'"
                header-align="center"
                :key="index"
                :label="column.label"
                v-slot="scope"
            >
                <a @click="column.click(scope.row)">{{ scope.row[column.prop] }}</a>
            </el-table-column>
            <el-table-column
                v-else-if="column.type === 'tag'"
                header-align="center"
                :key="index"
                :label="column.label"
                v-slot="scope"
            >
                <el-tag>{{ column.formatter(scope.row) }}</el-tag>
            </el-table-column>
            <el-table-column
                v-else-if="column.type === 'tags'"
                header-align="center"
                :key="index"
                :label="column.label"
                v-slot="scope"
            >
                <el-tag v-for="(tag, idx) in scope.row.tags" :key="idx">
                    {{ tag[column.nameProp] }}
                </el-tag>
            </el-table-column>
        </template>
        <el-table-column v-if="actions" label="操作" align="center">
            <template v-slot="scope">
                <el-button
                    v-for="action in actions"
                    :key="action.label"
                    @click="action.click(scope.row)"
                    type="text"
                    size="small"
                >
                    {{ action.label }}
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: "DataTable",
    props: {
        columns: {
            type: Array,
            required: true
        },
        actions: Array,
        data: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped lang="scss">
a {
    color: #409eff;
}
</style>

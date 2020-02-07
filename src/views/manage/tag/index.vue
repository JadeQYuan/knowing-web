<template>
    <el-container>
        <el-row>
            <el-col :span="8">
                <div>
                    <el-button>添加</el-button>
                </div>
                <el-tree
                    :data="data"
                    :props="defaultProps"
                    :accordion="true"
                    @node-click="handleNodeClick"
                ></el-tree>
            </el-col>
            <el-col :offset="2" :span="12">
                <tag-form />
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
import TagForm from "./TagForm";
export default {
    name: "TagManager",
    data() {
        return {
            data: [
                {
                    label: "一级 1",
                    children: [
                        {
                            label: "二级 1-1"
                        }
                    ]
                },
                {
                    label: "一级 2",
                    children: [
                        {
                            label: "二级 2-1"
                        },
                        {
                            label: "二级 2-2"
                        }
                    ]
                },
                {
                    label: "一级 3",
                    children: [
                        {
                            label: "二级 3-1"
                        },
                        {
                            label: "二级 3-2"
                        }
                    ]
                }
            ],
            defaultProps: {
                children: "children",
                label: "label"
            }
        };
    },
    components: {
        TagForm
    },
    methods: {
        handleNodeClick(data) {
            data.id;
        }
    }
};
</script>

<style scoped lang="scss">
.el-container {
    .el-row {
        width: 100%;
        .el-tree {
            padding: 10px;
            border: 2px solid #545c64;
            border-radius: 10px;
        }
    }
}
</style>

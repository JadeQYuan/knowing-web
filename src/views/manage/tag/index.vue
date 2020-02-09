<template>
    <el-row>
        <el-col :span="8">
            <div>
                <el-button @click="addTagCategory">添加分类</el-button>
                <el-button @click="addTag">添加标签</el-button>
            </div>
            <el-tree
                :data="treeData"
                :props="defaultProps"
                :accordion="true"
                @node-click="handleNodeClick"
            ></el-tree>
        </el-col>
        <el-col :offset="2" :span="12">
            <tag-form
                v-if="type === 'Tag'"
                :id="checkedId"
                v-on:refresh="refresh"
                :key="checkedId"
            />
            <tag-category-form
                v-if="type === 'TagCategory'"
                :id="checkedId"
                :key="checkedId"
                v-on:refresh="refresh"
            />
        </el-col>
    </el-row>
</template>

<script>
import TagForm from "./TagForm";
import { getTagTree } from "@/api/tag";
import TagCategoryForm from "./TagCategoryForm";

export default {
    name: "TagManager",
    data() {
        return {
            checkedId: "",
            treeData: [],
            defaultProps: {
                children: "children",
                label: function(data) {
                    return data.data.name || data.data;
                }
            },
            type: ""
        };
    },
    components: {
        TagCategoryForm,
        TagForm
    },
    mounted() {
        this.getTree();
    },
    methods: {
        handleNodeClick(data) {
            this.type = data.type;
            this.checkedId = data.id;
        },
        getTree() {
            getTagTree().then(data => {
                this.treeData = data;
            });
        },
        addTagCategory() {
            this.type = "TagCategory";
        },
        addTag() {
            this.type = "Tag";
        },
        refresh() {
            this.getTree();
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

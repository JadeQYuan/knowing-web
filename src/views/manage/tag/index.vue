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
                :tagCategoryList="tagCategoryList"
                v-on:refresh="refresh(false)"
                :key="checkedId"
            />
            <tag-category-form
                v-if="type === 'TagCategory'"
                :id="checkedId"
                :key="checkedId"
                v-on:refresh="refresh(true)"
            />
        </el-col>
    </el-row>
</template>

<script>
import TagCategoryForm from "./TagCategoryForm";
import TagForm from "./TagForm";
import { getAllTagTree, getTagCategoryList } from "@/api/tag";

export default {
    name: "TagManager",
    components: {
        TagCategoryForm,
        TagForm
    },
    data() {
        return {
            checkedId: "",
            treeData: [],
            tagCategoryList: [],
            defaultProps: {
                children: "children",
                label: function(data) {
                    return data.name;
                }
            },
            type: ""
        };
    },
    mounted() {
        this.getTree();
        this.getTagCategoryList();
    },
    methods: {
        handleNodeClick(data) {
            this.type = data.type;
            this.checkedId = data.id;
        },
        getTree() {
            getAllTagTree().then(data => {
                this.treeData = data;
            });
        },
        getTagCategoryList() {
            getTagCategoryList().then(data => {
                this.tagCategoryList = data;
            });
        },
        addTagCategory() {
            this.checkedId = "";
            this.type = "TagCategory";
        },
        addTag() {
            this.checkedId = "";
            this.type = "Tag";
        },
        refresh(all) {
            this.getTree();
            if (all) {
                this.getTagCategoryList();
            }
        }
    }
};
</script>

<style scoped lang="scss">
.el-container {
    .el-row {
        width: 100%;
        .el-col {
            padding-top: 20px;
        }
        .el-tree {
            padding: 10px;
            border: 2px solid #545c64;
            border-radius: 10px;
        }
    }
}
</style>

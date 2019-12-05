<template>
    <div class="grid-content bg-purple">
        <el-divider content-position="left">频道</el-divider>
        <div class="k-tag">
            <div v-for="tag in tags" :key="tag.id">
                {{ tag.name }}
            </div>
            <div>更多</div>
        </div>
    </div>
</template>

<script>
import { getTagList } from "@/api/tag";
export default {
    name: "MainTag",
    data() {
        return {
            tags: []
        };
    },
    mounted() {
        this.getTags();
    },
    methods: {
        getTags() {
            getTagList()
                .then(data => {
                    this.tags = data;
                })
                .catch(error => {
                    this.$alert(error, {
                        confirmButtonText: "确定"
                    });
                });
        }
    }
};
</script>

<style scoped lang="scss">
.k-tag {
    div {
        padding: 10px 10px;
        border-radius: 15px;
        text-shadow: 5px 5px 5px #0977ab;
        font-size: 14px;
        &:hover {
            background-color: #0977ab;
        }
    }
}
</style>

<template>
    <div class="grid-content bg-purple">
        <div class="k-tag">
            <div v-for="tag in tags" :key="tag.id" @click="view(tag.id)">
                {{ tag.name }}
            </div>
            <div @click="view()">更多</div>
        </div>
    </div>
</template>

<script>
import { getPopularTagList } from "@/api/tag";
export default {
    name: "HomeTag",
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
            getPopularTagList().then(data => {
                this.tags = data;
            });
        },
        view(tagId) {
            if (tagId) {
                this.$router.push(`/tags/${tagId}`);
            } else {
                this.$router.push(`/tags`);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.k-tag {
    padding-right: 10px;
    div {
        padding: 10px 10px;
        border-radius: 15px;
        text-shadow: 5px 5px 5px #a9b7c6;
        font-size: 14px;
        &:hover {
            background-color: #a9b7c6;
        }
    }
}
</style>

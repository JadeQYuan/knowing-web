<template>
  <el-container>
      <router-link to="/tagForm">ADD</router-link>
    <el-main>
      <span v-for="tag in tags" :key="tag.id">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ tag.name }}</span>
          </div>
          {{ tag.description }}
        </el-card>
      </span>
    </el-main>
  </el-container>
</template>

<script>
import { getTagList } from "@/api/tag";
export default {
  name: "tagList",
  data() {
    return {
      tags: []
    };
  },
  mounted() {
    getTagList().then(data => {
      this.tags = data.data;
    });
  }
};
</script>

<style scoped></style>

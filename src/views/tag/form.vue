<template>
  <div>
    <el-form :model="formModel">
      <el-form-item>
        name : <el-input v-model="formModel.name"></el-input>
      </el-form-item>
      <el-form-item>
        description : <el-input v-model="formModel.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addTag } from "@/api/tag";
export default {
  name: "tagForm",
  data() {
    return {
      formModel: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    add() {
      addTag(this.formModel).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped></style>

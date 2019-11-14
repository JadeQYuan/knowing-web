<template>
  <div>
    <el-form :model="formModel">
      <el-form-item>
        title : <el-input v-model="formModel.title"></el-input>
      </el-form-item>
      <el-form-item>
<!--        content : <el-input v-model="formModel.content"></el-input>-->
        <mavonEditor v-model="formModel.content"></mavonEditor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor';
  import 'mavon-editor/dist/css/index.css';
import { addNote } from "@/api/note";
export default {
  name: "noteForm",
  data() {
    return {
      formModel: {
        title: "",
        content: ""
      },
    };
  },
  components: {
    mavonEditor
  },
  methods: {
    add() {
      addNote(this.formModel);
    }
  }
};
</script>

<style scoped></style>

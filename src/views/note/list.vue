<template>
    <el-container>
        <router-link to="/note/add">ADD</router-link>
        <el-main>
            <span v-for="note in notes" :key="note.id">
                <el-card class="box-card">
                    <div slot="header" class="clearfix" @click="info(note.id)">
                        <p>{{ note.title }}</p>
                    </div>
                    <span @click="modify(note.id)"><button>修改</button></span>
                    <div>
                        {{ note.content }}
                    </div>
                </el-card>
            </span>
        </el-main>
    </el-container>
</template>

<script>
import { getNoteList } from "@/api/note";

export default {
    name: "noteList",
    data() {
        return {
            notes: []
        };
    },
    mounted() {
        getNoteList()
            .then(data => {
                this.notes = data;
            })
            .catch(error => {
                this.$alert(error, {
                    confirmButtonText: "确定"
                });
            });
    },
    methods: {
        info(id) {
            this.$router.push(`/note/${id}/view`);
        },
        modify(id) {
            this.$router.push(`/note/${id}`);
        }
    }
};
</script>

<style scoped></style>

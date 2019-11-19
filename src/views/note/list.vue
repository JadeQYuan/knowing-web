<template>
    <el-container>
        <router-link to="/noteForm">ADD</router-link>
        <el-main>
            <span v-for="note in notes" :key="note.id" @click="info(note.id)">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <p>{{ note.title }}</p>
                    </div>
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
            notes: [],
        };
    },
    mounted() {
        getNoteList().then(data => {
            this.notes = data.data;
        });
    },
    methods: {
        info(id) {
            this.$router.push(`/note/${id}`);
        },
    },
};
</script>

<style scoped></style>

<template>
    <div class="k-content">
        <div>{{ model.title }}</div>
        <md-editor mode="view" :value="model.content" />
    </div>
</template>

<script>
import MdEditor from "@/components/MdEditor";
import { getInfo } from "@/api/note";

export default {
    name: "NoteView",
    components: {
        MdEditor
    },
    props: {
        id: String
    },
    data() {
        return {
            model: {
                id: "",
                title: "",
                content: ""
            }
        };
    },
    mounted() {
        getInfo(this.id).then(data => {
            this.model = data;
        });
    }
};
</script>

<style scoped></style>

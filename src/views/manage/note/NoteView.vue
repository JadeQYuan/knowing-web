<template>
    <div>
        <div>{{ model.title }}</div>
        <mavonEditor
            :value="model.content"
            :subfield="false"
            defaultOpen="preview"
            :editable="false"
            :toolbarsFlag="false"
            :navigation="true"
        ></mavonEditor>
        <!--    <div>{{ model.content }}</div>-->
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import { getInfo } from "@/api/note";

export default {
    name: "NoteView",
    data() {
        return {
            model: {
                id: "",
                title: "",
                content: ""
            }
        };
    },
    components: {
        mavonEditor
    },
    mounted() {
        getInfo(this.$route.params.id)
            .then(data => {
                this.model = data;
            })
            .catch(error => {
                this.$alert(error, {
                    confirmButtonText: "确定"
                });
            });
    }
};
</script>

<style scoped></style>

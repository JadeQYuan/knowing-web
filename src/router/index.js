import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/layout";

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login")
    },
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/404")
    },
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "/",
                name: "home",
                component: () => import("@/views/home")
            },
            {
                path: "special",
                name: "special",
                component: () => import("@/views/special")
            },
            {
                path: "manage",
                name: "Management",
                component: () => import("@/views/manage"),
                children: [
                    {
                        path: "tag",
                        name: "tagList",
                        component: () => import("@/views/manage/tag/TagList.vue")
                    },
                    {
                        path: "tag/add",
                        name: "tagAdd",
                        component: () => import("@/views/manage/tag/TagForm.vue")
                    },
                    {
                        path: "tag/:id",
                        name: "tagModify",
                        component: () => import("@/views/manage/tag/TagForm.vue")
                    },
                    {
                        path: "article",
                        name: "articleList",
                        component: () => import("@/views/manage/article/ArticleList.vue")
                    },
                    {
                        path: "article/add",
                        name: "articleAdd",
                        component: () => import("@/views/manage/article/ArticleForm.vue")
                    },
                    {
                        path: "article/:id",
                        name: "articleModify",
                        component: () => import("@/views/manage/article/ArticleForm.vue")
                    },
                    {
                        path: "article/:id/view",
                        name: "articleView",
                        component: () => import("@/views/manage/article/ArticleView.vue")
                    },
                    {
                        path: "note",
                        name: "noteList",
                        component: () => import("@/views/manage/note/NoteList.vue")
                    },
                    {
                        path: "note/add",
                        name: "noteAdd",
                        component: () => import("@/views/manage/note/NoteForm.vue")
                    },
                    {
                        path: "note/:id",
                        name: "noteModify",
                        component: () => import("@/views/manage/note/NoteForm.vue")
                    },
                    {
                        path: "note/:id/view",
                        name: "noteView",
                        component: () => import("@/views/manage/note/NoteView.vue")
                    }
                ]
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

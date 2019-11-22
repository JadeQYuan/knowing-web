import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue")
    },
    {
        path: "/tag",
        name: "tagList",
        component: () => import("@/views/tag/list.vue")
    },
    {
        path: "/tag/add",
        name: "tagAdd",
        component: () => import("@/views/tag/form.vue")
    },
    {
        path: "/tag/:id",
        name: "tagModify",
        component: () => import("@/views/tag/form.vue")
    },
    {
        path: "/article",
        name: "articleList",
        component: () => import("@/views/article/list.vue")
    },
    {
        path: "/article/add",
        name: "articleAdd",
        component: () => import("@/views/article/form.vue")
    },
    {
        path: "/article/:id",
        name: "articleModify",
        component: () => import("@/views/article/form.vue")
    },
    {
        path: "/article/:id/view",
        name: "articleView",
        component: () => import("@/views/article/view.vue")
    },
    {
        path: "/note",
        name: "noteList",
        component: () => import("@/views/note/list.vue")
    },
    {
        path: "/note/add",
        name: "noteAdd",
        component: () => import("@/views/note/form.vue")
    },
    {
        path: "/note/:id",
        name: "noteModify",
        component: () => import("@/views/note/form.vue")
    },
    {
        path: "/note/:id/view",
        name: "noteView",
        component: () => import("@/views/note/view.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

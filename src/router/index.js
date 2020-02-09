import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { getUserInfo } from "@/api/user";

Vue.use(VueRouter);

import Layout from "@/layout";

// TODO
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login")
    },
    {
        path: "/auth",
        name: "auth",
        component: () => import("@/views/login/auth")
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
                path: "specials",
                name: "special",
                component: () => import("@/views/special")
            },
            {
                path: "tags",
                name: "tag",
                component: () => import("@/views/tag")
            },
            {
                path: "article/create",
                name: "articleCreate",
                component: () => import("@/views/form/ArticleForm.vue")
            },
            {
                path: "article/update/:id",
                name: "articleUpdate",
                component: () => import("@/views/form/ArticleForm.vue")
            },
            {
                path: "note/create",
                name: "noteCreate",
                component: () => import("@/views/form/NoteForm.vue")
            },
            {
                path: "note/update/:id",
                name: "noteUpdate",
                component: () => import("@/views/form/NoteForm.vue")
            },
            {
                path: "special/create",
                name: "specialCreate",
                component: () => import("@/views/form/SpecialForm.vue")
            },
            {
                path: "special/update/:id",
                name: "specialUpdate",
                component: () => import("@/views/form/SpecialForm.vue")
            },
            {
                path: "view/article/:id",
                name: "articleView",
                component: () => import("@/views/view/ArticleView.vue")
            },
            {
                path: "view/note/:id",
                name: "noteView",
                component: () => import("@/views/view/NoteView.vue")
            },
            {
                path: "my",
                name: "My",
                component: () => import("@/views/my")
            },
            {
                path: "my/special",
                name: "specialList",
                component: () => import("@/views/my/SpecialList.vue")
            },
            {
                path: "my/article",
                name: "articleList",
                component: () => import("@/views/my/ArticleList.vue")
            },
            {
                path: "my/note",
                name: "noteList",
                component: () => import("@/views/my/NoteList.vue")
            },
            {
                path: "manage",
                name: "Management",
                component: () => import("@/views/manage")
            },
            {
                path: "manage/special",
                name: "SpecialManager",
                component: () => import("@/views/manage/SpecialList")
            },
            {
                path: "manage/tag",
                name: "TagManager",
                component: () => import("@/views/manage/tag")
            },
            {
                path: "manage/article",
                name: "ArticleManager",
                component: () => import("@/views/manage/ArticleList")
            },
            {
                path: "manage/note",
                name: "NoteManager",
                component: () => import("@/views/manage/NoteList")
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (store.state.token) {
        if (!Object.keys(store.state.user).length) {
            getUserInfo().then(data => {
                store.commit("setUserInfo", { user: data });
            });
        }
    }
    next();
});

export default router;

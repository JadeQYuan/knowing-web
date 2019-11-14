import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import( "@/views/Home.vue")
  },
  {
    path: "/tag",
    name: "tag-list",
    component: () => import( "@/views/tag/list.vue")
  },
  {
    path: "/tagForm",
    name: "tag-form",
    component: () => import("@/views/tag/form.vue")
  },
  {
    path: "/article",
    name: "article-list",
    component: () => import( "@/views/article/list.vue")
  },
  {
    path: "/articleForm",
    name: "article-form",
    component: () => import("@/views/article/form.vue")
  },
  {
    path: "/article/:id",
    name: "article-view",
    component: () => import( "@/views/article/view.vue")
  },
  {
    path: "/note",
    name: "note-list",
    component: () => import( "@/views/note/list.vue")
  },
  {
    path: "/noteForm",
    name: "note-form",
    component: () => import("@/views/note/form.vue")
  },
  {
    path: "/note/:id",
    name: "note-view",
    component: () => import( "@/views/note/view.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;

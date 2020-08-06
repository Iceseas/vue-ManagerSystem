import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import subjectiveItem from "../views/manager/subjectiveItem.vue";
import showTable from "../views/manager/showTable.vue";
import showallquestion from "../views/manager/showallquestion.vue";
import { getCookie } from "../../util/cookie";
import accesslog from "../views/manager/accesslog.vue";
import index from "../views/index.vue";
import managerSystemIndex from "../views/managerSystemIndex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/Managerindex",
    name: "Managerindex",
    component: managerSystemIndex,
    meta: {
      checkLogined: true,
    },
    children: [
      {
        path: "index",
        name: "index",
        component: index,
        meta: {
          checkLogined: true,
        },
      },
      {
        path: "accesslog",
        name: "accesslog",
        component: accesslog,
        meta: {
          checkLogined: true,
        },
      },
      {
        path: "showallquestion",
        name: "showallquestion",
        component: showallquestion,
        meta: {
          checkLogined: true,
        },
      },
      {
        path: "showTable",
        name: "showTable",
        component: showTable,
        meta: {
          checkLogined: true,
        },
      },
      {
        path: "subjectiveItem",
        name: "subjectiveItem",
        component: subjectiveItem,
        meta: {
          checkLogined: true,
        },
      },
      {
        path: "",
        redirect: "index",
      },
    ],
  },
  {
    path: "",
    redirect: "/login",
  },
];
const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  // linkActiveClass:'' 设置点击的样式
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.checkLogined) {
    if (getCookie("token") == null) {
      next("login");
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;

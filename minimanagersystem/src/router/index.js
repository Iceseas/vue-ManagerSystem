import Vue from "vue";
import VueRouter from "vue-router";
import { getCookie } from "@/util/cookie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import ('@/views/userlogin/login'),
  },
  {
    path: "/Managerindex",
    name: "Managerindex",
    component: () => import ('@/views/home/managerSystemIndex'),
    meta: {
      checkLogined: true,
    },
    children: [
      {
        path: "index",
        name: "index",
        component: () => import ('@/views/home/managerSystemIndex/index'),
        meta: {
          checkLogined: true,
        },
      },
      {
        path: "accesslog",
        name: "accesslog",
        component: () => import ('@/views/manager/accesslog'),
        meta: {
          checkLogined: true,
        },
      },
      {
        path: "showallquestion",
        name: "showallquestion",
        component: () => import ('@/views/qsManage/otherQS/common/showallquestion'),
        meta: {
          checkLogined: true,
        },
      },
      {
        path: "showTable",
        name: "showTable",
        component: () => import ('@/views/qsManage/otherQS/showTable'),
        meta: {
          checkLogined: true,
        },
      },
      {
        path: "subjectiveItem",
        name: "subjectiveItem",
        component: () => import ('@/views/qsManage/subjective/subjectiveItem'),
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
// 页面检查cookie是否含有token
// router.beforeEach((to, from, next) => {
//   if (to.meta.checkLogined) {
//     if (getCookie("token") == null) {
//       next("login");
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
export default router;

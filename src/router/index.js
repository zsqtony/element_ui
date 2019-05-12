/**
 * Created by zhangshaoqiang on 2019/5/10.
 */
import Vue from "vue";
import Router from "vue-router";
import routes from "./routers";
import { getTokes } from "@/utils/util.js";
Vue.use(Router);

const LOGIN_PAGE_NAME = "login";
const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  let token = getTokes();
  console.log(token, to.name, "kkk");
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    next({ name: LOGIN_PAGE_NAME }); // 跳转
    return false;
  }
  if (token && to.name == LOGIN_PAGE_NAME) {
    next("/");
  } else {
    next();
  }
});

router.afterEach(to => {
  window.scrollTo(0, 0);
});

export default router;

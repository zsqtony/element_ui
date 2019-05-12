export default [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () => import("_v/login/index.vue")
  },
  {
    path: "/",
    name: "layout",
    redirect: "/store",
    component: () => import("@/layout"),
    children: [
      {
        path: "/store",
        name: "store",
        meta: {
          title: "分类"
        },
        component: () => import("_v/store/index.vue")
      },
      {
        path: "/store_add",
        name: "store_add",
        meta: {
          title: "分类添加"
        },
        component: () => import("_v/store/add.vue")
      },
      {
        path: "/hotword",
        name: "hotword",
        meta: {
          title: "热词列表"
        },
        component: () => import("_v/hotword/index.vue")
      },
      {
        path: "/hotword_add",
        name: "hotword_add",
        meta: {
          title: "热词添加"
        },
        component: () => import("_v/hotword/add.vue")
      },
      {
        path: "/theme",
        name: "theme",
        meta: {
          title: "专题列表"
        },
        component: () => import("_v/theme/index.vue")
      },
      {
        path: "/theme_add",
        name: "theme_add",
        meta: {
          title: "专题添加"
        },
        component: () => import("_v/theme/add.vue")
      },
      {
        path: "/banner",
        name: "banner",
        meta: {
          title: "轮播图列表"
        },
        component: () => import("_v/banner/index.vue")
      },
      {
        path: "/banner_add",
        name: "banner_add",
        meta: {
          title: "轮播图添加"
        },
        component: () => import("_v/banner/add.vue")
      }
    ]
  },
  {
    path: "*",
    name: "error_404",
    meta: {
      hideInMenu: true
    },
    component: () => import("_v/404.vue")
  }
];

<style lang="less" scoped>
@import "./style.less";
</style>

<template>
  <div class="frame_page">
    <div class="aside_menu">
      <div class="logo_style">LOGO</div>
      <el-menu
        :default-active="index_actives"
        :unique-opened="true"
        :default-openeds="fined_index"
        class="el-menu-vertical-demo"
        @open="open_funs"
        :router="true"
        @close="close_funs"
      >
        <el-submenu
          v-for="(i, index) in menuList"
          :key="index"
          :index="i.index"
        >
          <template slot="title">
            <i :class="i.icon"></i>
            <span>{{ i.title }}</span>
          </template>
          <el-menu-item
            v-for="(item, idx) in i.children"
            :key="idx"
            :route="item.url"
            :index="item.url"
            >{{ item.title }}</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </div>
    <div class="header_page">
      <div class="head_breadcrumb">分类列表</div>
      <div class="head_avatar">
        <zsq_avatar></zsq_avatar>
        <div class="head_user_name">
          <el-dropdown trigger="click" @command="click_funs">
            <span class="el-dropdown-link">
              Admin <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="contents_style"><router-view /></div>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      index_actives: "/store",
      tableData: Array(20).fill(item),
      fined_index: ["1"],
      menuList: [
        {
          title: "分类管理",
          icon: "el-icon-s-unfold",
          index: "1",
          children: [
            { title: "分类列表", url: "/store" },
            { title: "分类添加", url: "/store_add" }
          ]
        },
        {
          title: "热词管理",
          icon: "el-icon-s-marketing",
          index: "2",
          children: [
            { title: "热词列表", url: "/hotword" },
            { title: "热词添加", url: "/hotword_add" }
          ]
        },
        {
          title: "专题管理",
          icon: "el-icon-school",
          index: "3",
          children: [
            { title: "专题列表", url: "/theme" },
            { title: "专题添加", url: "/theme_add" }
          ]
        },
        {
          title: "轮播图管理",
          icon: "el-icon-picture-outline",
          index: "4",
          children: [
            { title: "轮播图列表", url: "/banner" },
            { title: "轮播图添加", url: "/banner_add" }
          ]
        },
        {
          title: "图片空间管理",
          icon: "el-icon-picture-outline-round",
          index: "5",
          children: [
            { title: "壁纸列表", url: "" },
            { title: "专题封面列表", url: "" },
            { title: "轮播图列表", url: "" },
            { title: "添加资源", url: "" }
          ]
        }
      ]
    };
  },
  $route(to) {
    this.index_actives = to.path;
  },
  methods: {
    open_funs(row) {
      console.log(row, "sjjs");
    },
    close_funs(row) {
      console.log(row, "222sjjs");
    },
    click_funs(e) {
      let _this = this;
      if (e == "a") {
        this.$store.dispatch("logout").then(json => {
          if (json) {
            _this.$notify({
              title: "成功",
              message: "退出成功",
              type: "success"
            });
            setTimeout(() => {
              _this.$router.push("/login");
            }, 1000);
          }
        });
      }
      console.log(e, "sjs");
    }
  },
  mounted() {
    this.index_actives = this.$route.path;
  }
};
</script>

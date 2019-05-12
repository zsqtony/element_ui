<style lang="less" scoped>
.forms_style {
}
</style>

<template>
  <el-row type="flex" class="row-bg">
    <el-col :span="22"><slot name="form"></slot></el-col>
    <el-col :span="2">
      <el-button type="primary" style="width:100%;" @click="querys_fun"
        >查询</el-button
      >
    </el-col>
  </el-row>
</template>
<script>
export default {
  methods: {
    querys_fun() {
      this.$emit("ok-query");
    }
  }
};
</script>

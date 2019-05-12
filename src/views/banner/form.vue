<style lang="less">
.store_style {
}
</style>

<template>
  <div class="store_style">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="轮播图封面：" prop="cover">
        <el-button type="primary" size="small">选择</el-button>
      </el-form-item>
      <el-form-item label="跳转专题：" prop="cover"> </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >保存</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        cover: "",
        desc: ""
      },
      rules: {
        name: [{ required: true, message: "请输入专题名称", trigger: "blur" }],
        cover: [
          { required: true, message: "请输入专题名称", trigger: "change" }
        ],
        desc: [
          { required: true, message: "请输入专题简介或备注", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

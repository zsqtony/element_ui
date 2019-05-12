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
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="分类名称：" prop="name">
        <el-input
          clearable
          v-model="ruleForm.name"
          placeholder="请输入分类名称"
          style="width:200px;"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类简介：" prop="desc">
        <el-input
          type="textarea"
          style="width:400px;"
          :rows="4"
          placeholder="分类简介或备注"
          v-model="ruleForm.desc"
        ></el-input>
      </el-form-item>
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
        desc: ""
      },
      rules: {
        name: [{ required: true, message: "请输入分类名称", trigger: "blur" }],
        desc: [
          { required: true, message: "请输入分类简介或备注", trigger: "blur" }
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

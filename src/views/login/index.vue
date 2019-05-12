<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(160deg, #b100ff 20%, #00b3ff 80%);
  // background-image: linear-gradient(160deg, #a200ff 20%, #cf3700 80%);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  .form_content_input {
    width: 250px;
    height: 400px;
    padding: 40px 35px;
    background-color: #fff;
    border-radius: 8px;
    .login_btn {
      padding: 10px 0 0 0;
    }
    .login_form_title {
      text-align: center;
      padding: 10px 0 20px 0;
    }
  }
}
</style>

<template>
  <div class="login">
    <div class="form_content_input">
      <div class="login_form_title">我要登录</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item label="账户：" prop="name">
          <el-input v-model="ruleForm.name" placeholder="admin"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            v-model="ruleForm.password"
            placeholder="密码123456"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="login_btn">
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          style="width:100%;"
          >登录</el-button
        >
      </div>
      <div class="login_btn">
        <el-button style="width:100%;">没有账号？去注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入账户名！", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码！", trigger: "blur" },
          { min: 6, max: 10, message: "长度在6-10位！", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 输入正确后，调取登录接口
          _this.$store.dispatch("login").then(json => {
            if (json) {
              _this.$router.push("/");
              _this.$notify({
                title: "提示",
                message: "登录成功",
                type: "success"
              });
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<template>
  <div class="login">
    <div class="form">
      <div class="Mars">慕课通用后台管理系统</div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            type="password"
            v-model="ruleForm.userPwd"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { login } from '../../api/user'
import { ElNotification } from 'element-plus'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const ruleFormRef = ref()
const ruleForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})
const rules = {
  userName: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    { min: 1, max: 7, message: '字 符 在 1 到 7 以 内', trigger: 'blur' }
  ],
  userPwd: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    { min: 3, max: 7, message: '字 符 在 3 到 7 以 内', trigger: 'blur' }
  ]
}
const submitForm = async (ruleFormRef) => {
  const data = await login(ruleForm)

  if (!ruleFormRef) return
  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
      if (data.code === 200) {
        router.push('/welcome')
        store.commit('loginTo', data.data.token)
        ElNotification({
          title: '登录成功',
          message: '欢迎回来',
          type: 'success'
        })
      } else {
        ElNotification({
          title: '登录失败',
          message: `${data.msg}`,
          type: 'error'
        })
      }
    }
  })
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: url(../../assets/1.png);
  // background-size: 100% 100%;
  .form {
    width: 500px;
    height: 280px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    .Mars {
      font-size: 38px;
      color: #409eff;
    }
  }
}
.el-input {
  width: 400px;
  height: 36px;
}
.el-button {
  width: 400px;
}
</style>

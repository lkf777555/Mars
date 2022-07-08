<template>
  <div class="Header">
    <div class="left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item> {{ info.itemName }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ info.menuName }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <div>
        <el-icon><Bell /></el-icon>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="back">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { Bell } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

const info = computed(() => {
  return store.state.menuinfo
})
console.log(info)
const router = useRouter()
const store = useStore()
const back = () => {
  localStorage.getItem('vuex')
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.Header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right {
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>

<template>
  <div class="Aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#ffffff"
      router
    >
      <div class="Manager">
        <img src="http://manager.9yuecloud.com/img/logo.384b81fb.png" alt="" />
        <span>Manager</span>
        <span></span>
      </div>
      <el-sub-menu
        :index="index"
        v-for="(item, index) in list.value"
        :key="item._id"
      >
        <template #title>
          <el-icon><Tools /></el-icon>
          <span>{{ item.menuName }}</span>
        </template>
        <el-menu-item-group
          v-for="(menu, index) in item.children"
          :key="index"
          @click="crumbs(item.menuName, menu.menuName)"
        >
          <el-menu-item :index="menu.path">{{ menu.menuName }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { getPermissionList } from '../../api/user'
import { reactive } from 'vue'
import { Tools } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
const list = reactive({})
const store = useStore()
getPermissionList().then((res) => {
  list.value = res.data.menuList
})
const crumbs = (itemName, menuName) => {
  store.dispatch('menu', { itemName: itemName, menuName: menuName })
}
</script>
<style lang="scss" scoped>
.Aside {
  width: 100%;
  height: 100vh;
  background: #001529;
  color: white;
}
img {
  width: 32px;
  height: 32px;
}
.Manager {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

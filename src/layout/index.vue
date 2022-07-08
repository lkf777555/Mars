<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><AppaSide></AppaSide></el-aside>
      <el-container>
        <el-header><AppHeader></AppHeader></el-header>
        <el-main><AppMain></AppMain></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import AppaSide from './components/Aside'
import AppHeader from './components/Header'
import AppMain from './components/Main'
</script>
<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
}
.el-main {
  padding: 0px;
}
.el-header {
  height: 50px;
}
</style>

<template>
  <div class="welcome">
    <div class="left">
      <b class="experience">欢迎体验</b>
      <div class="temo">慕课通用后台管理系统</div>
      <small>- Vue3.0+ElementPlus+Node+Mongo打造通用后台管理系统 </small>
    </div>
    <div class="right">
      <img src="http://manager.9yuecloud.com/img/welcome.7a3ee224.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.welcome {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .experience {
    font-size: 28px;
  }
  .temo {
    font-size: 48px;
    color: #409eff;
  }
}
img {
  width: 372px;
  height: 438px;
}
small {
  margin-top: 10px;
  color: #999999;
}
</style>

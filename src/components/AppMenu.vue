<script setup></script>

<template>
  <div class="menu">
    <div class="logo">
      <img src="/logo.svg" alt="" />
    </div>
    <el-menu class="nav el-menu-vertical-demo">
      <el-menu-item index="1">
        <el-icon :size="24"><Food /></el-icon>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon :size="24"><Dish /></el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.menu {
  height: 100vh;
  padding: 20px 5px 0;
  border-right: 1px solid var(--border);
}

.nav {
  border: none;
}

.logo {
  text-align: right;
  padding: 0 15px 15px;
  border-bottom: 1px solid var(--border);
}
</style>

<script setup>
import { ROUTES_PATHS } from "@/constants";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const isPathActive = (path) => {
  return route.path === path;
};

onMounted(isPathActive);
</script>

<template>
  <div class="menu">
    <div class="logo">
      <img src="/logo.svg" alt="" />
    </div>
    <el-menu :router="true" class="nav el-menu-vertical-demo">
      <el-menu-item :index="ROUTES_PATHS.HOME" :class="['item', isPathActive(ROUTES_PATHS.HOME) && 'active']">
        <el-icon :size="24"><Food /></el-icon>
      </el-menu-item>
      <el-menu-item :index="ROUTES_PATHS.CATEGORIES" :class="['item', isPathActive(ROUTES_PATHS.CATEGORIES) && 'active']">
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

.item {
  color: var(--violet);
}

.active {
  color: var(--pink);
}
</style>

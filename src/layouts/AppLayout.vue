<script setup>
import AppMenu from "@/components/AppMenu.vue";
</script>

<template>
  <div class="root">
    <div class="menuInner">
      <AppMenu />
    </div>
    <main class="main">
      <header class="header">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="controls">
          <slot name="controls"></slot>
        </div>
      </header>
      <div class="inner">
        <slot name="inner"></slot>
      </div>
    </main>
  </div>
</template>

<style scoped>
.root {
  display: flex;
}

.main {
  padding: 20px 16px;
  flex: 1;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menuInner {
  width: 70px;
}

.title {
  color: var(--violet);
  font-size: 28px;
  font-weight: 700;
}

.inner {
  padding-top: 20px;
}
</style>

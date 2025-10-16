<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <el-button type="primary" class="btn">{{ text }}</el-button>
</template>

<style scoped>
.btn {
  padding: 20px 24px;
  font-size: 17px;
  border-radius: 4px;
  background: var(--violet);
}
</style>

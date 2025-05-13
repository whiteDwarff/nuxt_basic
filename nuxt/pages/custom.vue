<template>
  <!-- 
    Nasted Routing을 하여 /custom 하위의 모든 컴포넌트를
    custom layout 적용 
  -->
  <NuxtLayout name="custom">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  // default Layout 사용 X
  layout: false,
  // NuxtLayout이 root 요소일 경우 필수값 **
  layoutTransition: false,
});
</script>

<style scoped></style>

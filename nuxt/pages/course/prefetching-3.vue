<template>
  <q-page padding>
    <div class="text-center q-py-xl">
      <div class="text-h4">
        {{ $route.path }}
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
console.log('prefetching-3');
</script>

<!-- component life cycle setup hook 내부에서 실행 -->
<script setup lang="ts"></script>

<style scoped></style>

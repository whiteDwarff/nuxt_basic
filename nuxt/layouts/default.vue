<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>Vue & Next Mastery Class</q-toolbar-title>
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn stretch flat label="Home" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <q-btn stretch flat label="About" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />

        <q-btn stretch flat label="Youtube" no-caps @click="moveYoutube()" />
        <q-separator dark vertical />

        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn stretch flat label="Admin" no-caps @click="navigate()" />
        </NuxtLink>
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <!-- layout은 slot을 통해 렌더링 된다 -->
      <slot> </slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const moveYoutube = async () => {
  await navigateTo('https://youtube.com', {
    external: true,
    open: {
      target: '_blank',
    },
  });
};
</script>

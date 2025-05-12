<template>
  <!-- layout lendering -->
  <NuxtLayout>
    <!-- page lendering -->
    <!-- 
      # page-key 
        - route의 path에 의해 컴포넌트가 리렌더링 되는 것을 제어할 수 있다.
        - :page-key="VALUE" (임의의 문자열)

        - NuxtPage는 path에 의해서만 리렌더링 되며 query 속성은 제외된다.
        - :page-key="route => route.fullPath"
          함수로 사용 시 반환되는 값은 route 객체이며 route.fullPath 사용시 query에 의해서도 리렌더링 된다.
    -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

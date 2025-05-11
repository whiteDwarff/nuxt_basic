<template>
  <div class="video-container">
    <iframe
      width="100%"
      height="100%"
      :src
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src?: string;
}
/*
  withDefaults : default value를 설정할 수 있다.

  withDefaults(value1, value2)
    - value1 : 설정할 값
    - value2 : default value
*/
withDefaults(defineProps<Props>(), {
  src: 'https://www.youtube.com/embed/zmq2zu-UsRk',
});
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

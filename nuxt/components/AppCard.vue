<template>
  <q-card class="card">
    <q-card-section v-if="$slots.header" class="card__header">
      <slot name="header"></slot>
    </q-card-section>

    <q-card-section class="card__body">
      <slot></slot>
    </q-card-section>

    <q-separator />

    <q-card-actions v-if="$slots.footer" class="card__footer">
      <slot name="footer"></slot>
    </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
/* 
기존 사용하던 pops 방식
defineProps({
  title: {
    type: String,
    default: '',
  },
});
*/
interface Props {
  // title은 필수가 아닌 석택이다
  title?: string;
}
defineProps<Props>();
</script>

<style scoped>
.card__header {
  padding: 32px 32px 0px 32px;
}
.card__body {
  padding: 32px;
}
.card__footer {
  padding: 16px 32px 16px 32px;
}
</style>

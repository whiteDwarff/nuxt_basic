<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">All Courses</div>
      <p class="q-mt-sm text-grey-8">웹 개발 입문부터 실전까지 학습해보세요!</p>
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="course in courses"
        :key="course.courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <!-- vue : router-link, nuxt: NuxtLink -->
        <NuxtLink v-slot="{ navigate }" custom :to="course.path">
          <CourseCard :course class="cursor-pointer" @click="navigate" />
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = useCourses();
</script>

<style scoped></style>

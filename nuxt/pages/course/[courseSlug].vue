<template>
  <div>
    <AppCard>
      <template #header>
        <div class="text-h5 text-weight-medium">{{ course?.title }}</div>
        <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
          <span class="flex items-center">
            <q-icon name="star" size="16px" color="orange" />
            <span>{{ course?.rating }}</span>
          </span>
          <span> {{ course?.reviewsCount }}개의 수강평 </span>
          <span>&middot;</span>
          <span>{{ course?.studentCount }} 명의 수강생</span>
          <q-space />
          <a :href="course?.reviewsUrl" class="text-bold" target="_blank">
            수강평 보기
          </a>
        </div>
      </template>
      <div class="q-mb-md">
        <VideoPlayer :src="course?.video" />
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <q-btn
            label="인프런에서 수강하기"
            unelevated
            class="full-width"
            color="primary"
            :href="course?.inflearnUrl"
            target="_blank"
          />
        </div>
        <div class="col-6">
          <q-btn
            label="짐코딩 클럽에서 수강하기"
            unelevated
            class="full-width"
            color="red"
            :href="course?.gymcodingUrl"
            target="_blank"
          />
        </div>
      </div>
      <p class="q-mt-lg text-grey-8">
        {{ course?.content }}
      </p>
      <q-separator class="q-mb-lg" />
      <q-form class="q-gutter-y-md">
        <q-btn
          label="수강완료"
          class="full-width"
          color="green"
          unelevated
          :outline="completed ? false : true"
          :icon="completed ? 'check' : undefined"
          @click="completed = !completed"
        />
        <q-input
          v-model="memo"
          type="textarea"
          outlined
          dense
          placeholder="메모를 작성해주세요."
          rows="3"
          autogrow
        />
      </q-form>
      <template #footer>
        <q-btn
          v-if="prevCourse"
          label="이전 강의"
          color="primary"
          unelevated
          @click="movePage(prevCourse.path)"
        />
        <q-space />
        <q-btn
          v-if="nextCourse"
          label="다음 강의"
          color="primary"
          unelevated
          @click="movePage(nextCourse.path)"
        />
      </template>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const courseSlug = route.params.courseSlug as string;

const { course, prevCourse, nextCourse } = uesCourse(courseSlug);
const memo = ref('');
const completed = ref(false);
/*
  해당 컴포넌트에 대한 메타 데이터를 설정할 수 있다.
  ***
  컴포넌트 내부에서 정의되어 사용해도 전달된 메타 데이터는 컴포넌트 밖으로 끌어올려진다.
  따라서 컴포넌트 내에서 정의한 변수나 메서드를 참조할 수 없다.
*/
definePageMeta({
  // 리렌더링을 결정하는 key
  key: route => route.fullPath,
  // custom
  pageType: '',
  keepalive: true,
  alias: ['/testA/:courseSlug', '/testB/:courseSlug'],
  // layout: 'same-layout',
});

const movePage = async (path: string) => {
  await navigateTo(path);
};
</script>

<style scoped></style>

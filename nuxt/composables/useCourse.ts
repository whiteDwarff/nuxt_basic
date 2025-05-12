import type { CourseWithPath } from './../types/course';

// 반환타입이 Course 이거나 undefined이다
interface CourseReturn {
  course: Maybe<CourseWithPath>;
  prevCourse: Maybe<CourseWithPath>;
  nextCourse: Maybe<CourseWithPath>;
}

export const uesCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  // const course = courses.find(course => course.courseSlug === courseSlug);
  const index = courses.findIndex(course => course.courseSlug === courseSlug);

  const course = courses[index];
  const prevCourse = index <= 0 ? null : courses[index - 1];
  const nextCourse = index >= courses.length - 1 ? null : courses[index + 1];

  return { course, prevCourse, nextCourse };
};

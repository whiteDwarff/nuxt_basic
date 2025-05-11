import type { CourseWithPath } from './../types/course';

// 반환타입이 Course 이거나 undefined이다
interface CourseReturn {
  course: Maybe<CourseWithPath>;
}

export const uesCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  const course = courses.find(course => course.courseSlug === courseSlug);
  return { course };
};

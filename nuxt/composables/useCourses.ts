import type { CourseWithPath } from './../types/course';
import coursesData from './courseData';

interface CourseReturn {
  courses: CourseWithPath[];
}

export const useCourses = (): CourseReturn => {
  const courses = coursesData.map(item => ({
    ...item,
    rating: item.rating.toFixed(1),
    reviewsCount: item.reviewsCount.toLocaleString(),
    studentCount: item.studentCount.toLocaleString(),
    path: `/course/${item.courseSlug}`,
  }));

  return {
    courses,
  };
};

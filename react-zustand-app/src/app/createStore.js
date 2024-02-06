import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const createStore = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    }
});

const useCourseStore = create(
    devtools(
        persist(createStore, {
            name: 'courses'
        })
    ));

export default useCourseStore;
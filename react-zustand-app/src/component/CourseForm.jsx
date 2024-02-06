import React, { useState } from 'react';
import useCourseStore from '../app/createStore';

function CourseForm() {
    const addCourse = useCourseStore((state) => state.addCourse);
    const courses = useCourseStore((state) => state.courses); 
    const [courseTitle, setCourseTitle] = useState("");


    const handleCourseSubmit = () => {
        addCourse({
            id: Math.round(Math.random()*100),
            name: courseTitle,
        });
    }
   
    return (
        <div>
            <form>
                <input type='text' onChange={(e) => setCourseTitle(e.target.value)} placeholder='Enter course name' />
                <button onClick={handleCourseSubmit}>Add Course</button>
            </form>
            <div>
                <h2>List of Courses</h2>
                <ul>
                    {courses.map(course => (
                        <li key={course.id}>{course.name}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default CourseForm;
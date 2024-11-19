import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';


interface Course {
  id: number;
  name: string;
}

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchedCourses: Course[] = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' },
    ];
    setCourses(fetchedCourses);
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { CoursesPage };

function App() {

  return (
    <>
      <div className="bg-red-500 text-white p-4">
        testing
      </div>
    </>
  )
}

export default App

import React, { useState } from "react";

interface Course {
    id: number;
    title: string;
    description: string;
}

const CoursesPage: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [newCourse, setNewCourse] = useState({ title: "", description: "" });

    const handleAddCourse = () => {
        const course: Course = {
            id: courses.length + 1,
            title: newCourse.title,
            description: newCourse.description,
        };
        setCourses([...courses, course]);
        setNewCourse({ title: "", description: "" });
    };

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Todos los Cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <div key={course.id} className="border p-4 rounded">
                        <h3 className="text-lg font-bold">{course.title}</h3>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Agregar Nuevo Curso</h3>
                <input
                    type="text"
                    placeholder="Título"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                    className="border p-2 rounded mb-2 w-full"
                />
                <textarea
                    placeholder="Descripción"
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    className="border p-2 rounded mb-2 w-full"
                />
                <button
                    onClick={handleAddCourse}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Agregar Curso
                </button>
            </div>
        </div>
    );
};

export default CoursesPage;

import { useState, useEffect, ReactNode } from 'react';
import { CourseProps } from '../../models/courses';
import './style.scss'
import { Course } from '../Course';

export const Courses = () => {

    const [courses, setCourses] = useState<CourseProps[]>([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch('/json/courses.json');
            const data: CourseProps[] = await response.json();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const GenerateCourses = ():ReactNode => {
        return (
            <>
            <div className="videos-grid">
                    {courses.map(course => (
                        <Course key={course.id} {...course} />
                    ))}
            </div>
            </>
        )
    }
    return (
        <>
            <section id={'courses'} className="main">
                <div>
                <h1 className="title-smaller main">C u r s u r i</h1>
                {GenerateCourses()}
                </div>
            </section>
        </>
    )
}

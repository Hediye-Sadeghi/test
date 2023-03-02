import React from 'react'
import Courses from './Courses'
import { Navbar } from './layout/header/Navbar';
export default function CoursesPage() {
    return (
        <div>
            <div className="px-6 pt-6 lg:px-8">
            <Navbar/>
            <Courses/>
            </div>
        </div>
    )
}

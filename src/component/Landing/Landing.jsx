import React from 'react'
import Card from './../Card';
import Courses from './../Courses';
import SortCard from './../SortCard';
import Team from './../Team';
import StudentOpinion from './../StudentOpinion';
import Opinion from './../Opinion';




export default function Landing() {
    return (
        <div>
            <Card />
            <Courses />
            <SortCard />
            <Team />
            <StudentOpinion />
            <Opinion />
        </div>
    )
}

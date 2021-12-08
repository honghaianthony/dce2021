import React from "react";
import MainLayout from "../layouts/MainLayout";
import CoursesMain from '../components/Courses/index';

function Courses () {
    return (
        <>
            <MainLayout>
                <CoursesMain />
            </MainLayout>
        </>
    )
}

export default Courses;

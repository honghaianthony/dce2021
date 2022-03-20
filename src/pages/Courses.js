import React from "react";
import MainLayout from "../layouts/MainLayout";
import CoursesMain from '../components/Courses/index';
import { Helmet } from "react-helmet-async";

function Courses () {
    return (
      <>
        <Helmet prioritizeSeoTags>
          <title>DCE 2021 - Course</title>
          <link rel="course" href="https://dce2021.ml/courses" />
          <meta name="Course" value="DCECourse" />
        </Helmet>
        <MainLayout>
          <CoursesMain />
        </MainLayout>
      </>
    );
}

export default Courses;

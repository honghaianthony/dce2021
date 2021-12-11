import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "../assets/styles/Course.css";
import CourseInfo from "../components/Courses/Course/CourseInfo";
import CourseDes from "../components/Courses/Course/CourseDes";
import Lessons from "../components/Courses/Course/Lessons";
import avatar from "../assets/images/giao.jpg";

import coursesApi from "../apis/coursesApi";
function Course() {
  const [data, setData] = useState(null);
  const { courseId } = useParams();

  useEffect(async () => {
    const res = await coursesApi.getCourseById(courseId);
    setData(res);
  }, [courseId]);
  return (
    <>
      <MainLayout>
        {data === null ? (
          <h1>Loading</h1>
        ) : (
          <div className="course__Container">
            <div className="course__TopContent">
              <div className="myCourseInfoLeft__Container">
                <CourseInfo
                  nameCourse={data.courseName}
                  avatar={avatar}
                  nameMember="Nguyễn Văn A"
                  // numStarts="4.6"
                  numRates="100"
                  decription={data.decription}
                />
              </div>
              <div className="myCourseInfoRight__Container">
                <div className="MyCourseInfoDecription">
                  <CourseDes
                    numHours={data.time}
                    // numLessons="40"
                    // numPeople="100"
                  />
                </div>
                <div className="MyCourseInfoDecriptionLine"></div>
                <div className="MyCourseInfoDecription-btn">
                  <div className="MyCourseInfoDecription-btnTop">
                    <h2>Miễn Phí</h2>
                  </div>
                  <div className="MyCourseInfoDecription-btnBottom">
                    <button>Đăng Ký Ngay</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="course__CenterContent">
              <Lessons courseId={courseId} />
            </div>
          </div>
        )}
      </MainLayout>
    </>
  );
}

export default Course;

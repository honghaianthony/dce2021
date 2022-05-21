import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "../assets/styles/Course.css";
import CourseInfo from "../components/Courses/Course/CourseInfo";
import CourseDes from "../components/Courses/Course/CourseDes";
import Lessons from "../components/Courses/Course/Lessons";
import avatar from "../assets/images/giao.jpg";
import coursesApi from "../apis/coursesApi";
import usersApi from "../apis/usersApi";
import { Helmet } from "react-helmet-async";

function Course() {
  const [data, setData] = useState([]);
  const [isRegister, setIsregister] = useState(false);
  const { courseId } = useParams();

  useEffect(async () => {
    const res = await coursesApi.getCourseById(courseId);
    setData(res);
    const register = await usersApi.getAllUserCourse();
    console.log(register.courses)
    
    const isReg = 
      register.courses.filter((item) => item!==null&&item._id === courseId).length === 1
    if (isReg) {
      setIsregister(true);
    }
  }, []);
  // console.log()
  const handleRegister = async () => {
    if (!isRegister) {
      const body = {
        courseId: courseId,
        isCompleted: false,
      };
      const success = await usersApi.createUserCourse(body);
      if (success.userCourse.errCode == 0) {
        setIsregister(true);
      }
    }
  };
  return (
    <MainLayout>
      {data.length === 0 ? (
        <div className="main-container">
          <div className="loader" />
        </div>
      ) : (
        <div className="course__Container main-container">
          <div className="course__TopContent">
            <div className="myCourseInfoLeft__Container">
              <CourseInfo
                nameCourse={data.courseName}
                avatar={avatar}
                nameMember="Nguyễn Văn A"
                // numStarts="4.6"
                numRates="100"
                description={data.description}
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
                  {isRegister ? (
                    <button>Đã đăng ký</button>
                  ) : (
                    <button onClick={handleRegister}>Đăng Ký Ngay</button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {isRegister && (
            <div className="course__CenterContent">
              <Lessons courseId={courseId} isReg={isRegister} />
            </div>
          )}
        </div>
      )}
    </MainLayout>
  );
}

export default Course;

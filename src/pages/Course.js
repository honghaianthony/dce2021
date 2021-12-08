import React from 'react'
import MainLayout from "../layouts/MainLayout";
import "../assets/styles/Course.css";
import CourseInfo from '../components/Courses/Course/CourseInfo'
import CourseDes from '../components/Courses/Course/CourseDes'
import Lessons from '../components/Courses/Course/Lessons'
import avatar from '../assets/images/giao.jpg'
function Course() {
    return (
        <>
        <MainLayout>
        <div className="course__Container">
            <div className="course__TopContent">
                <div className="myCourseInfoLeft__Container">
                    <CourseInfo 
                    nameCourse="Lập trình hướng đối tượng C++"
                    avatar={avatar}
                    nameMember="Nguyễn Văn A"
                    // numStarts="4.6"
                    numRates="100"
                    decription="Khóa học lập trình C++ cơ bản cho người mới bắt đầu. Khóa học này sẽ cung cấp những kiến thức cơ bản, dễ hiểu nhất về ngôn ngữ lập trình C++."
                    />
                </div>
                <div className="myCourseInfoRight__Container">
                    <div className="MyCourseInfoDecription">
                        <CourseDes 
                            numHours="30"
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
                <Lessons />
            </div>
        </div>
        </MainLayout>
        </>
    )
}

export default Course
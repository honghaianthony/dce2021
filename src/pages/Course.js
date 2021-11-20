import React from 'react'
import MainLayout from "../layouts/MainLayout";
import "../assets/styles/Course.css";
import MyCourseInfo from '../components/MyCourseInfo'
import MyCourseInfoDecription from '../components/MyCourseInfoDecription'
import ListCourse from '../components/ListCourse'
import avatar from '../assets/images/giao.jpg'
function Course() {
    return (
        <>
        <MainLayout>
        <div className="course__Container">
            <div className="course__TopContent">
                <div className="myCourseInfoLeft__Container">
                    <MyCourseInfo 
                    nameCourse="Lập trình hướng đối tượng C++"
                    avatar={avatar}
                    nameMember="Nguyễn Văn A"
                    numStarts="4.6"
                    numRates="100"
                    decription="Khóa học lập trình C++ cơ bản cho người mới bắt đầu. Khóa học này sẽ cung cấp những kiến thức cơ bản, dễ hiểu nhất về ngôn ngữ lập trình C++."
                    />
                </div>
                <div className="myCourseInfoRight__Container">
                    <div className="MyCourseInfoDecription">
                        <MyCourseInfoDecription 
                            numHours="30"
                            numLessons="40"
                            numPeople="100"
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
                <ListCourse />
            </div>
        </div>
        </MainLayout>
        </>
    )
}

export default Course
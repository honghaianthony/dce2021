// import React from "react";
import MainLayout from "../layouts/MainLayout";
import Navigation from "../components/Navigations/Navigation";
import "../assets/styles/AdminAddCourseDetail.css";
// import AddCourseItem2 from "../components/AddCourseItem";
import AddCourseItem2 from "../components/AdminCourses/AddCourse/AddCourse/AddCourseItem2";
import React, { useState, useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { useParams } from "react-router-dom";
import coursesApi from "../apis/coursesApi";
import LessonApi from "../apis/LessonApi";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
function AdminAddCourseDetail() {
  const [dataCourse, setDataCourse] = useState(null);
  const { courseId } = useParams();

  useEffect(async () => {
    const res = await LessonApi.getAllLesson(courseId);
    setDataCourse(res.data);
  }, [courseId]);

  console.log(dataCourse);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thêm khóa học mới</title>
      </Helmet>
      <AdminLayout>
        {dataCourse === null ? (
          <h1>Loading</h1>
        ) : (
          <div className="AdminAddCourseDetail___Container">
            {/* <div className="route_container"> */}
            <div className="admin-path">
              <Link to="/" className="admin-link">
                <span>Trang chủ</span>
              </Link>
              <i className="icon-angle-right">
                <FaAngleRight />
              </i>
              <Link to="/admincourselist" className="admin-link">
                <span>Quản lý khóa học</span>
              </Link>
            </div>
            {/* </div> */}
            <div className="center_AddCourseDetail_container">
              <div className="container_AdminAddCourse_detail">
                {/* <div className="center_menu_AdminAddCourse">
              <p>Hello</p>
            </div> */}
                <div className="center_AddCourse_right">
                  <div className="center_AddCourse_Top">
                    <h2>Thêm nội dung khóa học</h2>
                    <Link to={`../adminupdatecourse/${courseId}`}>
                      Chỉnh sửa nội dung khóa học
                    </Link>
                  </div>
                  {dataCourse.map((item, index) => (
                    <div className="listAddCourse__Container" key={index}>
                      <AddCourseItem2
                        id={item._id}
                        name={item.lessonName}
                        // item={dataCourse}
                      />
                    </div>
                  ))}

                  <Link
                    to={`/adminAddLesson/${courseId}`}
                    className="listAddCourse_BtnAdd"
                  >
                    <div className="btnAdd_Decription">
                      <span>
                        <i class="fas fa-plus"></i> Thêm Bài Học Mới
                      </span>
                    </div>
                  </Link>
                  <Link
                    to={`/courses/${courseId}`}
                    className="btn_AddCourse__container"
                  >
                    <button>Xem Khóa Học</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
}

export default AdminAddCourseDetail;

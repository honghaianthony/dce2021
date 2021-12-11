import React from "react";
import "../assets/styles/AdminAddCourse.css";
import Navigation from "../components/Navigations/Navigation";
import AdminLayout from "../layouts/AdminLayout"
import coursesApi from "../apis/coursesApi";
import { useState, useEffect } from "react";
function AdminAddCourse() {
  const [addNameCourse,setAddNameCourse]=useState("");
  const [addDesriptionCourse,setAddDescriptionCourse]=useState("")
  const [addImageCourse,setAddImageCourse]=useState("")
  const [addTimeCourse,setAddTimeCourse]=useState(0)
  const [addRateCourse,setAddRateCourse]=useState(0)
  const handleSubmitAdd=async(e)=>{
    e.preventDefault();
    const Course={
      courseName:addNameCourse,
      description:addDesriptionCourse,
      rate:addRateCourse,
      time:addTimeCourse,
      image:addImageCourse
    }
    const res = await coursesApi.createCourse(Course);
  }
  return (
    <AdminLayout>
      {/* <Navigation /> */}
      <div className="AdminAddCourse__">
      <div className="top_decription_link">
        <h2>Trang chủ - Quản lý khóa học</h2>
      </div>
      <div className="Container_____AdminAdCourse">
        <div className="center_AdminAddCourse__container">
          {/* <div className="center_menu_AdminAddCourse">
            <p>Hello</p>
          </div> */}
          <div className="center_content_AdminAddCourse">
            <form onSubmit={handleSubmitAdd}>
              <div className="top_decription_centercontent">
                <p>Tạo khóa học mới</p>
              </div>
              <div className="middle_decription_centercontent">
                <div className="InputName_AddCourse">
                    <input
                      type="text"
                      name="id"
                      id="idCourse"
                      placeholder="Nhập tên khóa học mới"
                      onChange={(event)=>setAddNameCourse(event.target.value)}
                    />
                </div>
                <div className="InputDescription_AddCourse">
                    <textarea
                      name="description"
                      id="decriptionCourse"
                      placeholder="Nhập mô tả"
                      onChange={(event)=>setAddDescriptionCourse(event.target.value)}
                    ></textarea>
                </div>
                <div className="InputTime_AddCourse">
                    <input
                      name="time"
                      id="timeCourse"
                      placeholder="Nhập thời gian để hoàn thành khóa học"
                      className="timeCourse"
                      type="number"
                      min="0"
                      onChange={(event)=>setAddTimeCourse(event.target.value)}
                    ></input>
                </div>
                <div className="InputTime_AddCourse">
                    <input
                      name="rate"
                      id="rateCourse"
                      placeholder="Nhập số đánh giá"
                      type="number"
                      min="0"
                      onChange={(event)=>setAddRateCourse(event.target.value)}
                    >
                    </input>
                </div>
                <div className="InputTime_AddCourse">
                    <input
                      name="image"
                      id="rateCourse"
                      placeholder="Nhập link hình ảnh "
                      type="text"
                      onChange={(event)=>setAddImageCourse(event.target.value)}
                    >
                    </input>
                </div>
              </div>
              <div className="btn_Submit_AdminAddCourse">
                <button type="submit">Hoàn thành tạo</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
      </div>

    </AdminLayout>
  );
}

export default AdminAddCourse;

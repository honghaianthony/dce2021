import React from "react";
import Navigation from "../components/Navigations/Navigation";
import "../assets/styles/AdminUpdateCourse.css";
// import AddCourseItem from "../components/AddCourseItem";
import AddCourseItem from "../components/AdminCourses/AddCourse/AddCourse/AddCourseItem"
import { useState } from "react/cjs/react.development";
function AdminUpdateCourse() {
  const listAddCourse = [
    {
      id: "1",
      name: "Lớp và hướng đối tượng",
    },
    {
      id: "2",
      name: "Biến Tĩnh, Phương Thức Tĩnh",
    },
    {
      id: "3",
      name: "Tính Đóng Gói",
    },
  ];

  const [items, setItem] = useState(listAddCourse);
  const [items2, setItem2] = useState(listAddCourse);
  const handleDeleteClick = (id) => {
    const index = items.findIndex((item) => item.id === id);
    if (index < 0) return;
    const newItems = [...items];
    newItems.splice(index, 1);
    setItem(newItems);
    // let currentItem= items;
    // currentItem=currentItem.filter((i)=>i.id !== id)
    // setItem(currentItem)
  };
  const handleDeleteAllClick = () => {
    setItem2("");
  };
  return (
    <div className="Update__AdminCourse">
      <Navigation />
      <div className="top_decription_link">
        <h2>Trang chủ - Quản lý khóa học</h2>
      </div>
      <div className="Update__AdminCourse__Container">
        <div className="Update__container">
          <div className="center_AdminUpdateCourse__container">
            <div className="center_menu_AdminUpdateCourse">
              <p>Hello</p>
            </div>
            <div className="center_content_AdminUpdateCourse">
               <div className="top_decription_centercontent">
                  <p>Tạo khóa học mới</p>
                </div>
              <div className="middle_decription_centercontent">
                <div className="InputName_UpdateCourse">
                    <form action="">
                      <input
                        type="text"
                        name="id"
                        id="idCourse"
                        // placeholder="Nhập tên khóa học mới"
                        value="Tên khóa học hiện tại"
                      />
                    </form>
                </div>
                <div className="InputDescription_UpdateCourse">
                  <form>
                    <textarea
                      name="description"
                      id="decriptionCourse"
                      // placeholder="Nhập mô tả"
                      value="Mô tả của khóa học hiện tại"
                    ></textarea>
                  </form>
                </div>
                <div className="InputTime_UpdateCourse">
                  <form>
                    <input
                      name="time"
                      id="timeCourse"
                      // placeholder="Nhập thời gian để hoàn thành khóa học"
                      value="Thời gian của khóa học hiện tại"
                      className="timeCourse"
                      type="date"
                    ></input>
                  </form>
                </div>
              </div>
            <div className="btn_Submit_AdminUpdateCourse">
              <input type="submit" value="cập nhật"></input>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUpdateCourse;

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Navigation from "../components/Navigations/Navigation";
import "../assets/styles/AdminAddCourseDetail.css";
// import AddCourseItem2 from "../components/AddCourseItem";
import AddCourseItem2 from "../components/AdminCourses/AddCourse/AddCourse/AddCourseItem2"
import { useState } from "react/cjs/react.development";
function AdminAddCourseDetail() {
  const listAddCourse2 = [
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
  // const [items,setItem]=useState(listAddCourse2)
  //     const handleDeleteClick = (id) => {
  //         const index = items.findIndex((item) => item.id === id);
  //         if(index <0 )return;
  //         const newItems = [...items];
  //         newItems.splice(index, 1);
  //         setItem(newItems);
  //         // let currentItem= items;
  //         // currentItem=currentItem.filter((i)=>i.id !== id)
  //         // setItem(currentItem)
  //       };
  return (
    <div>
      <Navigation />
      <div className="route_container">
        <h3>Trang chủ - Quản lý Khóa học</h3>
      </div>
      <div className="center_AddCourseDetail_container">
        <div className="container_AdminAddCourse_detail">
          <div className="center_menu_AdminAddCourse">
            <p>Hello</p>
          </div>
          <div className="center_AddCourse_right">
            <div className="center_AddCourse_Top">
              <h2>Thêm nội dung khóa học</h2>
            </div>
            {listAddCourse2.map((item, index) => (
              <div className="listAddCourse__Container" key={item.id}>
                <AddCourseItem2 id={item.id} name={item.name} />
              </div>
            ))}
            {/* <div className="listAddCourse2__Container">
                                        <AddCourseItem2 
                                            // id={item.id}
                                            // name={item.name}
                                            data={items}
                                            // props={item}
                                            handleDeleteClick={handleDeleteClick}
                                        />   
                        </div> */}
            {/* {
                            items.map((item)=>(
                                <AddCourseItem2
                                data={item}
                                handleDeleteClick={handleDeleteClick}
                                />
                            ))
                        } */}
            <div className="listAddCourse_BtnAdd">
              <div className="btn_iconAdd">
                <button>
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div className="btnAdd_Decription">
                <span>Thêm Bài Học Mới</span>
              </div>
            </div>
            <div className="btn_AddCourse__container">
              <button>Tạo Khóa Học</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddCourseDetail;

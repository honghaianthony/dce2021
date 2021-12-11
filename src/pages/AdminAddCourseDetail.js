// import React from "react";
import MainLayout from "../layouts/MainLayout";
import Navigation from "../components/Navigations/Navigation";
import "../assets/styles/AdminAddCourseDetail.css";
// import AddCourseItem2 from "../components/AddCourseItem";
import AddCourseItem2 from "../components/AdminCourses/AddCourse/AddCourse/AddCourseItem2"
import React, { useState,useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { useParams } from "react-router-dom";
import coursesApi from "../apis/coursesApi";
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
  const [dataCourse, setDataCourse] = useState(null);
  const { courseId } = useParams();

  useEffect(async () => {
    const res = await coursesApi.getCourseById(courseId);
    setDataCourse(res);
  }, [courseId]);
  
  console.log(dataCourse);
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
    <>
    <AdminLayout>
      {dataCourse === null ? (
          <h1>Loading</h1>
        ) : (
      <div className="AdminAddCourseDetail___Container">
        <div className="route_container">
          <h3>Trang chủ - Quản lý Khóa học</h3>
        </div>
        <div className="center_AddCourseDetail_container">
          <div className="container_AdminAddCourse_detail">
            {/* <div className="center_menu_AdminAddCourse">
              <p>Hello</p>
            </div> */}
            <div className="center_AddCourse_right">
              <div className="center_AddCourse_Top">
                <h2>Thêm nội dung khóa học</h2>
              </div>
              {dataCourse.map((item, index) => (
                <div className="listAddCourse__Container" key={index}>
                  <AddCourseItem2 id={item.id} name={item.lessonName} />
                </div>
              ))}
              
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
      </div>)}
    </AdminLayout>
    </>
  );
}

export default AdminAddCourseDetail;
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
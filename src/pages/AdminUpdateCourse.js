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
              <div className="center_content_AdminUpdateCourse_title">
                <p>Chỉnh sửa khóa học</p>
              </div>
              <div className="center_content_AdminUpdateCourse__find">
                <form action="">
                  <label className="upCourse_label" htmlFor="idCourse">
                    ID khóa học
                  </label>
                  <input
                    type="text"
                    name="id"
                    id="Up_idCourse"
                    placeholder="Nhập ID khóa học cần sửa"
                  />
                  <div className="btn_updateCourse_find">
                    <input
                      type="submit"
                      className="btn_search_updateCourse"
                      value="Tìm"
                    />
                  </div>
                </form>
              </div>
              <div className="center_content_AdminUpdateCourse__bottom">
                <div className="center_content_AdminUpdateCourse__nametitle">
                  <span>Lập Trình Hướng Đối tượng</span>
                </div>
                <div className="center_container_btn_deleteAll">
                  <button type="submit">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              {/* {
                                 items.map((item,index)=>(
                                    <div className="listAddCourse__Container" key={item.id}> */}
              {/* <div className="listAddCourse__Container">
                                        <AddCourseItem 
                                            // id={item.id}
                                            // name={item.name}
                                            data={items}
                                            // props={item}
                                            handleDeleteClick={handleDeleteClick}
                                        />   
                                    </div> */}
              {/* </div>         
                                  ))
                            } */}
              {listAddCourse.map((item, index) => (
                <div className="listAddCourse__Container" key={item.id}>
                  <AddCourseItem id={item.id} name={item.name} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUpdateCourse;

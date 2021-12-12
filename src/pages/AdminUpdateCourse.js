import React from "react";
import Navigation from "../components/Navigations/Navigation";
import "../assets/styles/AdminUpdateCourse.css";
// import AddCourseItem from "../components/AddCourseItem";
import AddCourseItem from "../components/AdminCourses/AddCourse/AddCourse/AddCourseItem"
import { useEffect, useState } from "react/cjs/react.development";
import AdminLayout from "../layouts/AdminLayout";
import coursesApi from "../apis/coursesApi";
import { useParams } from "react-router-dom";
import { RiH1 } from "react-icons/ri";
import { toast } from "react-toastify";

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
  // const handleDeleteAllClick = () => {
  //   setItem2("");
  // };
  const [data,setDataCourse]=useState(null)
  const [dataDelete,deleteData]=useState()
  const { courseId } = useParams();
  /**đổ dữ liệu */
  useEffect(async () => {
    const res = await coursesApi.getCourseById(courseId);
    setDataCourse(res);
  }, [courseId]);
  /**xóa */
  const handleDelete=async(e)=>{
    e.preventDefault();
    const res = await coursesApi.deleteCourseById(courseId);
    deleteData(res);
    if (res) {
      toast.success("Xóa thành công");
    } else {
      toast.error("Xóa thất bại");
    }
  }
  
  console.log(courseId)
  return (
    <>
    <AdminLayout>
      {data ===null ?(<div className="loader"></div>):(
      <div className="AdminUpdateCourse__container">
          <div className="top_decription_link">
        <h2>Trang chủ - Quản lý khóa học</h2>
      </div>
      <div className="Update__AdminCourse__Container">
        <div className="Update__container">
          <div className="center_AdminUpdateCourse__container">
            
            <div className="center_content_AdminUpdateCourse">
               <div className="top_decription_centercontent">
                  <p>Tạo khóa học mới</p>
                  <div className="btn_delete_container">
                  <button type="button" onClick={handleDelete}>Xóa</button>
                </div>
            </div> 
            
              <div className="middle_decription_centercontent">
                <div className="InputName_UpdateCourse">
                    <form action="">
                      <input
                        type="text"
                        name="id"
                        id="idCourse"
                        // placeholder="Nhập tên khóa học mới"
                        value={data.courseName}
                      />
                    </form>
                </div>
                <div className="InputDescription_UpdateCourse">
                  <form>
                    <textarea
                      name="description"
                      id="decriptionCourse"
                      // placeholder="Nhập mô tả"
                      value={data.description}
                    ></textarea>
                  </form>
                </div>
                <div className="InputTime_UpdateCourse">
                  <form>
                    <input
                      name="time"
                      id="timeCourse"
                      // placeholder="Nhập thời gian để hoàn thành khóa học"
                      value={data.time}
                      className="timeCourse"
                      // type="number"
                      min="0"
                    ></input>
                  </form>
                </div>
                <div className="InputTime_UpdateCourse">
                  <form>
                    <input
                      name="time"
                      id="timeCourse"
                      // placeholder="Nhập thời gian để hoàn thành khóa học"
                      value={data.image}
                      className="timeCourse"
                      // type="number"
                      min="0"
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
      </div>)}
      
    </AdminLayout>
    </>
  );
}

export default AdminUpdateCourse;

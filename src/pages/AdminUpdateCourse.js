import React from "react";
import Navigation from "../components/Navigations/Navigation";
import "../assets/styles/AdminUpdateCourse.css";
// import AddCourseItem from "../components/AddCourseItem";
import AddCourseItem from "../components/AdminCourses/AddCourse/AddCourse/AddCourseItem";
import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import coursesApi from "../apis/coursesApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { uploadFile, deleteFile } from "../firebase/util"; /*** */
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

import AdminPath from "../components/AdminBlog/AdminPath/AdminPath";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
  const { courseId } = useParams();
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
  const [data, setDataCourse] = useState(null);

  const [dataDelete, deleteData] = useState();
  const [image, setImage] = useState(null); /*** */
  const [progress, setProgress] = useState(0); /*** */
  const [url, setUrl] = useState(""); /*** */
  // const [data, setData] = useState([]);

  /**đổ dữ liệu */
  useEffect(async () => {
    const res = await coursesApi.getCourseById(courseId);
    setDataCourse(res);
  }, [courseId]);
  /**xóa */
  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await coursesApi
      .deleteCourseById(courseId)
      // .then(history.push(`/admincourselist`));
    console.log(res)
    deleteData(res);
    if (res) {
      toast.success("Xóa thành công");
    } else {
      toast.error("Xóa thất bại");
    }
    history.push(`/admincourselist`);
    console.log(res);
  };

  /**sửa */
  const [courseName, setCourseName] = useState();
  const [courseDes, setCourseDes] = useState();
  const [courseTime, setCourseTime] = useState();
  const [courseImg, setCourseImg] = useState();
  useEffect(async () => {
    const res = await coursesApi.getCourseById(courseId);
    setCourseName(res.courseName);
  }, [courseId]);
  useEffect(async () => {
    const res = await coursesApi.getCourseById(courseId);
    setCourseDes(res.description);
  }, [courseId]);
  useEffect(async () => {
    const res = await coursesApi.getCourseById(courseId);
    setCourseTime(res.time);
  }, [courseId]);
  useEffect(async () => {
    const res = await coursesApi.getCourseById(courseId);
    setCourseImg(res.image);
  }, [courseId]);
  let history = useHistory();
  const handleChangeData = async (e) => {
    e.preventDefault();
    const newCourse = {
      id: courseId,
      courseName: courseName,
      description: courseDes,
      rating: 0,
      time: courseTime,
      image: courseImg,
    };
    const res = await coursesApi
      .updateCourseById(newCourse)
      // .then(history.push(`/admincourselist`));
    if (res) {
      toast.success("Cập nhật thành công");
      history.push(`/admincourselist`);
    } else {
      toast.error("Cập nhật thất bại");
    }
  };
  useEffect(() => {
    if (image !== null) {
      uploadFile(
        image,
        (progress) => {
          setProgress(progress);
        },
        (url) => {
          setUrl(url);
        }
      );
    }
  }, [image]); /*** */
  const deleteImage = () => {
    deleteFile(
      url,
      () => {
        toast.success("Xóa thành công");
        setProgress(0);
        setUrl("");
        document.getElementById("add-blog-cover-image").value = null;
      },
      (error) => {
        toast.error("Lỗi!!!");
      }
    );
  }; /*** */
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cập nhật thông tin khóa học</title>
      </Helmet>
      <AdminLayout>
        {data === null ? (
          <div className="loader"></div>
        ) : (
          <div className="AdminUpdateCourse__container">
            {/* <div className="top_decription_link"> */}
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
            <div className="Update__AdminCourse__Container">
              <div className="Update__container">
                <div className="center_AdminUpdateCourse__container">
                  <div className="center_content_AdminUpdateCourse">
                    <form onSubmit={handleChangeData}>
                      <div className="top_decription_centercontent">
                        <p>Chỉnh sửa khóa học</p>
                        <div className="btn_delete_container">
                          <button type="button" onClick={handleDelete}>
                            Xóa
                          </button>
                        </div>
                      </div>
                      <div className="middle_decription_centercontent">
                        <div className="InputName_UpdateCourse">
                          <form>
                            <input
                              type="text"
                              name="id"
                              id="idCourse"
                              // placeholder="Nhập tên khóa học mới"
                              value={courseName}
                              onChange={(event) =>
                                setCourseName(event.target.value)
                              }
                            />
                          </form>
                        </div>
                        <div className="InputDescription_UpdateCourse">
                          <form>
                            <textarea
                              name="description"
                              id="decriptionCourse"
                              // placeholder="Nhập mô tả"
                              value={courseDes}
                              onChange={(event) =>
                                setCourseDes(event.target.value)
                              }
                            ></textarea>
                          </form>
                        </div>
                        <div className="InputTime_UpdateCourse">
                          <form>
                            <input
                              name="time"
                              id="timeCourse"
                              // placeholder="Nhập thời gian để hoàn thành khóa học"
                              value={courseTime}
                              className="timeCourse"
                              onChange={(event) =>
                                setCourseTime(event.target.value)
                              }
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
                              value={courseImg}
                              className="timeCourse"
                              onChange={(event) =>
                                setCourseImg(event.target.value)
                              }
                              // type="number"
                              min="0"
                            />
                          </form>
                        </div>
                      </div>

                      <div className="btn_Submit_AdminUpdateCourse">
                        <button type="submit" value="cập nhật">
                          Cập nhật
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
}

export default AdminUpdateCourse;

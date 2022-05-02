import React from "react";
import "../assets/styles/AdminAddCourse.css";
import AdminLayout from "../layouts/AdminLayout";
import coursesApi from "../apis/coursesApi";
import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { uploadFile, deleteFile } from "../firebase/util"; /*** */
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import AdminPath from "../components/AdminBlog/AdminPath/AdminPath";
import { useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function AdminAddCourse() {
  const [addNameCourse, setAddNameCourse] = useState("");
  const [addDesriptionCourse, setAddDescriptionCourse] = useState("");
  const [addImageCourse, setAddImageCourse] = useState("");
  const [addTimeCourse, setAddTimeCourse] = useState(0);
  const [addRateCourse, setAddRateCourse] = useState(0);
  const [progress, setProgress] = useState(0); /*** */
  const [image, setImage] = useState(null); /*** */
  const [url, setUrl] = useState(""); /*** */
  const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");
  let history = useHistory();
  useEffect(async () => {
    const res2 = await coursesApi.getAllCourses();
    setData(res2.slice(-1)[0]._id);
  }, []);
  let currentIdCourse = data + 1;
  console.log(currentIdCourse);
  const location = useLocation();
  // let path=
  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    const Course = {
      courseName: addNameCourse,
      description: addDesriptionCourse,
      rating: addRateCourse,
      time: addTimeCourse,
      image: url,
    };
    console.log(Course)
    const res = await coursesApi
      .createCourse(Course)
      .then(history.push(`/admincourselist`));
    if (res) {
      toast.success(
        "Thêm khóa học thành công. Tiếp tục thêm nội dung cho khóa học"
      );
    } else {
      toast.error("Thêm khóa học thất bại");
    }
  };

  // useEffect(()=>{

  // },[])

  const imageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }; /*** */
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
  // const handleOnClick = useCallback(() => history.push('/'), [history]);
  //   const clickHandler = () => {
  //     try {
  //         // await dispatch(action)
  //         props.history.push('/')  // redirects
  //     } catch (err) {
  //         props.history.push('/errorpage')  // redirects
  //     }
  // }
  // const [state, dispatch] = useStore(); /** */
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thêm khóa học mới</title>
      </Helmet>
      <AdminLayout>
        {/* <Navigation /> */}
        <div className="AdminAddCourse__">
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
                  <div className="InputDescription_AddCourse">
                    <textarea
                      name="description"
                      id="decriptionCourse"
                      placeholder="Nhập mô tả"
                      onChange={(event) =>
                        setAddDescriptionCourse(event.target.value)
                      }
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
                      onChange={(event) => setAddTimeCourse(event.target.value)}
                    ></input>
                  </div>
                  <div className="InputTime_AddCourse">
                    <input
                      name="rating"
                      id="rateCourse"
                      placeholder="Nhập số đánh giá"
                      type="number"
                      min="0"
                      onChange={(event) => setAddRateCourse(event.target.value)}
                    ></input>
                  </div>
                  <div className="InputTime_AddCourse__">
                    {/* <input
                      name="image"
                      id="rateCourse"
                      placeholder="Nhập link hình ảnh "
                      type="text"
                      onChange={(event)=>setAddImageCourse(event.target.value)}
                    /> */}
                    <div>
                      {progress < 100 && (
                        <input
                          type="file"
                          accept="image/*"
                          name="coverImage"
                          id="add-blog-cover-image"
                          placeholder="Link hình ảnh"
                          onChange={imageChange}
                        />
                      )}
                      {progress > 0 && (
                        <div className="upload-image">
                          <progress
                            className="progress-bar"
                            value={progress}
                            max="100"
                          />
                          <br />
                          <i
                            class="far fa-times-circle"
                            onClick={deleteImage}
                          ></i>
                          <img
                            className="preview-image"
                            src={url || "http://via.placeholder.com/300"}
                            alt="firebase-image"
                          />
                        </div>
                      )}
                    </div>
                    <div className="btn_Submit_AdminAddCourse">
                      <button
                        type="submit"
                        className="btn_submit_adminaddcourse"
                      >
                        Tiếp tục
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export default withRouter(AdminAddCourse);

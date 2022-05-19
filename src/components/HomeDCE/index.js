import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeDCE.css";
import anh9 from "../../assets/images/download.png";
import { useStore, actions } from "../../store";
import blogsApi from "../../apis/blogsApi";
import coursesApi from "../../apis/coursesApi";
import ExerciseApi from "../../apis/ExerciseApi";
import usersApi from "../../apis/usersApi";

function HomeDCE() {
  const [state, dispatch] = useStore();
  const [blogs, setBlogs] = useState([]);
  const [courses, setCourses] = useState([]);
  const [exercises, setexErcises] = useState([]);
  const [userCourse, setUserCourse] = useState([]);
  const [userExercise, setUserExercise] = useState([]);

  useEffect(async () => {
    Promise.all([
      coursesApi.getAllCourses().then(setCourses),
      blogsApi.getAllBlogs().then(setBlogs),
      ExerciseApi.getAllExercise().then(setexErcises),
      usersApi.getAllUserExercise().then((item) => {
        setUserExercise(item.exercises);
      }),
      usersApi.getAllUserCourse().then((item) => {
        setUserCourse(item.courses);
      }),
    ]);
    dispatch(actions.reload());
  }, []);

  const coursesMap = () => {
    return courses?.map((item, index) => {
      return (
        index < 4 && (
          <article
            className="course-item grid-style col-xs-12 col-sm-6 col-lg-3"
            key={item._id}
          >
            <div className="course-thumb">
              <img src={item.image} alt="C++ cho người mới bắt đầu" />
            </div>
            <div className="view-content">
              <h3 className="">{item.courseName}</h3>
              <p>{item.description}</p>
              <div className="course-info">
                <Link to={`/courses/${item._id}`} className="btn btn-round">
                  Học ngay
                </Link>
              </div>
            </div>
          </article>
        )
      );
    });
  };
  const blogsMap = () => {
    return blogs?.map((item, index) => {
      return (
        index < 3 && (
          <Link key={index} to={`/blogs/${item._id}`} className="blog-link">
            <article className="blog-item list-style" key={item._id}>
              <div className="wrap-blog-thumb">
                <img
                  src={item.coverImage}
                  alt="Cài Đặt Visual Studio Code Lập Trình C++ Dễ Như Ăn Kẹo"
                />
              </div>
              <div className="wrap-blog-item-content">
                <h3 className="blog-title">{item.title}</h3>
                <p className="short-desc">{item.description}</p>
              </div>
            </article>
          </Link>
        )
      );
    });
  };
  const exercisesMap = () => {
    return exercises?.map((item, index) => {
      return (
        index < 3 && (
          <article className="col-xs-12 col-sm-4 training-item" key={item._id}>
            <Link
              to={`/exercises/${item._id}`}
              className="wrap-training-content"
            >
              <div className="task-item-detail">
                <h3 className="task-title">{item.exerciseName}</h3>
                <span
                  className={
                    item.level === 1
                      ? "badge badge-secondary easy"
                      : "badge badge-secondary medium"
                  }
                >
                  {item.level === 1 && "Đơn giản"}
                  {item.level === 2 && "Trung bình"}
                </span>
              </div>

              <ul className="task-info-info">
                <li className="so-luong">
                  <i>
                    <img src={anh9} alt="người" />
                    <span className="span-user-submit">30/40</span>
                  </i>
                </li>
              </ul>
            </Link>
          </article>
        )
      );
    });
  };
  return (
    <>
      {console.log("re-render")}
      <div className="home-DCE">
        {/* ----------------------PHAN DAU----------------------- */}
        <div className="wrap-block-user">
          <h2 className="welcome-user">
            Xin chào <span>{state.fullname}</span>. Chào mừng bạn đến với DCE.
            Hãy khám phá nhé!
          </h2>

          <div className="profile-user">
            <div className="col-xs-12 col-md-4">
              <div className="main-user-info">
                <div className="user-ava">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/dce2021.appspot.com/o/images%2F1639215255401-Anonymous-Avatar.png?alt=media&token=be8c5e92-271b-4d0e-85ff-53ae1abfb6f8"
                    className="future-img"
                    alt="Avata"
                  />
                </div>

                <div className="content-info">
                  <h3 className="user-name">{state.username}</h3>
                  <p className="main-user-dee"></p>
                </div>

                <div className="user-process">
                  <span className="name">{state.fullname}</span>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-8">
              <div className="detail-user">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 detail-progress-item">
                    <h4>Khóa học</h4>
                    <div className="detail-progress-content">
                      <span className="result">
                        {
                          userCourse.filter((i) => {
                            return i.isCompleted === true;
                          }).length ? 
                          userCourse.filter((i) => {
                            return i.isCompleted === true;
                          }).length : 0
                        }
                        /{courses.length}
                      </span>
                    </div>

                    <div className="item-progress-bar">
                      <span className="current-progress"></span>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-4 detail-progress-item">
                    <h4>Luyện tập</h4>
                    <div className="detail-progress-content">
                      <span className="result">
                        {
                          userExercise.filter((i) => {
                            return i.isCompleted === true;
                          })?.length
                        }
                        /{exercises?.length}
                      </span>
                    </div>

                    <div className="item-progress-bar">
                      <span className="current-progress"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------PHAN 2---------------------------- */}
        <div className="home-section">
          <h3 className="heading-block">
            Khóa học
            <Link to="/courses">Xem tất cả</Link>
          </h3>

          <div className="wrap-cl-tabs-control">
            <span className="mobile-dropdown-control">
              <select className="mobile-dropdown-control-select">
                <option value="#suggest-courses" defaultValue={true}>
                  Khoá học gợi ý
                </option>
                <option value="#recent-courses"> Đang học</option>
                <option value="#finish-courses"> Đã hoàn thành</option>
              </select>

              <i className="ion-ios-arrow-down"></i>
            </span>

            <ul className="cl-tabs-control">
              <li>
                <a
                  href="#suggest-courses"
                  className="cl-tab-control-item active"
                >
                  Khoá học gợi ý
                </a>
              </li>

              <li>
                <a href="#recent-courses" className="cl-tab-control-item">
                  Đang học
                </a>
              </li>

              <li>
                <a
                  href="#finish-courses"
                  className="cl-tab-control-item disabled"
                >
                  Đã hoàn thành
                </a>
              </li>
            </ul>

            <div className="wrap-course-tabs">
              <div className="cl-tab-item active">
                <div className="row list-courses">
                  {/* <ul className="courses__items">{listCourse()}</ul> */}
                  {coursesMap()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------PHAN 3---------------------- */}
        <div className="mid-bottom-section home-section">
          <div className="row">
            <div className="col-xs-12 col-lg-7">
              <h3 className="heading-block">
                Luyện tập hằng ngày
                <a href="/learning">Xem tất cả</a>
              </h3>

              <div className="wrap-training-section wrap-home-block">
                {/* <ul className="list-training-summary">
                  <li className="easy-level">
                    <span className="summary-value">0/70</span> Đơn giản
                  </li>

                  <li className="normal-level">
                    <span className="summary-value">0/80</span> Trung bình
                  </li>
                </ul> */}

                <div className="row list-task-training">{exercisesMap()}</div>
              </div>
            </div>

            <div className="col-xs-12 col-lg-5">
              <h3 className="heading-block">
                Chia sẻ
                <Link to="/blogs">Xem tất cả</Link>
              </h3>

              <div className="wrap-home-block blog-block">{blogsMap()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDCE;

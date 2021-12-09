import React, { useEffect, useState } from "react";
import "./Courses.css";
import CourseItem from "./CourseItem";
import SearchFilter from "../Search/index";
import coursesApi from "../../apis/coursesApi";

function CoursesMain() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const res = await coursesApi.getAllCourses();
    setData(res);
  }, []);

  const listCourse = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        let path = "/course/" + item.id;
        return (
          <CourseItem
            key={index}
            src={item.image}
            text={item.courseName}
            rating={item.rate}
            description={item.description}
            path={path}
          />
        );
      });
    } else {
      return <h2>Loading</h2>;
    }
  };
  return (
    <>
      <div className="head__background">
        <div className="courses__head">
          <div className="courses__head__container">
            <h2>
              Tự học lập trình trực tuyến. Hãy bắt đầu với khoá học đầu tiên của
              bạn!
            </h2>
            <SearchFilter
              placeholder="Nhập khoá học cần tìm"
              className="courses-search"
            />
          </div>
          <img className="decor__img" src="/images/courses/decor.png" />
        </div>
      </div>

      <div className="courses">
        <div className="courses__container">
          <div className="courses__wrapper">
            <ul className="courses__items">{listCourse()}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesMain;

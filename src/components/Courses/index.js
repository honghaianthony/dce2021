import React, { useEffect, useState } from "react";
import { Route, useRouteMatch, useParams } from "react-router-dom";
import "./Courses.css";
import CourseItem from "./CourseItem";
import SearchFilter from "../Search/index";
import coursesApi from "../../apis/coursesApi";
import { Course } from "../../pages";

function CoursesMain() {
  const { url } = useRouteMatch();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");
  useEffect(async () => {
    const res = await coursesApi.getAllCourses();
    setData(res);
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    const newData = data.filter((item) => {
      return (
        item.courseName.toLowerCase().search(search.toLowerCase()) !== -1 ||
        item.description.toLowerCase().search(search.toLowerCase()) !== -1
      );
    });
    setFilteredData(newData);
  }, [search]);

  const listCourse = () => {
    if (filteredData.length > 0) {
      return filteredData.map((item, index) => {
        let path = "/courses/" + item.id;
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
      return <div className="loader"></div>;
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
              value={search}
              onChange={setSearch}
            />
          </div>
          <img className="decor__img" src="/images/courses/decor.png" />
        </div>
      </div>

      <div className="courses">
        <div className="courses__container">
          <div className="courses__wrapper">
            {listCourse()}
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesMain;

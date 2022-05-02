import React, { useEffect, useState } from "react";
import Search from "../components/Search/index";
import "../assets/styles/AdminExerciseList.css";
import AdminLayout from "../layouts/AdminLayout";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ExerciseApi from "../apis/ExerciseApi";
import usersApi from "../apis/usersApi";
import "../components/AdminCourses/CourseList/CourseListTable.css";
import { Helmet } from "react-helmet-async";

function getFormattedDate(date) {
  return new Date(date).toLocaleDateString();
}

function AdminExerciseList() {
  const [APIData, setAPIData] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const res = await ExerciseApi.getAllExercise();
    setAPIData(res);
  }, []);
  useEffect(() => {
    const res = APIData.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setFilteredData(res);
  }, [search]);
  const searchItems = (searchValue) => {
    setSearch(searchValue);
  };

  const listExers = () => {
    return filteredData.length > 0
      ? filteredData.map((item, index) => {
          let pathExer = "/update-exercises/" + item._id;
          return (
            <tr>
              <td>{item._id}</td>
              <td>{item.exerciseName}</td>
              <td>
                <p>admin</p>
              </td>
              <td>{getFormattedDate(item.createdAt)}</td>
              <td>{getFormattedDate(item.updatedAt)}</td>
              <td>
                <Link to={pathExer}>
                  <button className="view-btns">Chỉnh sửa</button>
                </Link>
              </td>
            </tr>
          );
        })
      : APIData.map((item, index) => {
          let pathExer = "/update-exercises/" + item._id;
          return (
            <tr>
              <td>{item._id}</td>
              <td>{item.exerciseName}</td>
              <td>
                <p>admin</p>
              </td>
              <td>{getFormattedDate(item.createdAt)}</td>
              <td>{getFormattedDate(item.updatedAt)}</td>
              <td>
                <Link to={pathExer}>
                  <button className="view-btns">Chỉnh sửa</button>
                </Link>
              </td>
            </tr>
          );
        });
  };

  return (
    <>
      <AdminLayout>
        {console.log("re-render")}
        <div className="exerciselist">
          <div className="exerciselist-path">
            <Link to="/" className="exerciselist-link">
              <span>Trang chủ </span>
            </Link>
            <i className="icon-angle-right">
              <FaAngleRight />
            </i>
            <Link to="/adminexerciselist" className="exerciselist-link">
              <span> Quản lý bài luyện tập</span>
            </Link>
          </div>
          <div className="exerciselist-container">
            <h2 className="exerciselist-title"> Danh sách bài luyện tập </h2>
            <Search
              placeholder="Nhập tên bài tập cần tìm"
              className="exerciselist-search"
              value={search}
              onChange={searchItems}
            />
            <h2 className="exerciselist-title1">Thông tin bài luyện tập</h2>
            <div className="listtables-container">
              <table className="listtables">
                <thead className="listtables-header">
                  <tr className="listtables-row">
                    <th>ID</th>
                    <th>Tên bài luyện tập</th>
                    <th>Tác giả</th>
                    <th>Ngày tạo</th>
                    <th>Update</th>
                    <th>Xem</th>
                  </tr>
                </thead>

                <tbody className="listtables-body">{listExers()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
export default AdminExerciseList;

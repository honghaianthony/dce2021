import React, { useEffect, useState } from "react";
import Search from "../components/Search/index";
import "../assets/styles/AdminCourseList.css";
import AdminLayout from "../layouts/AdminLayout";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import coursesApi from "../apis/coursesApi";
import "../components/AdminCourses/CourseList/CourseListTable.css";
import { Helmet } from "react-helmet-async";

function getFormattedDate(date) {
  return new Date(date).toLocaleDateString();
}

function AdminCourseList() {
  const [data, setListCourse] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");
  useEffect(async () => {
    const res = await coursesApi.getAllCourses();
    setListCourse(res);
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    const newData = data.filter((item) => {
      return (
        item.courseName.toLowerCase().search(search.toLowerCase()) !== -1 ||
        (item.id + "").indexOf(search) !== -1
      );
    });
    setFilteredData(newData);
  }, [search]);

  const listCourses = () => {
    if (filteredData.length > 0) {
      return filteredData.map((item, index) => {
        return (
          <tr>
            <td>{item.id}</td>
            <td>{item.courseName}</td>
            <td>
              <p>admin</p>
            </td>
            <td>{getFormattedDate(item.createdAt)}</td>
            <td>{getFormattedDate(item.updatedAt)}</td>
            <td>
              <Link to={`/adminaddcoursedetail/${item.id}`}>
                <button className="view-btns">Xem chi tiết</button>
              </Link>
            </td>
          </tr>
        );
      });
    } else {
      return <div className="loader"></div>;
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Danh sách các blog</title>
      </Helmet>
      <AdminLayout>
        <div className="courselist">
          <div className="courselist-path">
            <Link to="/" className="courselist-link">
              <span>Trang chủ </span>
            </Link>
            <i className="icon-angle-right">
              <FaAngleRight />
            </i>
            <Link to="/admincourselist" className="courselist-link">
              <span> Quản lý khoá học</span>
            </Link>
          </div>
          <div className="courselist-container">
            <h2 className="courselist-title"> Danh sách khoá học </h2>
            <Search
              placeholder="Nhập tên khoá học cần tìm"
              className="courselist-search"
              value={search}
              onChange={setSearch}
            />
            <h2 className="courselist-title1">Thông tin khoá học</h2>
            <div className="listtables-container">
              <table className="listtables">
                <thead className="listtables-header">
                  <tr className="listtables-row">
                    <th>ID</th>
                    <th>Tên khoá học</th>
                    <th>Admin</th>
                    <th>Ngày tạo</th>
                    <th>Update</th>
                    <th>Xem</th>
                  </tr>
                </thead>
                <tbody className="listtables-body">{listCourses()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
export default AdminCourseList;

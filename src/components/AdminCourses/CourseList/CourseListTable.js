import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CourseListTable.css";
import coursesApi from "../../../apis/coursesApi";

function getFormattedDate(date) {
  return new Date(date).toLocaleDateString();
}

function CourseListTable() {
  const [data, setListCourse] = useState([]);
  useEffect(async () => {
    const res = await coursesApi.getAllCourses();
    setListCourse(res);
  }, []);
  const listCourses = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.courseName}</td>
            <td>
              <p>khuongduy17</p>
            </td>
            <td>{getFormattedDate(item.createdAt)}</td>
            <td>{getFormattedDate(item.updatedAt)}</td>
            <td>
              <Link to={`/courses/${item.id}`}>
                <button className="view-btn">Xem chi tiết</button>
              </Link>
            </td>
          </tr>
        );
      });
    } else {
      return <h2>Loading..</h2>;
    }
  };
  return (
    <div className="listtable-container">
      <table className="listtable">
        <thead className="listtable-header">
          <tr className="listtable-row">
            <th>ID</th>
            <th>Tên khoá học</th>
            <th>Admin</th>
            <th>Ngày tạo</th>
            <th>Update</th>
            <th>Xem</th>
          </tr>
        </thead>
        <tbody className="listtable-body">{listCourses()}</tbody>
      </table>
    </div>
  );
}

export default CourseListTable;

import React, { useState, useEffect } from "react";
import Search from "../components/Search/index";
import "../assets/styles/AdminCourseList.css";
import AdminLayout from "../layouts/AdminLayout";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import usersApi from "../apis/usersApi";
import "../components/AdminMembers/MemberListTable.css";

function getFormattedDate(date) {
  return new Date(date).toLocaleDateString();
}

function Report() {
  const [data, setListMember] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2021);
  useEffect(async () => {
    const res = await usersApi.getAllUsers();
    setListMember(res);
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    const newData = data.filter((item) => {
      return (
        (item.role === 1 &&
          item.userName.toLowerCase().search(search.toLowerCase()) !== -1) ||
        item.email.toLowerCase().search(search.toLowerCase()) !== -1 ||
        (item.id + "").indexOf(search) !== -1
      );
    });
    setFilteredData(newData);
  }, [search]);

  const listUsers = () => {
    if (filteredData.length > 0) {
      return filteredData.map((item, index) => {
        return (
          <tr>
            <td>{item.id}</td>
            <td>{item.userName}</td>
            <td>{item.email}</td>
            <td>{getFormattedDate(item.createdAt)}</td>
            <td>Thành viên</td>
          </tr>
        );
      });
    } else {
      return <div className="loader"></div>;
    }
  };

  return (
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
            <span> Quản lý thành viên</span>
          </Link>
        </div>
        <div className="courselist-container">
          <h2 className="courselist-title">
            Thống kê báo cáo số lượng thành viên
          </h2>
          <div className="filter-member">
            <select>
              <option value="1">Tháng 1</option>
              <option value="2">Tháng 2</option>
              <option value="3">Tháng 3</option>
              <option value="4">Tháng 4</option>
              <option value="5">Tháng 5</option>
              <option value="6">Tháng 6</option>
              <option value="7">Tháng 7</option>
              <option value="8">Tháng 8</option>
              <option value="9">Tháng 9</option>
              <option value="10">Tháng 10</option>
              <option value="11">Tháng 11</option>
              <option value="12">Tháng 12</option>
            </select>
            <select></select>
          </div>
          <h2 className="courselist-title1">Thông tin thành viên</h2>
          <div className="memberlisttable-container">
            <table className="memberlisttable">
              <thead className="memberlisttable-header">
                <tr className="memberlisttable-row">
                  <th>ID</th>
                  <th>Tên tài khoản</th>
                  <th>Email</th>
                  <th>Ngày tham gia</th>
                  <th>Vai trò</th>
                </tr>
              </thead>

              <tbody className="memberlisttable-body">{listUsers()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
export default Report;

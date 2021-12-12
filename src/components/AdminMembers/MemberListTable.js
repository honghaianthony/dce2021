import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MemberListTable.css";
import usersApi from "../../apis/usersApi";

function getFormattedDate(date) {
  var start = new Date(date);
  let year = start.getFullYear();
  let month = (1 + start.getMonth()).toString().padStart(2, "0");
  let day = start.getDate().toString().padStart(2, "0");
  return month + "/" + day + "/" + year;
}

function MemberListTable() {
  const [data, setListMember] = useState([]);
  useEffect(async () => {
    const res = await usersApi.getAllUsers();
    setListMember(res);
  }, []);
  const listUsers = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <tr>
            <td>{item.id}</td>
            <td>{item.userName}</td>
            <td>{item.email}</td>
            <td>{getFormattedDate(item.createdAt)}</td>
            <td>
              <div className="member-role-container">
                <select className="member-role" value={item.role}>
                  <option value="1">Người dùng</option>
                  <option value="2">Admin</option>
                  <option value="3">Kiểm duyệt viên</option>
                </select>
              </div>
            </td>
          </tr>
        );
      });
    } else {
      return <h2>Loading..</h2>;
    }
  };
  return (
    <div className="memberlisttable-container">
      <table className="memberlisttable">
        <thead className="memberlisttable-header">
          <tr className="memberlisttable-row">
            <th>ID</th>
            <th>Tên tài khoản</th>
            <th>Email</th>
            <th>Ngày tham gia</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody className="memberlisttable-body">{listUsers()}</tbody>
      </table>
    </div>
  );
}

export default MemberListTable;

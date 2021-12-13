import React, { useState, useEffect } from "react";
import "../assets/styles/AdminCourseList.css";
import AdminLayout from "../layouts/AdminLayout";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import usersApi from "../apis/usersApi";
import "../components/AdminMembers/MemberListTable.css";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

function getFormattedDate(date) {
  return new Date(date).toLocaleDateString();
}

function Report() {
  const [data, setListMember] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [month, setMonth] = useState("");
  // const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [yearArr, setYearArr] = useState([]);

  useEffect(async () => {
    const res = await usersApi.getAllUsers();
    setListMember(res);
  }, []);

  useEffect(() => {
    const newData = data.filter((item) => {
      return item.role === 1;
    });
    setFilteredData(newData);
    const arr = data.map((i) => {
      return new Date(i.createdAt).getFullYear();
    });
    const arr2 = Array.from(new Set(arr));
    setYearArr(arr2);
  }, [data]);

  useEffect(() => {
    const newData = data.filter((item) => {
      return (
        item.role === 1 &&
        new Date(item.createdAt).getFullYear() == year &&
        (new Date(item.createdAt).getMonth() + 1).toString() ===
          month.toString()
      );
    });
    setFilteredData(newData);
  }, [month, year]);

  const style = { font: { sz: "18", bold: true } };
  const DataSet = [
    {
      columns: [
        {
          title: "Id",
          style: style,
          width: { wpx: 20 },
        },
        {
          title: "Tên tài khoản",
          style: style,
          width: { wpx: 90 },
        },
        {
          title: "Email",
          style: style,
          width: { wpx: 800 },
        },
        {
          title: "Ngày tham gia",
          style: style,
          width: { wpx: 80 },
        },
        {
          title: "Vai trò",
          style: style,
          width: { wpx: 50 },
        },
      ],
      data: filteredData.map((data) => [
        { value: data.id, style: { font: { sz: "14" } } },
        { value: data.username, style: { font: { sz: "14" } } },
        { value: data.email, style: { font: { sz: "14" } } },
        {
          value: getFormattedDate(data.createdAt),
          style: { font: { sz: "14" } },
        },
        { value: "Thành viên", style: { font: { sz: "14" } } },
      ]),
    },
  ];
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
      return (
        <tr>
          <td colSpan={5}>Không có kết quả</td>
        </tr>
      );
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
            <label htmlFor="month" className="month-select">
              Tháng
            </label>
            <select
              className="month-select"
              value={month}
              name="month"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            >
              <option hidden value=""></option>
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
            <label htmlFor="year" className="month-select">
              Năm
            </label>
            <select
              className="year-select"
              value={year}
              name="year"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              {yearArr.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
            {filteredData.length !== 0 ? (
              <ExcelFile
                filename="Report"
                // filename={`Báo cáo tháng ${month}/${year}`}
                element={
                  <button type="button" className="export-btn">
                    Xuất báo cáo
                  </button>
                }
              >
                <ExcelSheet
                  dataSet={DataSet}
                  name={`Báo cáo tháng ${month}/${year}`}
                />
              </ExcelFile>
            ) : null}
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

import React, { useState, useEffect } from "react";
import Search from "../components/Search/index"
import "../assets/styles/AdminCourseList.css";
import AdminLayout from "../layouts/AdminLayout"
import { FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom"
import usersApi from "../apis/usersApi"
import "../components/AdminMembers/MemberListTable.css"

function getFormattedDate(date) {
    var start = new Date(date);
    let year = start.getFullYear();
    let month = (1 + start.getMonth()).toString().padStart(2, '0');
    let day = start.getDate().toString().padStart(2, '0');
    return month + '/' + day + '/' + year;
}

function AdminMemberList() {
    const [data, setListMember] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const [search, setSearch] = useState("");
    useEffect(async () => {
        const res = await usersApi.getAllUsers();
        setListMember(res);
    }, [])

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    useEffect(() => {
        const newData = data.filter((item) => {
            return (
                item.userName.toLowerCase().search(search.toLowerCase()) !== -1 ||
                item.email.toLowerCase().search(search.toLowerCase()) !== -1 ||
                ((item.id) + '').indexOf(search) !== -1
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
        }
        else {
            return <div className="loader"></div>;
        }
    }
    return (
        <AdminLayout>
            <div className='courselist'>
                <div className='courselist-path'>
                    <Link to='/' className='courselist-link'>
                        <span>Trang chủ </span>
                    </Link>
                    <i className='icon-angle-right'><FaAngleRight /></i>
                    <Link to='/admincourselist' className='courselist-link'>
                        <span> Quản lý thành viên</span>
                    </Link>
                </div>
                <div className='courselist-container'>
                    <h2 className='courselist-title'> Quản lý thành viên </h2>
                    <Search placeholder='Nhập tên tài khoản cần tìm' className='courselist-search' value={search}
                        onChange={setSearch} />
                    <h2 className='courselist-title1'>Thông tin thành viên</h2>
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

                            <tbody className="memberlisttable-body">
                                {listUsers()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
export default AdminMemberList;


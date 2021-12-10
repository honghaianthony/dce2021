import React from "react";
import MemberListTable from "../components/AdminMembers/MemberListTable"
import Search from "../components/Search/index"
import "../assets/styles/AdminCourseList.css";
import AdminLayout from "../layouts/AdminLayout"
import { FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom"


function AdminMemberList() {
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
                    <Search placeholder='Nhập tên tài khoản cần tìm' className='courselist-search' />
                    <h2 className='courselist-title1'>Thông tin thành viên</h2>
                    <MemberListTable />
                </div>
            </div>
        </AdminLayout>
    )
}
export default AdminMemberList;


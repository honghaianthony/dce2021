import React from "react";
import CourseListTable from "../components/AdminCourses/CourseList/CourseListTable"
import Search from "../components/Search/index"
import "../assets/styles/AdminCourseList.css";
import AdminLayout from "../layouts/AdminLayout"
import { FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom"

function AdminCourseList() {
    return (
        <AdminLayout>
            <div className='courselist'>
                <div className='courselist-path'>
                    <Link to='/' className='courselist-link'>
                        <span>Trang chủ </span>
                    </Link>
                    <i className='icon-angle-right'><FaAngleRight /></i>
                    <Link to='/admincourselist' className='courselist-link'>
                        <span> Quản lý khoá học</span>
                    </Link>
                </div>
                <div className='courselist-container'>
                    <h2 className='courselist-title'> Danh sách khoá học </h2>
                    <Search placeholder='Nhập tên khoá học cần tìm' className='courselist-search' />
                    <h2 className='courselist-title1'>Thông tin khoá học</h2>
                    <CourseListTable />
                </div>
            </div>
        </AdminLayout>
    )
}
export default AdminCourseList;

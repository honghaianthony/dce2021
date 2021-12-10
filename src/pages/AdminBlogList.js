import React from "react";
import BlogListTable from "../components/AdminBlog/BlogList/BlogListTable";
import Search from "../components/Search/index"
import "../assets/styles/AdminBlogList.css";
import AdminLayout from "../layouts/AdminLayout"
import { FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom"

function AdminBlogList() {
    return (
        <AdminLayout>
            <div className='bloglist'>
                <div className='bloglist-path'>
                    <Link to='/' className='bloglist-link'>
                        <span>Trang chủ </span>
                    </Link>
                    <i className='icon-angle-right'><FaAngleRight /></i>
                    <Link to='/adminbloglist' className='bloglist-link'>
                        <span> Quản lý blog</span>
                    </Link>
                </div>
                <div className='bloglist-container'>
                    <h2 className='bloglist-title'> Danh sách blog </h2>
                    <Search placeholder='Nhập tên blog cần tìm' className='bloglist-search' />
                    <h2 className='bloglist-title1'>Thông tin blog</h2>
                    <BlogListTable />
                </div>
            </div>
        </AdminLayout>
    )
}
export default AdminBlogList;

import React from "react";
import ExerciseListTable from "../components/AdminExercises/ExerciseList/ExerciseListTable"
import Search from "../components/Search/index"
import "../assets/styles/AdminExerciseList.css";
import AdminLayout from "../layouts/AdminLayout"
import { FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom"

function AdminExerciseList() {
    return (
        <AdminLayout>
            <div className='exerciselist'>
                <div className='exerciselist-path'>
                    <Link to='/' className='exerciselist-link'>
                        <span>Trang chủ </span>
                    </Link>
                    <i className='icon-angle-right'><FaAngleRight /></i>
                    <Link to='/adminexerciselist' className='exerciselist-link'>
                        <span> Quản lý bài luyện tập</span>
                    </Link>
                </div>
                <div className='exerciselist-container'>
                    <h2 className='exerciselist-title'> Danh sách bài luyện tập </h2>
                    <Search placeholder='Nhập tên bài tập cần tìm' className='exerciselist-search' />
                    <h2 className='exerciselist-title1'>Thông tin bài luyện tập</h2>
                    <ExerciseListTable />
                </div>
            </div>
        </AdminLayout>
    )
}
export default AdminExerciseList;

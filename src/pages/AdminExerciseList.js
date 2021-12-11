import React, { useEffect, useState } from "react";
import Search from "../components/Search/index"
import "../assets/styles/AdminExerciseList.css";
import AdminLayout from "../layouts/AdminLayout"
import { FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom"
import ExerciseApi from "../apis/ExerciseApi";
import usersApi from "../apis/usersApi";
import "../components/AdminCourses/CourseList/CourseListTable.css"

function getFormattedDate(date) {
    var start = new Date(date);
    let year = start.getFullYear();
    let month = (1 + start.getMonth()).toString().padStart(2, '0');
    let day = start.getDate().toString().padStart(2, '0');
    return month + '/' + day + '/' + year;
}

function AdminExerciseList() {
    const [data, setExerciseList] = useState([]);
    const [listUsers, setListUsers] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const [search, setSearch] = useState("");

    useEffect(async () => {
        const res = await ExerciseApi.getAllExercise();
        setExerciseList(res.data);
    }, [])

    useEffect(async () => {
        const use = await usersApi.getAllUsers();
        setListUsers(use);
    }, [])
    console.log(listUsers)
    useEffect(() => {
        setFilteredData(data);
    }, [data]);
    useEffect(() => {
        const newData = data.filter((item) => {
            return (
                item.exerciseName.toLowerCase().search(search.toLowerCase()) !== -1 ||
                ((item.id) + '').indexOf(search) !== -1
            );
        });
        setFilteredData(newData);
    }, [search]);

    const listExers = () => {
        if (filteredData.length > 0) {
            return filteredData.map((item, index) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.exerciseName}</td>
                        <td>
                            <p>admin</p>
                        </td>
                        <td>{getFormattedDate(item.createdAt)}</td>
                        <td>{getFormattedDate(item.updatedAt)}</td>
                        <td>
                            <Link to='/'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
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
                    <Search placeholder='Nhập tên bài tập cần tìm' className='exerciselist-search' value={search}
                        onChange={setSearch} />
                    <h2 className='exerciselist-title1'>Thông tin bài luyện tập</h2>
                    <div className="listtable-container">
                        <table className="listtable">
                            <thead className="listtable-header">
                                <tr className="listtable-row">
                                    <th>ID</th>
                                    <th>Tên bài luyện tập</th>
                                    <th>Tác giả</th>
                                    <th>Ngày tạo</th>
                                    <th>Update</th>
                                    <th>Xem</th>
                                </tr>
                            </thead>

                            <tbody className="listtable-body">
                                {listExers()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
export default AdminExerciseList;

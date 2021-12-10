import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExerciseApi from "../../../apis/ExerciseApi";
import "../../AdminCourses/CourseList/CourseListTable.css"

function ExerciseListTable() {
    const [data, setListExercise] = useState([]);
    useEffect(async () => {
        const res = await ExerciseApi.getAllExercise();
        setListExercise(res.data);
    }, [])
    const listExercises = () => {
        if (data.length > 0) {
            return data.map((item, index) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.exerciseName}</td>
                        <td>
                            <p>vietcv</p>
                        </td>
                        <td>{item.createdAt}</td>
                        <td>{item.updatedAt}</td>
                        <td>
                            <Link to='./'>
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
            return <h2>Loading..</h2>
        }
    }
    return (
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
                    {listExercises()}
                </tbody>
            </table>
        </div>
    )
}

export default ExerciseListTable;
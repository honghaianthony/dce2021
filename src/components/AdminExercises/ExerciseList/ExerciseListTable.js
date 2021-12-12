import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExerciseApi from "../../../apis/ExerciseApi";
import "../../AdminCourses/CourseList/CourseListTable.css";
import { toast } from "react-toastify";

function getFormattedDate(date) {
  return new Date(date).toLocaleString();
}

function ExerciseListTable() {
  const [data, setListExercise] = useState([]);
  useEffect(async () => {
    const res = await ExerciseApi.getAllExercise();
    setListExercise(res.data);
  }, []);
  const listExercises = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <tr>
            <td>{item.id}</td>
            <td>{item.exerciseName}</td>
            <td>
              <p>khuongduy17</p>
            </td>
            {/* <td>{getFormattedDate(item.createdAt)}</td> */}
            <td>{getFormattedDate(item.updatedAt)}</td>
            <td>
              <Link to="/">
                <button className="view-btn">Xem chi tiết</button>
              </Link>
            </td>
            <td>
              <button
                className="view-btn view-btn-delete"
                onClick={async () => {
                  deleteExercise(item.id);
                }}
              >
                Xóa
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return <h2>Loading..</h2>;
    }
  };
  const deleteExercise = async (id) => {
    const res = await ExerciseApi.deleteExercise(id);
    if (res.errCode === 0) {
      toast.success("Xóa thành công");
    } else {
      toast.error("Lỗi!!!");
    }
  };
  return (
    <div className="listtable-container">
      <table className="listtable">
        <thead className="listtable-header">
          <tr className="listtable-row">
            <th>ID</th>
            <th>Tên bài luyện tập</th>
            <th>Tác giả</th>
            {/* <th>Ngày tạo</th> */}
            <th>Chỉnh sửa cuối</th>
            <th>Xem</th>
            <th>Xóa</th>
          </tr>
        </thead>

        <tbody className="listtable-body">{listExercises()}</tbody>
      </table>
    </div>
  );
}

export default ExerciseListTable;

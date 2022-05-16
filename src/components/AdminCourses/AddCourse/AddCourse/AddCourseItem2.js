import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LessonApi from "../../../../apis/LessonApi";
import "./AddCourseItem2.css";
import { toast } from "react-toastify";

function AddCourseItem2(data) {
  console.log(data);
  //   const { lessonId } = useParams();
  // const [dataDelete, deleteData] = useState();
  //   const [data, setDataLesson] = useState(null)
  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await LessonApi.deleteLessonById(data.id);
    console.log(res);
    // deleteData(res);
    if (res) {
      toast.success("Xóa thành công");
      window.location.reload(false);
    } else {
      toast.error("Xóa thất bại");
    }

    console.log(res);
  };
  // useEffect(async () => {
  //     const res = await LessonApi.getLessonById(data.id);
  //     setDataCourse(res);
  //   }, [courseId]);
  return (
    <div className="AddCourseItem2_container">
      <div className="Item2_container">
        <div className="AddCourseItem2_left">
          <div className="btn_edit_AddCourseItem">
            <Link to={`/adminUpdateLesson/${data.id}`}>
              <button type="button">
                <i class="fas fa-pencil-alt "></i>
              </button>
            </Link>
          </div>
          <div className="Name_course_AddCourseItem2">
            <span>{data.name}</span>
          </div>
        </div>
        <div className="AddCourseItem2_right">
          <div className="btn_delete_AddCourseItem2">
            <button type="button" onClick={handleDelete}>
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourseItem2;

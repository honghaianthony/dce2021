import React from "react";
import { Fragment } from "react";
import "./AddCourseItem.css";
function AddCourseItem(data) {
  // const {item,handleDeleteClick} = props
  // const handleDelete=(id) => {
  //     if(handleDeleteClick) {
  //         handleDeleteClick(id);
  //     }
  // };

  return (
    <div className="AddCourseItem_container">
      <div className="Item_container">
        <div className="AddCourseItem_left">
          <div className="btn_edit_AddCourseItem">
            <button type="button">
              <i class="fas fa-pencil-alt "></i>
            </button>
          </div>
          <div className="Name_course_AddCourseItem">
            <span>
              Bài {data.id}: {data.name}
            </span>
          </div>
        </div>
        <div className="AddCourseItem_right">
          <div className="btn_delete_AddCourseItem">
            <button type="button">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourseItem;

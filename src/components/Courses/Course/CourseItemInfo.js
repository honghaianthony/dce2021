import React from "react";
import { Link } from "react-router-dom";
import "./CourseItemInfo.css";
function CourseItemInfo(CouseItem) {
  return (
    <div className="CourseItemInfo__Container">
      <Link to={CouseItem.path}>
        <div className="btnCourseItemInfo__Container">
          <button className="btn-CourseItemInfo">{CouseItem.title}</button>
        </div>
      </Link>
      <div className="CourseIntemInfo__Decription__Container">
        <p className="CourseItemInfo__Decription">{CouseItem.decription}</p>
      </div>
    </div>
  );
}

export default CourseItemInfo;

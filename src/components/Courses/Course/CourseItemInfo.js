import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CourseItemInfo.css";
import usersApi from "../../../apis/usersApi";

function CourseItemInfo(CouseItem) {
  const [isRegister, setIsRegister] = useState(false);

  useEffect(async () => {
    const res = await usersApi.getUserLesson(CouseItem.id);
    if (!res) {
      setIsRegister(true);
    }
  }, []);

  const handleRegisterLesson = async () => {
    if (isRegister) {
      const body = {
        lessonId: CouseItem.id,
        code: "",
        isCompleted: false,
      };
      const suc = await usersApi.registerLesson(body);
    }
  };
  return (
    <div className="CourseItemInfo__Container" onClick={handleRegisterLesson}>
      <Link to={CouseItem.path} classname="link_CourseIteminfo">
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

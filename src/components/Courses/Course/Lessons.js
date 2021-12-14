import React, { useState, useEffect } from "react";
import "./Lessons.css";
import CourseItemInfo from "./CourseItemInfo";
import LessonApi from "../../../apis/LessonApi";

function ListCourse(props) {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const res = await LessonApi.getAllLesson(props.courseId);
    setData(res);
  }, []);

  return (
    <div className="ListCourse__Container">
      {props.isReg && (
        <>
          {data.map((CourseItem) => (
            <CourseItemInfo
              className="CourseItemInfo"
              key={CourseItem.id}
              id={CourseItem.id}
              title={CourseItem.lessonName}
              decription={CourseItem.description}
              path={`/lesson/${CourseItem.id}`}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default ListCourse;

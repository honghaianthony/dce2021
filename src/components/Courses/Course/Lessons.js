import React, { useState, useEffect } from "react";
import "./Lessons.css";
import CourseItemInfo from "./CourseItemInfo";
import LessonApi from "../../../apis/LessonApi";

function ListCourse(props) {
    console.log(props);
    const [data, setData] = useState([]);
    useEffect(async () => {
        const res = await LessonApi.getAllLesson(props.courseId);
        console.log(res);
        setData(res.data);
    }, []);

    console.log(data);

    return (
        <div className="ListCourse__Container">
            {props?.isReg && (
                <>
                    {data?.map((CourseItem) => (
                        <CourseItemInfo
                            className="CourseItemInfo"
                            key={CourseItem._id}
                            _id={CourseItem._id}
                            title={CourseItem.lessonName}
                            description={CourseItem.description}
                            path={`/lesson/${CourseItem._id}`}
                        />
                    ))}
                </>
            )}
        </div>
    );
}

export default ListCourse;

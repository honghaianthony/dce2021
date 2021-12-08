import React from 'react'
import './CourseItemInfo.css'
function CourseItemInfo(CouseItem) {
    return (
        <div className="CourseItemInfo__Container">
            <div className="btnCourseItemInfo__Container">
                <button className="btn-CourseItemInfo">{CouseItem.title}</button>
            </div>
            <div className="CourseIntemInfo__Decription__Container">
                <p className="CourseItemInfo__Decription">{CouseItem.decription}</p>
            </div>
        </div>
    )
}

export default CourseItemInfo

import React from 'react'
import './MyCourseInfo.css'
import start from '../assets/images/start.png'
function MyCourseInfo({nameCourse,avatar,nameMember,numStarts,numRates,decription}) {
    return (
        <div className="myCourseInfo__container">
            <div className="top__CourseInfo">
                <h2 className="nameCourse">{nameCourse}</h2>
            </div>
            <div className="center__CourseInfo">
                <div className="couseInfo__user">
                    <div className="courseInfo__Avatar">
                        <img className="courseInfo__AvatarImg" src={avatar} alt="Ảnh đại diện" />
                    </div>
                    <div className="courseInfo_NameMemeber">
                        <span>{nameMember}</span>
                    </div>
                </div>
                <div className="courseInfo__StartRates">
                    <div className="start__img">
                        <img src={start} alt="ngôi sao" />
                    </div>
                    <div className="courseInfo__NumStart">
                        <span>{numStarts} sao ({numRates} đánh giá)</span>
                    </div>
                </div>
            </div>
            <div className="bottom_CourseInfo">
                <span>{decription}</span>
            </div>
        </div>
    )
}

export default MyCourseInfo

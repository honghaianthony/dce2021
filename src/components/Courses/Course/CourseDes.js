import React from 'react'
import './CourseDes.css'
import book from '../../../assets/images/book.png'
import clock from '../../../assets/images/clock.png'
import user from '../../../assets/images/user.png'
function CourseDes({numHours,numPeople}) {
    
    return (
        <div className="myCourseInfoDecription__Container">
            <div className="myCourseInfoDecription__Top">
                <h2>Thông Tin</h2>
            </div>
            <div className="myCourseInfoDecription__center">
                <div className="myCourseInfoDecriptionInfo">
                    <div className="myCourseInfoDecriptionInfoTop">
                        <div className="myCourseInfoDecriptionInfo__img">
                            <img src={clock} alt="đồng hồ" />
                        </div>
                        <div className="myCourseInfoDecriptionInfo__title">
                            <span>Thời Gian</span>
                        </div>
                        <div className="myCourseInfoDecriptionInfo__titleRight">
                            <span>{numHours} Giờ</span>
                        </div>
                    </div>
                    <div className="myCourseInfoDecriptionInfoCenter">
                        <div className="myCourseInfoDecriptionInfo__img">
                            <img src={book} alt="bài học" />
                        </div>
                        <div className="myCourseInfoDecriptionInfo__title">
                            <span>Số Bài Học</span>
                        </div>
                        <div className="myCourseInfoDecriptionInfo__titleRight">
                            <span>6 Bài</span>
                        </div>
                    </div>
                    <div className="myCourseInfoDecriptionInfoBottom">
                        <div className="myCourseInfoDecriptionInfo__img">
                            <img src={user} alt="user" />
                        </div>
                        <div className="myCourseInfoDecriptionInfo__title">
                            <span>50 Người</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDes

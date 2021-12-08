import React from 'react'
import "../assets/styles/AdminAddCourse.css";
import Navigation from '../components/Navigation';
function AdminAddCourse() {
    return (
        <div className="AdminAddCourse">
            <Navigation />
            <div className="top_decription_link">
                <h2>Trang chủ - Quản lý khóa học</h2>
            </div>
            <div className="Container_____AdminAdCourse">
                <div className="center_AdminAddCourse__container">
                    <div className="center_menu_AdminAddCourse">
                        <p>Hello</p>
                    </div>
                    <div className="center_content_AdminAddCourse">
                        <div className="top_decription_centercontent">
                            <p>Tạo khóa học mới</p>
                        </div>
                        <div className="middle_decription_centercontent">
                            <div className="InputName_AddCourse">
                                <form action="">
                                    <input type="text" name="id" id="idCourse" placeholder="Nhập tên khóa học mới" />
                                </form>
                            </div>
                            <div className="InputDescription_AddCourse">
                                <form>
                                    <textarea name="description" id="decriptionCourse" placeholder="Nhập mô tả"></textarea>
                                </form>
                            </div>
                            <div className="InputTime_AddCourse">
                            <form>
                                    <textarea name="time" id="timeCourse" placeholder="Nhập thời gian để hoàn thành khóa học"></textarea>
                                </form>
                            </div>
                        </div>
                        <div className="btn_Submit_AdminAddCourse">
                            <button type="submit">
                                    Tiếp tục
                            </button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default AdminAddCourse

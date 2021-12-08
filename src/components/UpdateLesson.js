import './UpdateLesson.css';
import react from 'react';
function UpdateLesson()
{
    return(
        <div className="UpdateLesson-container">
            <div className="UpdateLesson-main">
                <div className="UpdateLesson-left"></div>
                <div className="UpdateLesson-right">
                    <div className="UpdateLesson-right-title">
                        <p>Chỉnh sửa bài học</p>
                    </div>
                    <div className="row-updateLesson">
                        <div className="form-search-updateLesson">
                            <form>
                                <label className="uplesson-label" for="idLesson">ID bài học</label>
                                <input type="text" name="id" id="idLesson" placeholder="Nhập ID bài học cần sửa"/>
                                <div className="button-UpdateLesson">
                                    <input type="submit" className="button-search-updateLesson" value="tìm" />
                                </div>                                  
                            </form>
                        </div>                       
                    </div>
                    <div className="row-updateLesson">
                    <div class="form-update-updateLesson">
                            <p>Nội dung bài học</p>
                            <form >
                                <div className="row-updateLesson">
                                    <label className="uplesson-label" for="nameLesson">Tên bài tập </label>
                                    <input type="text" name="name" id="nameLesson" value="Tên bài học hiện tại"/>
                                </div>
                                <div className="row-updateLesson">
                                    <label  className="uplesson-label" for="desLesson">Mô tả bài học</label>
                                    <textarea type="text" name="description" id="desLesson" value="Tên bài học hiện tại"/>
                                </div>
                                <div className="row-updateLesson">
                                    <label className="uplesson-label" for="contentLesson">Nội dung</label>
                                    <textarea type="text" name="content" id="contentLesson" value="Nội dung học hiện tại"/>
                                </div>
                                <div className="row-updateLesson">
                                    <h2>Kết Quả Mong Muốn</h2>
                                    <label className="uplesson-label" for="testLesson">Testcase</label>
                                    <div className="in-out-lesson">
                                        <textarea type="text" name="input" id="testLesson" value="input bài học hiện tại"/>
                                        <textarea type="text" name="output" id="testLesson" value="input bài học hiện tại"/>
                                    </div>    
                                </div>
                                <div className="row-updateLesson">
                                    <h3 className="add-test-case"><i class="fas fa-plus"></i>Thêm testcase mới</h3>  
                                    <label className="uplesson-label" for="testLesson">Testcase</label>
                                    <div className="in-out-lesson">
                                        <textarea type="text" name="input" id="testLesson" placeholder="Nhập input "/>
                                        <textarea type="text" name="output" id="testLesson" placeholder="Nhập output"/>
                                    </div> 
                                </div>
                                <div className="row-updateLesson">
                                <div className="button-UpdateLesson">
                                    <input type="submit" className="button-update-updateLesson" value="Cập Nhật" />
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default UpdateLesson;
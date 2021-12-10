import './UpdateLesson.css';
import react from 'react';
import { useState } from 'react';
import TestCase from '../../../AdminExercises/AddExercise/AddExercise/TestCase.js'
function UpdateLesson()
{
    const [addShow,setAddShow] = useState("show");
    const[countTestcase,setSountTestcase]=useState();
    const arrTestCase=[];
    const handleAdd = () =>
    {       
        setAddShow(addShow === "show" ? "hide" : "show");
    }
    for(var i=0;i<countTestcase;i++)
        {
            arrTestCase.push(i+1);
        }   
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
                                    <TestCase/>  
                                </div>
                                <div className="row-updateLesson">
                                    <h3 className="add-test-case" onClick={handleAdd}><i class="fas fa-plus"></i>Thêm testcase mới</h3>  
                                    <input type="text" onChange={(event)=>setSountTestcase(event.target.value)} id ="input-count-testcase" className={addShow === "show" ? "hide":"show"} placeholder="Nhập số lượng testcase"/>
                                    <div className="add-testcase">                                 
                                    {arrTestCase.map((testCaseIndex) =>(
                                           <TestCase
                                                id= {testCaseIndex}
                                                key={testCaseIndex}
                                           />
                                       )                                        
                                        )}
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
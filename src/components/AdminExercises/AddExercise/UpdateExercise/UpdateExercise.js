import './UpdateExercise.css';
import react from 'react';
import {getAllCourses} from '../apis/coursesApi'
import { useEffect,useState } from 'react';


function UpdateExercise()
{
   /* const handleSubmit =(e)=>{
        e.preventDefault();

    }
    const [data,setData]=useState([]);
    useEffect(async ()=>{
        const rep = await getAllCourses();
        setData(rep);
    },[])*/
    return(
        <div className="UpdateExercise-container">
            <div className="UpdateExercise-main">
                <div className="UpdateExercise-left"></div>
                <div className="UpdateExercise-right">
                    <div className="UpdateExercise-right-title">
                        <p>Chỉnh sửa bài luyện tập</p>
                    </div>
                    <div className="row-updateExercise">
                        <div className="form-search-updateExercise">
                            <form action="./chonay de ham tim " >
                                <label className="upExercise-label" for="idExercise">ID bài luyện tập</label>
                                <input type="text" name="id" id="idExercise" placeholder="Nhập ID bài luyện tập cần sửa"/>
                                <div className="button-UpdateExercise">
                                    <input type="submit" className="button-search-updateExercise" value="tìm" />
                                </div>  
                            </form>
                        </div>        
                    </div>
                    <div className="row-updateExercise">
                    <div class="form-update-updateExercise">
                            <p>Nội dung bài luyện tập</p>
                            <form >
                                <div className="row-updateExercise">
                                    <label className="upExercise-label" for="nameExercise">Tên bài luyện tập </label>
                                    <input type="text" name="name" id="nameExercise" value="Tên bài luyện tập hiện tại"/>
                                </div>
                                <div className="row-updateExercise">
                                    <label className="upExercise-label" for="nameExercise">Level</label>
                                    <select name="level" id="levelExercise">
                                        <option value="level">Đơn giản</option>
                                        <option value="level">Trung bình</option>
                                    </select>
                                    
                                </div>
                                <div className="row-updateExercise">
                                    <label  className="uplesson-label" for="desExercise">Mô tả bài luyện tập</label>
                                    <textarea type="text" name="description" id="desExercise" value="Mô tả bài luyện tập hiện tại"/>
                                </div>
                                <div className="row-updateExercise">
                                    <label className="upExercise-label" for="contentExercise">Nội dung</label>
                                    <textarea type="text" name="content" id="contentExercise" value="Nội dung luyện tập hiện tại"/>
                                </div>
                                <div className="row-updateExercise">
                                    <h2>Kết Quả Mong Muốn</h2>
                                    <label className="upExercise-label" for="testExercise">Testcase</label>
                                    <div className="in-out-Exercise">
                                        <textarea type="text" name="input" id="testExercise" value="input bài luyện tập hiện tại"/>
                                        <textarea type="text" name="output" id="testExercise" value="input bài luyện tập hiện tại"/>
                                    </div>    
                                </div>
                                <div className="row-updateExercise">
                                    <h3 className="add-test-case"><i class="fas fa-plus"></i>Thêm testcase mới</h3>  
                                    <label className="upExercise-label" for="testExercise">Testcase</label>
                                    <div className="in-out-lesson">
                                        <textarea type="text" name="input" id="testExercise" placeholder="Nhập input "/>
                                        <textarea type="text" name="output" id="testExercise" placeholder="Nhập output"/>
                                    </div> 
                                </div>
                                <div className="row-updateExercise">
                                <div className="button-UpdateExercise">
                                    <input type="submit" className="button-update-updateExercise" value="Cập Nhật" />
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
export default UpdateExercise;
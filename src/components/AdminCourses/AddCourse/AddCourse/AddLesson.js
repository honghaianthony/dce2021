import './AddLesson.css';
import react from 'react';
import { useState,useEffect} from 'react';
import TestCase from  './TestCase.js';
function AddLesson()
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
    console.log(countTestcase);
    console.log(arrTestCase);
    return(
        <div className="AddLesson-container">
            <div className="AddLesson-main">
                <div className="AddLesson-left"></div>
                <div className="AddLesson-right">
                    <div className="AddLesson-right-title">
                        <p>Tạo bài học mới</p>
                    </div>
                    
                    <div className="row-AddLesson">
                    <div class="form-add-AddLesson">
                            <form >
                                <div className="row-AddLesson">
                                    <input type="text" name="name" id="nameLesson" placeholder="Nhập tên bài học mới"/>
                                </div>
                            
                                <div className="row-AddLesson">
                                    <textarea type="text" name="content" id="contentLesson" placeholder="Thêm nội dung bài học"/>
                                </div>
                                <div className="row-AddLesson">
                                    <h2>Kết Quả Mong Muốn</h2>
                                    <label className="addLesson-label" for="testLesson">Testcase</label>
                                    <div className="in-out-Lesson">
                                        <textarea type="text" name="input" id="testLesson" placeholder="input bài học hiện tại"/>
                                        <textarea type="text" name="output" id="testLesson" placeholder="input bài học hiện tại"/>
                                    </div>    
                                </div>
                                <div className="row-AddLesson">
                                    <h3 className="add-test-case" onClick={handleAdd} ><i class="fas fa-plus"></i>Thêm testcase mới</h3>  
                                    <input type="text" onChange={(event)=>setSountTestcase(event.target.value)} className={addShow === "show" ? "hide":"show"} placeholder="Nhập số lượng testcase"/>
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
                                <div className="row-AddLesson">
                                    <div className="button-AddLesson">
                                        <input type="submit" className="button-add-AddLesson" value="Thêm" />
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
export default AddLesson;
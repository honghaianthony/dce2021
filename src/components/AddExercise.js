import './AddExercise.css';
import react from 'react';
import { useState,useEffect} from 'react';
import TestCase from  './TestCase.js';
function AddExercise()
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
        <div className="AddExercise-container">
            <div className="AddExercise-main">
                <div className="AddExercise-left"></div>
                <div className="AddExercise-right">
                    <div className="AddExercise-right-title">
                        <p>Tạo bài luyện tập mới</p>
                    </div>
                    
                    <div className="row-AddExercise">
                    <div class="form-add-AddExercise">
                            <form >
                                <div className="row-AddExercise">
                                    <input type="text" name="name" id="nameExercise" placeholder="Nhập tên bài luyện tập mới"/>
                                </div>
                                <div className="row-AddExercise">
                                    <select name="level" id="levelExercise" placeholder="Chọn level">
                                        <option value="level">Đơn giản</option>
                                        <option value="level">Trung bình</option>
                                    </select>  
                                </div>
                                <div className="row-AddExercise">
                                    <textarea type="text" name="content" id="contentExercise" placeholder="Thêm nội dung bài luyện tập"/>
                                </div>
                                <div className="row-AddExercise">
                                    <h2>Kết Quả Mong Muốn</h2>
                                     <TestCase/>   
                                </div>
                                <div className="row-AddExercise">
                                    <h3 className="add-test-case"  onClick={handleAdd}><i class="fas fa-plus"></i>Thêm testcase mới</h3>
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
                                <div className="row-AddExercise">
                                    <div className="button-AddExercise">
                                        <input type="submit" className="button-add-AddExercise" value="Thêm" />
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

export default AddExercise;
  /**/
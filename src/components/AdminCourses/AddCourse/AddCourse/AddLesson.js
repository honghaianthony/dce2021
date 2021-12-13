import './AddLesson.css';
import react from 'react';
import { useState, useEffect } from 'react';
import TestCase from '../../../AdminExercises/AddExercise/AddExercise/TestCase.js'
import LessonApi from '../../../../apis/LessonApi';
import coursesApi from '../../../../apis/coursesApi'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import AdminLayout from '../../../../layouts/AdminLayout';
function AddLesson() {
    const [addShow, setAddShow] = useState("show");
    const [name, setName] = useState("");
    // const [nameTest,setNameTest]=useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const { courseId } = useParams();
    const [data, setData] = useState([]);
    const [data2,setData2]=useState([])
    useEffect(async () => {
        const res = await LessonApi.getLessonByCourseId(courseId);
        setData(res.slice(-1)[0].id)
    }, [courseId])
    console.log(data)
    let history = useHistory();
    // console.log(courseId)
    // const handleTestcase = async (event) => {
    //     event.preventDefault();
    //     const testCase = {
    //         lessonId: data,
    //         input: input,
    //         output: output
    //     }
    //     const res = await LessonApi.createLessonTest(testCase);
    //     if (res) {
    //         toast.success("Thêm test thành công");
    //     } else {
    //         toast.error("Thêm thất bại");
    //     }
    // }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const Lesson = {
            courseId: courseId,
            lessonName: name,
            content: content,
            description: description,
        };
        const res = await LessonApi.createLesson(Lesson).then(history.push(`/adminaddcoursedetail/${courseId}`))
        const testCase = {
            lessonId: data,
            input: input,
            output: output
        }
        console.log(testCase)
        const res2 = await LessonApi.createLessonTest(testCase)
        console.log(res2)
        if (res && res2) {
            toast.success("Thêm thành công");
        } else {
            toast.error("Thêm thất bại");
        }
    };
    const [countTestcase, setSountTestcase] = useState();
    const arrTestCase = [];
    const handleAdd = () => {
        setAddShow(addShow === "show" ? "hide" : "show");
    }
    for (var i = 0; i < countTestcase; i++) {
        arrTestCase.push(i + 1);
    }
    console.log(countTestcase);
    console.log(arrTestCase);
    return (
        <AdminLayout>
        <div className="AddLesson-container">
            <div className="AddLesson-main">
                <div className="AddLesson-left"></div>
                <div className="AddLesson-right">
                    <div className="AddLesson-right-title">
                        <p>Tạo bài học mới</p>
                    </div>

                    <div className="row-AddLesson">
                        <div class="form-add-AddLesson">
                            <form onSubmit={handleSubmit}>
                                <div className="row-AddLesson">
                                    <input type="text" name="name" id="nameLesson" placeholder="Nhập tên bài học mới"
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>
                                <div className="row-AddLesson">
                                    <textarea type="text" name="description" id="desLesson" placeholder="Thêm mô tả bài học"
                                        onChange={(event) => setDescription(event.target.value)}

                                    />
                                </div>
                                <div className="row-AddLesson">
                                    <textarea type="text" name="content" id="contentLesson" placeholder="Thêm nội dung bài học"
                                        onChange={(event) => setContent(event.target.value)}
                                    />
                                </div>
                            <form onSubmit={handleSubmit}>
                                
                                    <div className="row-AddLesson">
                                        <h2>Kết Quả Mong Muốn</h2>
                                        {/* <TestCase2 />    */}
                                        <div className="testcase-option">
                                            <label className="addExercise-label" for="testExercise">Testcase  </label>
                                            {/* <div className="delete-icon">
                                            <p><i class="fas fa-trash-alt"></i>Xóa TestCase</p>
                                        </div> */}
                                        </div>
                                        <div className="in-out-Exercise">
                                            <textarea type="text"
                                                name="input"
                                                id="in-testExercise"
                                                placeholder="input bài học hiện tại"
                                                // value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                            />
                                            <textarea type="text"
                                                name="output"
                                                id="out-testExercise"
                                                placeholder="input bài học hiện tại"
                                                // value={output}
                                                onChange={(e) => setOutput(e.target.value)}
                                            />
                                        </div>
                                    </div>
                            </form>
                                
                                {/* <div className="row-AddLesson">
                                    <h3 className="add-test-case" onClick={handleAdd} ><i class="fas fa-plus"></i>Thêm testcase mới</h3>  
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
                                </div> */}
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
        </AdminLayout>                          
    )
}
export default AddLesson;
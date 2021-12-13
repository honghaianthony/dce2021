import './UpdateLesson.css';
import react from 'react';
import { useState } from 'react';
import TestCase from '../../../AdminExercises/AddExercise/AddExercise/TestCase.js'
import LessonApi from '../../../../apis/LessonApi';
import Adminlayout from '../../../../layouts/AdminLayout'
import { useEffect } from 'react/cjs/react.development';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateLesson()
{
    const [addShow,setAddShow] = useState("show");
    const[countTestcase,setSountTestcase]=useState();
    const arrTestCase=[];
    // const handleAdd = () =>
    // {       
    //     setAddShow(addShow === "show" ? "hide" : "show");
    // }
    // for(var i=0;i<countTestcase;i++)
    //     {
    //         arrTestCase.push(i+1);
    //     }   
    /*Đổ dữ liệu */
    const {lessonId}=useParams();
    const [data, setDataLesson] = useState(null)
    useEffect(async()=>{
        const res=await LessonApi.getLessonById(lessonId)
        setDataLesson(res)
    },[lessonId]);
    const [lessonName,setLessonName]=useState("");
    const [lessonContent,setLessonContent]=useState("");
    const [lessonDescription,setLessonDescription]=useState("");
    const [input,setInput]=useState("")
    const [output,setOutput]=useState("")
    useEffect(async()=>{
        const res=await LessonApi.getLessonById(lessonId)
        const res2=await LessonApi.getAllLessonTestById(lessonId)
        setLessonName(res.lessonName)
        setLessonContent(res.content)
        setLessonDescription(res.description)
        setInput(res2.input)
        setOutput(res2.output)
    },[lessonId])
    /*sửa*/
    // console.log(courseId)
    // const [data2,setData2]=useState({})
    // useEffect(async () => {
    //     const res = await LessonApi.getLessonByCourseId(courseId);
    //     setData2(res.id)
    // }, [courseId])
    // console.log(data2)
    const [idTest,setIdTest]=useState(0)
    useEffect(async()=>{
        const res3=await LessonApi.getLessonTestByLessonId(lessonId)
        setIdTest(res3[0].id)
        console.log(res3[0].id)
    },[lessonId])
    // console.log(idTest)
    const handleChangeDataLesson=async(e)=>{
        e.preventDefault();
        const newLesson={
            id:lessonId,
            content:lessonContent,
            lessonName:lessonName,
            description:lessonDescription
        }
        const res4=await LessonApi.updateLessonById(newLesson)
        const newLessonTest={
            id:idTest,
            lessonId:lessonId,
            input:input,
            output:output
        }
        const res5=await LessonApi.updateLessonTestById(newLessonTest)
        console.log(newLessonTest)
        if (res4&&res5) {
            toast.success("Thêm thành công");
        } else {
            toast.error("Thêm thất bại");
        }
    }
    // console.log(lessonId)
    // const handleChangeDataLesson=async(e)=>{
    //     e.preventDefault();
    //     const newTest={

    //     }
    //     const res=await LessonApi.updateLessonById
    // }
    return(
        <Adminlayout>
        {data===null?(<div className="loader"></div>):(
        <div className="UpdateLesson-container">
            <div className="UpdateLesson-main">
                <div className="UpdateLesson-left"></div>
                <div className="UpdateLesson-right">
                    <div className="UpdateLesson-right-title">
                        <p>Chỉnh sửa bài học</p>
                    </div>
                   
                    <div className="row-updateLesson">
                    <div class="form-update-updateLesson">
                            <p>Nội dung bài học</p>
                            <form onSubmit={handleChangeDataLesson}>
                                <div className="row-updateLesson">
                                    <label className="uplesson-label" for="nameLesson">Tên bài học </label>
                                    <input type="text"
                                     name="name"
                                      id="nameLesson" 
                                      value={lessonName}
                                      onChange={(event)=>setLessonName(event.target.value)}
                                      />
                                </div>
                                <div className="row-updateLesson">
                                    <label  className="uplesson-label" for="desLesson">Mô tả bài học</label>
                                    <textarea type="text"
                                     name="description" 
                                     id="desLesson" 
                                     value={lessonDescription}
                                     onChange={(event)=>setLessonDescription(event.target.value)}
                                     />
                                </div>
                                <div className="row-updateLesson">
                                    <label className="uplesson-label" for="contentLesson">Nội dung</label>
                                    <textarea type="text" 
                                    name="content" 
                                    id="contentLesson"
                                    value={lessonContent}
                                    onChange={(event)=>setLessonContent(event.target.value)}
                                     />
                                </div>
                                <div className="row-updateLesson">
                                    <h2>Kết Quả Mong Muốn</h2>
                                    {/* <TestCase/>   */}
                                </div>
                                {/* <div className="row-updateLesson">
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
                                </div> */}
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
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                            />
                                            <textarea type="text"
                                                name="output"
                                                id="out-testExercise"
                                                placeholder="input bài học hiện tại"
                                                value={output}
                                                onChange={(e) => setOutput(e.target.value)}
                                            />
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
        </div>)}
        </Adminlayout>
    )
}
export default UpdateLesson;
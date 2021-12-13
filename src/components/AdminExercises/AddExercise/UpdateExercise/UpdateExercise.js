import "../UpdateExercise/UpdateExercise.css"
import TestCase  from "../AddExercise/TestCase";
import ExerciseApi from "../../../../apis/ExerciseApi";
// import {getAllCourses} from '../apis/coursesApi'
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "../../../SideBar/index";
import MainLayout from "../../../../layouts/MainLayout"


function UpdateExercise()
{
    const [exer,setExer]=useState();
    const [testCase, setTestCase] = useState([]);
    const {exerciseId} =useParams();
    const [exerName, setExerName] = useState("");
    const [exerContent, setExerContent] = useState("");
    const [exerLevel, setExerLevel] = useState(1);
    const [addShow,setAddShow] = useState("show");
    const[countTestcase,setSountTestcase]=useState();
    const arrTestCase=[];
    useEffect( async () => {
        const res = await ExerciseApi.getAllExerciseById(exerciseId);
        setExer(res);
         const test = await ExerciseApi.getTestCaseByExerciseId(exerciseId);
         setTestCase(test.data);
     }, [exerciseId]);
     console.log(exer);
     console.log(testCase);
     const listTestCase =() =>
     {
         if(testCase.length > 0)
         {
            return testCase.map((item)=>
                {
                    return(
                    <TestCase
                    id= {item.id}
                    key={item.id}
                    input={item.input}
                    output={item.output}
                    />)
                }) 
         }
         else
         {
             return(
                 <>
                    <h2>Không có testcase</h2>
                 </>
             )
         }
     }
    return(
  
        <MainLayout>
        { exer === null ? (<h1>Loading</h1>):(
            <div className="UpdateExercise-container">
            <div className="UpdateExercise-main">
                <div className="UpdateExercise-left">
                <Sidebar/>
                </div>
                <div className="UpdateExercise-right">
                    <div className="UpdateExercise-right-title">
                        <p>Chỉnh sửa bài luyện tập</p>
                    </div>
                    <div className="row-updateExercise">
                    <div class="form-update-updateExercise">
                            <p>Nội dung bài luyện tập</p>
                            <form >
                                <div className="row-updateExercise">
                                    <label className="upExercise-label" for="nameExercise">Tên bài tập</label>
                                    <input type="text" 
                                            name="exerciseName" 
                                            id="nameExercise" 
                                            value={exer.exerciseName}
                                            onChange={(e)=> setExerName(e.target.value)}
                                    />
                                </div>
                                <div className="row-updateExercise">
                                    <label className="upExercise-label" for="nameExercise">Level</label>
                                    <select name="level" 
                                            id="levelExercise"
                                            value={exer.level}
                                            onChange={(e) => setExerLevel(e.target.value)}>
                                        <option name="level">Đơn giản</option>
                                        <option name="level">Trung bình</option>
                                    </select>
                                    
                                </div>
                                <div className="row-updateExercise">
                                    <label className="upExercise-label" for="contentExercise">Content</label>
                                    <textarea type="text" 
                                              name="content" 
                                              id="contentExercise" 
                                              value={exer.content}
                                              onChange={(e)=> setExerContent(e.target.value) }
                                    />
                                </div>
                                <div className="row-updateExercise">
                                    <h2>TestCase</h2>
                                    {listTestCase}
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
        )}
     </MainLayout>  
    )
}
export default UpdateExercise;
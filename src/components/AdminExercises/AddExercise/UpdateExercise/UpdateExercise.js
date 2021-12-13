import "../UpdateExercise/UpdateExercise.css";
import TestCase from "../AddExercise/TestCase";
import ExerciseApi from "../../../../apis/ExerciseApi";
// import {getAllCourses} from '../apis/coursesApi'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "../../../SideBar/index";
import MainLayout from "../../../../layouts/MainLayout";
import { toast } from "react-toastify";

function UpdateExercise() {
    const [exer, setExer] = useState();
    const [testCase, setTestCase] = useState([]);
    const { exerciseId } = useParams();
    const [deleteData, setDeleteData] = useState();
    const [exerName, setExerName] = useState("");
    const [exerContent, setExerContent] = useState("");
    const [exerLevel, setExerLevel] = useState(1);
    const [input, setInput] = useState();
    const [output, setOutput] = useState();
    const [addShow, setAddShow] = useState("show");
    const [countTestcase, setSountTestcase] = useState();
    const arrTestCase = [];
    useEffect(async () => {
        const res = await ExerciseApi.getAllExerciseById(exerciseId);
        setExerName(res.exerciseName);
        setExerLevel(res.level);
        setExerContent(res.content);
        const test = await ExerciseApi.getTestCaseByExerciseId(exerciseId);
    }, [exerciseId]);
    /*update*/
    const handleUpdate = async (e) => {
        e.preventDefault();
        const exercise = {
            id: exerciseId,
            userId: 1,
            exerciseName: exerName,
            content: exerContent,
            level: exerLevel
        }
        const res = await ExerciseApi.updateExercise(exercise);
        if (res) {
            toast.success("Cập nhật thành công");
          } else {
            toast.error("Cập nhật thất bại");
          }
    }
    /*delete*/
    const handleDelete = async (e) => {
        e.preventDefault();
        const res = await ExerciseApi.deleteExercise(exerciseId)
        setDeleteData(res);
        if (res) {
            toast.success("Xóa thành công");
        } else {
            toast.error("Xóa thất bại");
        }
        console.log(res);
    }

    // const listTestCase = () => {
    //     if (testCase.length > 0) {
    //         return testCase.map((item) => {
    //             return (
    //                 <>
    //                     <div className="testcase-option">
    //                         <label className="addExercise-label" for="testExercise">Testcase {item.id} </label>
    //                         <div className="delete-icon">
    //                             <p><i class="fas fa-trash-alt"></i>Xóa TestCase</p>
    //                         </div>
    //                     </div>
    //                     <div className="in-out-Exercise">

    //                         <textarea type="text"
    //                             name="input"
    //                             id="in-testExercise"
    //                             placeholder="input bài học hiện tại"
    //                             value={item.input}
    //                             onChange={(e) => setInput(e.target.value)}
    //                         />
    //                         <textarea type="text"
    //                             name="output"
    //                             id="out-testExercise"
    //                             placeholder="input bài học hiện tại"
    //                             value={item.output}
    //                             onChange={(e) => setOutput(e.target.value)}
    //                         />
    //                     </div>
    //                 </>
    //             );
    //         });
    //     } else {
    //         return (
    //             <>
    //                 <h2>Không có testcase</h2>
    //             </>
    //         );
    //     }
    // };
    return (
        <MainLayout>
            {exer === null ? (
                <h1>Loading</h1>
            ) : (
                <div className="UpdateExercise-container">
                    <div className="UpdateExercise-main">
                        <div className="UpdateExercise-left">
                            <Sidebar />
                        </div>
                        <div className="UpdateExercise-right">
                            <div className="UpdateExercise-right-title">
                                <p>Chỉnh sửa bài luyện tập</p>
                                <div className="btn_delete_container">
                                    <button type="button" onClick={handleDelete}>Xóa</button>
                                </div>
                            </div>

                            <div className="row-updateExercise">
                                <div class="form-update-updateExercise">
                                    <form onSubmit={handleUpdate}>
                                        <div className="row-updateExercise">
                                            <label className="upExercise-label" for="nameExercise">
                                                Tên bài tập
                                            </label>
                                            <input
                                                type="text"
                                                name="exerciseName"
                                                id="nameExercise"
                                                value={exerName}
                                                onChange={(e) => setExerName(e.target.value)}
                                            />
                                        </div>
                                        <div className="row-updateExercise">
                                            <label className="upExercise-label" for="nameExercise">
                                                Level
                                            </label>
                                            <select
                                                name="level"
                                                id="levelExercise"
                                                value={exerLevel}
                                                onChange={(e) => setExerLevel(e.target.value)}
                                            >
                                                <option name="level">Đơn giản</option>
                                                <option name="level">Trung bình</option>
                                            </select>
                                        </div>
                                        <div className="row-updateExercise">
                                            <label className="upExercise-label" for="contentExercise">
                                                Content
                                            </label>
                                            <textarea
                                                type="text"
                                                name="content"
                                                id="contentExercise"
                                                value={exerContent}
                                                onChange={(e) => setExerContent(e.target.value)}
                                            />
                                        </div>
                                        <div className="row-updateExercise">
                                            <h2>TestCase</h2>
                                            <>
                                                <div className="testcase-option">
                                                    <label className="addExercise-label" for="testExercise">Testcase  </label>
                                                    <div className="delete-icon">
                                                        <p><i class="fas fa-trash-alt"></i>Xóa TestCase</p>
                                                    </div>
                                                </div>
                                                <div className="in-out-Exercise">

                                                    <textarea type="text"
                                                        name="input"
                                                        id="in-testExercise"
                                                        placeholder="input bài học hiện tại"
                                                        value={input}
                                                        onChange={(e) => setInput(e.target.value)}
                                                    />
                                                    {/* <textarea type="text"
                                name="output"
                                id="out-testExercise"
                                placeholder="input bài học hiện tại"
                                value={item.output}
                                onChange={(e) => setOutput(e.target.value)} 
                            /> */}
                                                </div>
                                            </>
                                        </div>
                                        <div className="row-updateExercise">
                                            <div className="button-UpdateExercise">
                                                <input
                                                    type="submit"
                                                    className="button-update-updateExercise"
                                                    value="Cập Nhật"
                                                />
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
    );
}
export default UpdateExercise;

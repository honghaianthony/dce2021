import "./AddExercise.css";
import { useState, useEffect } from "react";
import TestCase from "./TestCase.js";
import AdminLayout from "../../../../layouts/AdminLayout";
import ExerciseApi from "../../../../apis/ExerciseApi";
import Sidebar from "../../../SideBar/index";
import MainLayout from "../../../../layouts/MainLayout";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function AddExercise() {
  const [addShow, setAddShow] = useState("show");
  const [countTestcase, setSountTestcase] = useState();
  const [exerName, setExerName] = useState("");
  const [exerContent, setExerContent] = useState("");
  const [exerLevel, setExerLevel] = useState(1);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [exerId, setExerId] = useState("");
  const [inputTestCase, setInputTestCase] = useState("");
  const [outputTesCase, setOutputTestCase] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Exer = {
      userId: 1,
      exerciseName: exerName,
      input: input,
      output: output,
      content: exerContent,
      level: exerLevel,
    };
    const res = await ExerciseApi.createExercise(Exer);
    if (res) {
      toast.success("Thêm thành công");
      history.push("/adminexerciselist");
    } else {
      toast.error("Thêm thất bại");
    }
    console.log(res);
  };

  const handleSubmitTestCase = async (e) => {
    e.preventDefault();
    for (var i = 0; i < countTestcase; i++) {
      const testCase = {
        exerciseId: exerId,
        input: inputTestCase,
        output: outputTesCase,
      };
      const res = await ExerciseApi.createTestCase(testCase);
      if (res) {
        toast.success("Thêm thành công");
      } else {
        toast.error("Thêm thất bại");
      }
    }
  };
  /*api*/
  /*useEffect( async() => {
        const Exer ={
            userId : 1,
            exerciseName:{exerName},
            level:{exerLevel},
            input:{input},
            output:{output},
            content:{exerContent}
        }
        const res = await ExerciseApi.createExercise(Exer)
    }, [])*/
  const arrTestCase = [];
  const handleAdd = () => {
    setAddShow(addShow === "show" ? "hide" : "show");
  };
  for (var i = 0; i < countTestcase; i++) {
    arrTestCase.push(i + 1);
  }
  return (
    <AdminLayout>
      <div className="AddExercise-container">
        <div className="AddExercise-main">
          <div className="AddExercise-left">
            <Sidebar />
          </div>
          <div className="AddExercise-right">
            <div className="exerciselist-path addTestcase-path">
              <Link to="/" className="exerciselist-link ">
                <span>Quản lý bài luyện tập</span>
              </Link>
              <i className="icon-angle-right">
                <FaAngleRight />
              </i>
              <Link to="/adminexerciselist" className="exerciselist-link">
                <span>Thêm bài luyện tập</span>
              </Link>
            </div>
            <div className="AddExercise-right-title title-center">
              <p>Tạo bài luyện tập mới</p>
            </div>

            <div className="row-AddExercise">
              <div class="form-add-AddExercise">
                <form onSubmit={handleSubmit}>
                  <div className="row-AddExercise">
                    <label className="addExercise-label" for="nameExercise">
                      Tên bài tập
                    </label>
                    <input
                      type="text"
                      name="exerName"
                      id="nameExercise"
                      placeholder="Nhập tên bài luyện tập"
                      onChange={(event) => setExerName(event.target.value)}
                    />
                  </div>
                  <div className="row-AddExercise">
                    <label className="addExercise-label" for="levelExercise">
                      Level
                    </label>
                    <select
                      name="level"
                      id="levelExercise"
                      placeholder="Chọn level"
                      onChange={(event) => setExerLevel(event.target.value)}
                    >
                      <option value="1">Đơn giản</option>
                      <option value="2">Trung bình</option>
                    </select>
                  </div>
                  <div className="row-AddExercise">
                    <label className="addExercise-label" for="contentExercise">
                      Content
                    </label>
                    <textarea
                      type="text"
                      name="content"
                      id="contentExercise"
                      placeholder="Thêm nội dung bài luyện tập"
                      onChange={(event) => setExerContent(event.target.value)}
                    />
                  </div>
                  {/* <div className="row-AddExercise">
                    <h2>Kết Quả Mong Muốn</h2>
                    <TestCase
                        handleChangeInput={setInput}
                        
                        handleChangeOutput={setOutput}
                    />
                  </div>                  */}
                  <div className="row-AddExercise">
                    <div className="button-AddExercise">
                      <input
                        type="submit"
                        className="button-add-AddExercise"
                        value="Thêm"
                      />
                    </div>
                  </div>
                </form>
                {/* <div className="row-AddExercise">
                    <h3 className="add-test-case" onClick={handleAdd}>
                      <i class="fas fa-plus"></i>Thêm testcase mới
                    </h3>
                    <input
                      id="input-count-testcase"
                      type="text"
                      onChange={(event) => setSountTestcase(event.target.value)}
                      className={addShow === "show" ? "hide" : "show"}
                      placeholder="Nhập số lượng testcase"
                    />
                    <div className="add-testcase">
                            <form onSubmit={handleSubmitTestCase}> 
                              <input
                                  id="input-count-testcase"
                                  className={addShow === "show" ? "hide" : "show"}
                                  type="text"
                                  name="exerciseId"
                                  placeholder="Nhập id bài luyện tập"
                                  onChange={(event) => setExerId(event.target.value)}  
                              />
                              {arrTestCase.map((testCaseIndex) => (
                              <>
                              <TestCase id={testCaseIndex} 
                                        key={testCaseIndex} 
                                        handleChangeInput={setInputTestCase}
                                        handleChangeOutput={setOutputTestCase}
                              />
                              </>
                            ))}
                              <div className="button-AddExercise">                     
                                  <input
                                    type="submit"
                                    className="button-add-AddExercise"
                                    value="Thêm Testcase"
                                  />
                                </div>  
                            </form>
                    </div>  
                   </div>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AddExercise;
/*<>
                      <div className="testcase-option">
                        <label className="addExercise-label" for="testExercise">
                          Testcase
                        </label>
                        <div className="delete-icon">
                          <p>
                            <i class="fas fa-trash-alt"></i>Xóa TestCase
                          </p>
                        </div>
                      </div>
                      <div className="in-out-Exercise">
                        <textarea
                          type="text"
                          name="input"
                          id="in-testExercise"
                          placeholder="input bài học hiện tại"
                          onChange={(event) => setInput(event.target.value)}
                        />
                        <textarea
                          type="text"
                          name="output"
                          id="out-testExercise"
                          placeholder="input bài học hiện tại"
                          onChange={(event) => setOutput(event.target.value)}
                        />
                      </div>
                    </>*/

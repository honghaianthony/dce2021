import "./AddTestCase.css";
import { useState, useEffect } from "react";
import TestCase from "./TestCase.js";
import ExerciseApi from "../../../../apis/ExerciseApi";
import Sidebar from "../../../SideBar/index";
import MainLayout from "../../../../layouts/MainLayout";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
function AddTestCase() {
  const [addShow, setAddShow] = useState("show");
  const [countTestcase, setSountTestcase] = useState();
  const [exerId, setExerId] = useState("");
  const [inputTestCase, setInputTestCase] = useState("");
  const [outputTesCase, setOutputTestCase] = useState("");
  const [listExercise, setListExercise] = useState([]);
  useEffect(async () => {
    const res = await ExerciseApi.getAllExercise();
    setListExercise(res.data);
  }, []);

  const handleSubmitTestCase = async (e) => {
    e.preventDefault();

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
    console.log(res);
  };
  const arrTestCase = [];
  const handleAdd = () => {
    setAddShow(addShow === "show" ? "hide" : "show");
  };
  for (var i = 0; i < 1; i++) {
    arrTestCase.push(i + 1);
  }
  return (
    <MainLayout>
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
                <span>Thêm testcase</span>
              </Link>
            </div>
            <div className="AddExercise-right-title">
              <p>Tạo TestCase mới</p>
            </div>
            <div className="row-AddExercise">
              <form onSubmit={handleSubmitTestCase}>
                <div className="row-AddExercise">
                  <label id="add-testcase-label" for="nameExercise">
                  <i class="fas fa-check"></i>  Chọn bài tập muốn tạo TestCase
                  </label>
                  <select
                    name="id"
                    id="nameExercise"
                    onChange={(event) => setExerId(event.target.value)}
                  >
                    {listExercise.map((exercise) => {
                      return (
                        <option value={exercise.id}>
                          {exercise.exerciseName}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="row-AddExercise">
                  <h3 className="add-new-test-case" >
                  <i class="fas fa-pencil-alt"></i>Nhập thông tin Testcase
                  </h3>
                  <div className="add-testcase">
                    {arrTestCase.map((testCaseIndex) => (
                      <>
                        <TestCase
                          key={testCaseIndex}
                          id={testCaseIndex}
                          handleChangeInput={setInputTestCase}
                          handleChangeOutput={setOutputTestCase}
                        />
                      </>
                    ))}
                    <div className="button-AddExercise">
                      <div className="button-AddExercise">
                        <input
                          type="submit"
                          className="button-add-AddExercise btn-add-testcase"
                          value="Thêm Testcase"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
export default AddTestCase;

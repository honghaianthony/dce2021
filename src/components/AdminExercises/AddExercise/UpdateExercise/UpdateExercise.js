import "../UpdateExercise/UpdateExercise.css";
import ExerciseApi from "../../../../apis/ExerciseApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../SideBar/index";
import MainLayout from "../../../../layouts/MainLayout";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function UpdateExercise() {
  const [exer, setExer] = useState();
  const [testCase, setTestCase] = useState([]);
  const { exerciseId } = useParams();
  const [exerName, setExerName] = useState("");
  const [exerContent, setExerContent] = useState("");
  const [exerLevel, setExerLevel] = useState(1);
  const history = useHistory();
  useEffect(async () => {
    const res = await ExerciseApi.getAllExerciseById(exerciseId);
    setExerName(res.exerciseName);
    setExerLevel(res.level);
    setExerContent(res.content);
    if (!res) {
      return <h1>Không tìm thấy</h1>;
    }
  }, []);
  useEffect(async () => {
    const res = await ExerciseApi.getTestCaseByExerciseId(exerciseId);
    setTestCase(res);
  }, []);
  /*update*/
  const handleUpdate = async (e) => {
    const exercise = {
      id: exerciseId,
      userId: 1,
      exerciseName: exerName,
      content: exerContent,
      level: exerLevel,
    };
    const res = await ExerciseApi.updateExercise(exercise);
    if (res) {
      toast.success("Cập nhật thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
      history.push("/adminexerciselist");
    } else {
      toast.error("Cập nhật thất bại", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleInputChange = (index, input) => {
    const list = [...testCase];
    list[index] = { ...list[index], input };
    setTestCase(list);
  };
  const handleOutputChange = (index, output) => {
    const list = [...testCase];
    list[index] = { ...list[index], output };
    setTestCase(list);
  };
  const handleUpdateTestCase = async (e, input, output, id) => {
    e.preventDefault();
    const reqData = {
      id,
      exerciseId,
      input,
      output,
    };
    await ExerciseApi.updateTestCase(reqData);
    toast.success("Cập nhật testcase thành công", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleDeleteTestCase = async (e, idTestCase) => {
    e.preventDefault();
    const isCompleted = await ExerciseApi.deleteExerciseTest(idTestCase);
    if (isCompleted) {
      toast.success("Xóa testcase thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Xóa testcase thất bại", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    const res = await ExerciseApi.getTestCaseByExerciseId(exerciseId);
    setTestCase(res);
  };

  /*delete*/
  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await ExerciseApi.deleteExercise(exerciseId);
    if (res) {
      toast.success("Xóa thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
      history.push("/adminexerciselist");
    } else {
      toast.error("Xóa thất bại", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

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
              <div className="exerciselist-path addTestcase-path">
                <Link to="/adminexerciselist" className="exerciselist-link ">
                  <span>Quản lý bài luyện tập</span>
                </Link>
                <i className="icon-angle-right">
                  <FaAngleRight />
                </i>
                <Link to="/adminexerciselist" className="exerciselist-link">
                  <span>Chỉnh sửa bài luyện tập</span>
                </Link>
              </div>
              <div className="UpdateExercise-right-title">
                <p>Chỉnh sửa bài luyện tập</p>

                <div>
                  <button className="btn-update" onClick={handleUpdate}>
                    Cập nhật nội dung
                  </button>
                  <button className="btn-delete" onClick={handleDelete}>
                    Xóa bài
                  </button>
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
                        Cấp độ
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
                        Nội dung
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
                        {testCase.map((item, index) => {
                          return (
                            <div key={index} className="in-out-Exercise">
                              <textarea
                                type="text"
                                name="input"
                                id="in-testExercise"
                                value={item.input}
                                onChange={(e) =>
                                  handleInputChange(index, e.target.value)
                                }
                              />
                              <textarea
                                type="text"
                                name="output"
                                id="out-testExercise"
                                value={item.output}
                                onChange={(e) =>
                                  handleOutputChange(index, e.target.value)
                                }
                              />
                              <div className="flex-ue">
                                <button
                                  className="btn-update"
                                  onClick={(e) =>
                                    handleUpdateTestCase(
                                      e,
                                      item.input,
                                      item.output,
                                      item._id
                                    )
                                  }
                                >
                                  Cập nhật
                                </button>
                                <button
                                  className="btn-delete"
                                  onClick={(e) =>
                                    handleDeleteTestCase(e, item._id)
                                  }
                                >
                                  Xóa
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </>
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

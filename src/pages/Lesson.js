import React from "react";
import { useCallback, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/styles/Lesson.css";
import TodoNoted from "../components/Lesson/TodoNoted";
import LessonApi from "../apis/LessonApi";
// const TODO_APP_STORAGE_KEY = "TODO_APP";
function Lesson() {
  const [data, setData] = useState(null);
  const { lessonId } = useParams();
  useEffect(async () => {
    const res = await LessonApi.getLessonById(lessonId);
    setData(res);
  }, []);

  const [display, setdisplay] = useState("off");
  const setcomment = () => {
    setdisplay(display === "off" ? "on" : "off");
  };
  const [display2, setdisplay2] = useState("off");
  const handledisplay2 = () => {
    setdisplay2(display2 === "off" ? "on" : "off");
  };
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const onAddBtnClick = useCallback(
    (e) => {
      // them text input vao danh sach todoList
      setTodoList([{ name: textInput }, ...todoList]);

      setTextInput("");
    },
    [textInput, todoList]
  );
  //   useEffect(() => {
  //     const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
  //     if (storagedTodoList) {
  //       setTodoList(JSON.parse(storagedTodoList));
  //     }
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  //   }, [todoList]);
  return (
    <>
      {data ? (
        <>
          <div className="exercise-container">
            <div className="exercise-name">
              <Link to="/">
                <i class="fas fa-angle-left"></i>
              </Link>
              <p>{data.lessonName}</p>
            </div>
            <div className="exercise-main">
              <div className={display2 === "on" ? "content-off" : "content"}>
                <div className="discuss">
                  <button
                    type="button"
                    className={
                      display === "on"
                        ? "discuss-icon-on-lesson"
                        : "discuss-icon-lesson"
                    }
                    onClick={setcomment}
                  >
                    <i class="fab fa-rocketchat"></i>
                  </button>
                  <button
                    type="button"
                    className={
                      display2 === "on"
                        ? "discuss-icon-on-lesson"
                        : "discuss-icon-lesson"
                    }
                    onClick={handledisplay2}
                  >
                    <i class="far fa-clipboard"></i>
                  </button>
                </div>
                <div className="content-and-comment">
                  {/* content */}
                  <div
                    className={
                      display === "on" ? "main-content-off" : "main-content"
                    }
                  >
                    <div className="content-Lesson">{data.content}</div>
                  </div>

                  {/* comment */}
                  <div
                    className={
                      display === "on"
                        ? "comment-section-on"
                        : "comment-section-off"
                    }
                  >
                    <div className="number-comments">
                      <p>2 bình luận</p>
                    </div>
                    <div className="write-comment">
                      <div className="comment-icon">
                        <i class="fas fa-user-circle"></i>
                      </div>
                      <div className="comment-and-button">
                        <div className="place-write-comment">
                          <textarea
                            id="place-write-comment"
                            name="place-write-comment"
                            placeholder="Viết bình luận của bạn"
                          ></textarea>
                        </div>

                        <button type="button" className="post-comment-btn">
                          Đăng
                        </button>
                      </div>
                    </div>
                    <div className="others-comment">
                      <div className="other-commnet">
                        <div className="user-comment">
                          <div className="comment-icon">
                            <i class="fas fa-user-circle"></i>
                          </div>
                          <div className="user-infor">
                            <a href="">Nguyễn Văn A</a>
                            <p>20-11-2021</p>
                          </div>
                        </div>
                        <div className="content-of-comment">
                          <p>
                            Sao bài này lại mức độ trung bình nhỉ? Chỉ cần làm
                            vài phép toán ra nháp rồi suy ra là ta có công thức
                            chung rồi mà
                          </p>
                        </div>
                      </div>
                      <div className="other-commnet">
                        <div className="user-comment">
                          <div className="comment-icon">
                            <i class="fas fa-user-circle"></i>
                          </div>
                          <div className="user-infor">
                            <a href="">Nguyễn Văn A</a>
                            <p>20-11-2021</p>
                          </div>
                        </div>
                        <div className="content-of-comment">
                          <p>
                            Sao bài này lại mức độ trung bình nhỉ? Chỉ cần làm
                            vài phép toán ra nháp rồi suy ra là ta có công thức
                            chung rồi mà
                          </p>
                        </div>
                      </div>
                      <div className="other-commnet">
                        <div className="user-comment">
                          <div className="comment-icon">
                            <i class="fas fa-user-circle"></i>
                          </div>
                          <div className="user-infor">
                            <a href="">Nguyễn Văn A</a>
                            <p>20-11-2021</p>
                          </div>
                        </div>
                        <div className="content-of-comment">
                          <p>
                            Sao bài này lại mức độ trung bình nhỉ? Chỉ cần làm
                            vài phép toán ra nháp rồi suy ra là ta có công thức
                            chung rồi mà
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={display2 === "on" ? "code-off" : "code"}>
                <div className="intro">
                  <p className="intro-content">Code in here</p>
                  <button type="button" className="refresh-btn">
                    Làm mới
                  </button>
                </div>
                <div className="place-code">
                  <textarea id="code-of-exser" name="code-of-exser"></textarea>
                </div>
                <div className="testcase-lesson">
                  <div className="testcase-header-lesson">
                    <p>TEST CASE</p>
                  </div>
                  <div className="testcase-content-lesson">
                    <div className="testcase-number-lesson">
                      <ul>
                        <li>Kiểm thử 1</li>
                        <li>Kiểm thử 2</li>
                        <li>Kiểm thử 2</li>
                      </ul>
                    </div>
                    <div className="testcase-display-lesson">
                      <p>Đầu vào:</p>
                      <p>Đầu ra:</p>
                      <p>Đầu ra mong muốn:</p>
                      <p>Thời gian thực hiện:</p>
                      <p>Tin nhắn:</p>
                    </div>
                  </div>
                  <div className="testcase-button-lesson">
                    <button type="button" className="run-btn">
                      Chạy thử
                    </button>
                    <button type="button" className="submit-btn">
                      Nộp bài
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  display2 === "on"
                    ? "ListNode__Container"
                    : "ListNode__Container-off"
                }
              >
                <div className="discuss-list">
                  <button
                    type="button"
                    className={
                      display2 === "on"
                        ? "discuss-icon-lesson"
                        : "discuss-icon-on-lesson"
                    }
                    onClick={handledisplay2}
                  >
                    <i class="fab fa-rocketchat"></i>
                  </button>
                  <button
                    type="button"
                    className={
                      display2 === "on"
                        ? "discuss-icon-on-lesson"
                        : "discuss-icon-lesson"
                    }
                    onClick={handledisplay2}
                  >
                    <i class="far fa-clipboard"></i>
                  </button>
                </div>
                {/* <div className="Noted__container">
                            <div className="Noted__container_Top">
                                <h2>Những ghi chú đã có</h2>
                            </div>
                            <div className="Noted__container_Center">
                                <span>1. Cần học lại những kiến thức cũ</span>
                                <span>2. Nên xem thêm những video ví dụ khác</span>
                            </div>
                        </div>
                        <div className="Note_Fill_Container">
                               <textarea id="note-of-lesson" name="note-of-lesson"  placeholder="Nhập ghi chú">
                                </textarea>
                                
                        </div>
                        <div className="submit_noted">
                            <button className="submit_noted">Hoàn tất</button>
                        </div> */}
                <div className="Noted__container">
                  <div className="Noted__container_title">
                    <h3>Danh sách các ghi chú </h3>
                  </div>
                  <div className="Noted_container_content">
                    <div className="Input__noted_container">
                      <input
                        name="add-todo"
                        placeholder="thêm ghi chú mới..."
                        value={textInput}
                        onChange={onTextInputChange}
                        className="input__noted"
                      ></input>
                      <button
                        // isDisabled={!textInput}
                        onClick={onAddBtnClick}
                      >
                        Thêm
                      </button>
                    </div>
                    <div className="TodoNoted_list">
                      <TodoNoted todoList={todoList} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
}

export default Lesson;

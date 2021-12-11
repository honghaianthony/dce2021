import React from "react";
import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Lesson.css";
import TodoNoted from "../components/Lesson/TodoNoted";
// const TODO_APP_STORAGE_KEY = "TODO_APP";
function Lesson() {
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
      <div className="lesson-container">
        <div className="lesson-name">
          <Link to="/">
            <i class="fas fa-angle-left"></i>
          </Link>
          <p>Biến và các dữ liệu: Biến và cách khai báo</p>
          <Link to="/">
            <i class="fas fa-angle-right"></i>
          </Link>
        </div>
        <div className="lesson-main">
          <div className={display2 === "on" ? "content-off" : "content-lesson"}>
            <div className="discuss-lesson">
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
            <div className="content-and-comment-lesson">
              <div
                className={
                  display === "on" ? "main-content-lesson-off" : "main-content-lesson"
                }
              >
                <div className="content-header-lesson">
                  {/* <div className="level">Đơn giản</div> */}
                  <div className="point-lesson">100 Points</div>
                </div>
                <div className="content-disc-lesson">
                  <p>
                    Bạn hãy viết chương trình khai báo 2 biến a và b kiểu số
                    nguyên, sau đó gán giá trị cho a = 254, b = 343 và hiển thị
                    ra màn hình:
                  </p>
                  <p>a+b=P</p>
                  <p>Với P là tổng của hai biến a và b</p>
                </div>
                <div className="content-Lesson-lesson">
                  <h2>Lý Thuyết</h2>
                  <p>
                    Biến trong lập trình được dùng để đại diện cho một giá trị
                    mà có thể thay đổi trong quá trình chạy. Ví dụ như biến thể
                    hiện số tuổi, số tiền trong tài khoản, ... các giá trị này
                    hoàn toàn có thể thay đổi theo thời gian và cần sử dụng biến
                    để lưu trữ.
                  </p>
                  <p>
                    Ứng với mỗi kiểu dữ liệu như số nguyên, số thực, xâu ký tự,
                    ... thì lại có một cách khai báo biến khác nhau. Trong đó cú
                    pháp để khai báo biến kiểu số nguyên sẽ giống như sau:
                  </p>
                  <p>int tên_biến;</p>
                </div>
                <div className="content-input-lesson">
                  <h2>Input:</h2>
                  <p>0</p>
                </div>
                <div className="content-output-lesson">
                  <h2>Output:</h2>
                  <p>"a + b = 597"</p>
                </div>
              </div>
              <div
                className={
                  display === "on"
                    ? "comment-section-on-lesson"
                    : "comment-section-off-lesson"
                }
              >
                <div className="number-comments-lesson">
                  <p>2 bình luận</p>
                </div>
                <div className="write-comment-lesson">
                  <div className="comment-icon">
                    <i class="fas fa-user-circle"></i>
                  </div>
                  <div className="comment-and-button-lesson">
                    <div className="place-write-comment-lesson">
                      <textarea
                        id="place-write-comment-lesson"
                        name="place-write-comment"
                        placeholder="Viết bình luận của bạn"
                      ></textarea>
                    </div>

                    <button type="button" className="post-comment-btn-lesson">
                      Đăng
                    </button>
                  </div>
                </div>
                <div className="others-comment-lesson">
                  <div className="other-commnet-lesson">
                    <div className="user-comment-lesson">
                      <div className="comment-icon">
                        <i class="fas fa-user-circle"></i>
                      </div>
                      <div className="user-infor-lesson">
                        <a href="">Nguyễn Văn A</a>
                        <p>20-11-2021</p>
                      </div>
                    </div>
                    <div className="content-of-comment-lesson">
                      <p>
                        Sao bài này lại mức độ trung bình nhỉ? Chỉ cần làm vài
                        phép toán ra nháp rồi suy ra là ta có công thức chung
                        rồi mà
                      </p>
                    </div>
                  </div>
                  <div className="other-commnet-lesson">
                    <div className="user-comment-lesson">
                      <div className="comment-icon">
                        <i class="fas fa-user-circle"></i>
                      </div>
                      <div className="user-infor">
                        <a href="">Nguyễn Văn A</a>
                        <p>20-11-2021</p>
                      </div>
                    </div>
                    <div className="content-of-comment-lesson">
                      <p>
                        Sao bài này lại mức độ trung bình nhỉ? Chỉ cần làm vài
                        phép toán ra nháp rồi suy ra là ta có công thức chung
                        rồi mà
                      </p>
                    </div>
                  </div>
                  <div className="other-commnet-lesson">
                    <div className="user-comment-lesson">
                      <div className="comment-icon">
                        <i class="fas fa-user-circle"></i>
                      </div>
                      <div className="user-infor-lesson">
                        <a href="">Nguyễn Văn A</a>
                        <p>20-11-2021</p>
                      </div>
                    </div>
                    <div className="content-of-comment-lesson">
                      <p>
                        Sao bài này lại mức độ trung bình nhỉ? Chỉ cần làm vài
                        phép toán ra nháp rồi suy ra là ta có công thức chung
                        rồi mà
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={display2 === "on" ? "code-off" : "code-lesson"}>
            <div className="intro-lesson">
              <p className="intro-content-lesson">Code in here</p>
              <button type="button" className="refresh-btn-lesson">
                Làm mới
              </button>
            </div>
            <div className="place-code-lesson">
              <textarea id="code-of-exser-lesson" name="code-of-exser"></textarea>
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
                <button type="button" className="run-btn-lesson">
                  Chạy thử
                </button>
                <button type="button" className="submit-btn-lesson">
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
            <div className={display2 === "off" ? "code-off" : "code-lesson"}>
              <div className="intro-lesson">
                <p className="intro-content-lesson">Code in here</p>
                <button type="button" className="refresh-btn-lesson">
                  Làm mới
                </button>
              </div>
              <div className="place-code-lesson">
                <textarea id="code-of-exser-lesson" name="code-of-exser"></textarea>
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
                  <button type="button" className="run-btn-lesson">
                    Chạy thử
                  </button>
                  <button type="button" className="submit-btn-lesson">
                    Nộp bài
                  </button>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson;

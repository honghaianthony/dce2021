import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/styles/Lesson.css";
import LessonApi from "../apis/LessonApi";

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

  return (
    <>
      {data ? (
        <>
          <div className="lesson-container">
            {/* header */}
            <div className="lesson-name">
              <Link to="/">
                <i class="fas fa-angle-left"></i>
              </Link>
              <p>{data.lessonName}</p>
            </div>

            {/* giữa */}
            <div className="main-lesson-content">
              <div className="lesson-main">
                <div className={"content-lesson"}>
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
                    {/* content */}
                    <div
                      className={
                        // "main-content-lesson"
                        display === "on" || display2 === "on"
                          ? "main-content-lesson-off"
                          : "main-content-lesson"
                      }
                    >
                      <div className="content-Lesson">{data.content}</div>
                    </div>

                    {/* comment */}
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

                          <button
                            type="button"
                            className="post-comment-btn-lesson"
                          >
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
                            <div className="user-infor">
                              <a href="">Nguyễn Văn A</a>
                              <p>20-11-2021</p>
                            </div>
                          </div>
                          <div className="content-of-comment-lesson">
                            <p>
                              Sao bài này lại mức độ trung bình nhỉ? Chỉ cần làm
                              vài phép toán ra nháp rồi suy ra là ta có công
                              thức chung rồi mà
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
                              vài phép toán ra nháp rồi suy ra là ta có công
                              thức chung rồi mà
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
                              vài phép toán ra nháp rồi suy ra là ta có công
                              thức chung rồi mà
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* note */}
                    <div
                      className={
                        display2 === "on"
                          ? "ListNode__Container"
                          : "ListNode__Container-off"
                      }
                    >
                      <div className="Noted__container">
                        <div className="Noted__container_title">
                          <h3>Ghi chú </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* code */}
                <div className={"code-lesson"}>
                  <div className="intro-lesson">
                    <p className="intro-content-lesson">Code in here</p>
                    <button type="button" className="refresh-btn-lesson">
                      Làm mới
                    </button>
                  </div>
                  <div className="place-code-lesson">
                    <textarea
                      id="code-of-exser-lesson"
                      name="code-of-exser"
                    ></textarea>
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
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
}

export default Lesson;

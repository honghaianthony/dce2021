import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useParams, useHistory, Redirect } from "react-router-dom";
import "../assets/styles/Lesson.css";
import LessonApi from "../apis/LessonApi";
import compileApi from "../apis/compileApi";
import { useStore } from "../store";
import { io } from "socket.io-client";
import usersApi from "../apis/usersApi";
import { Helmet } from "react-helmet-async";

function Lesson() {
  const history = useHistory();
  const [state, dispatch] = useStore();
  const [data, setData] = useState(null);
  const [content, setContent] = useState("");
  const [testCase, setTestCase] = useState(null);
  const [comment, setComment] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [note, setNote] = useState("");
  const [allow, setAllow] = useState(false);
  const [savedNote, setSavedNote] = useState(true);
  const [realOutput, setRealOutput] = useState(" ");
  const [showMoreCmt, setShowMoreCmt] = useState(5);
  const [lang, setLang] = useState("Python");
  const [code, setCode] = useState("");
  const { lessonId } = useParams();

  

  useEffect(async () => {
    const res = await LessonApi.getLessonById(lessonId);
    setData(res.data);
    let cont = res.data.content;
    cont.replace(/\r\n/g, "<br />");
    setContent(cont);
    const test = await LessonApi.getAllLessonTestById(lessonId);
    setTestCase(test.data);
    const cmt = await LessonApi.getAllLessonComment(lessonId);
    setComment(cmt);
    const getnote = await LessonApi.getLessonNote(lessonId);
    if (getnote !== null) {
      setNote(getnote.content);
    }
    setCode("");
    setRealOutput("");
  }, []);
  //socket.io
  const socket = useRef();
  useEffect(() => {
    socket.current = io("http://localhost:3000");
    socket.current.emit("join-room", lessonId);
    socket.current.on("receive-comment-lesson", (data) => {
      setComment([...comment, data]);
    });
  }, [lessonId, socket.current]);

  const [display, setdisplay] = useState("off");
  const setcomment = () => {
    setdisplay(display === "off" ? "on" : "off");
  };
  const [display2, setdisplay2] = useState("off");
  const handledisplay2 = () => {
    setdisplay2(display2 === "off" ? "on" : "off");
  };

  useEffect(() => {
    setSavedNote(false);
  }, [note]);

  const listTestCase = () => {
    if (testCase) {
      return <li>Test case 1</li>;
    } else {
      return <li>Không có test case</li>;
    }
  };

  const showTestCase = (item, real) => {
    if (item) {
      return (
        <div className="testcase-display-lesson">
          <p>Đầu vào: {item[0].input}</p>
          <p>Đầu ra: {real}</p>
          <p>Đầu ra mong muốn: {item[0].output}</p>
          {/* <p>Thời gian thực hiện:</p>
        <p>Tin nhắn:</p> */}
        </div>
      );
    } else {
      return (
        <div className="testcase-display-lesson">
          <p>Đầu vào: </p>
          <p>Đầu ra: {real}</p>
          <p>Đầu ra mong muốn: </p>
          {/* <p>Thời gian thực hiện:</p>
        <p>Tin nhắn:</p> */}
        </div>
      );
    }
  };

  const handleSubmit = async () => {
    const body = {
      code: code,
      input: testCase ? testCase[0].input : "",
      inputRadio: true,
      lang: lang,
    };
    const response = await compileApi.postCompile(body);
    if (response.output) {
      setRealOutput(response.output);
      // allow to Nộp bài
      if (
        response.output.localeCompare(testCase[0].output) == 1 ||
        testCase.output === null
      ) {
        setAllow(true);
      }
    } else {
      setRealOutput(response.error);
    }
  };

  const handleNextLesson = async () => {
    const all = await LessonApi.getAllLesson(data.courseId);
    const index = all.map((i) => {
      return i.id;
    });
    const body = {
      lessonId: lessonId,
      code: code,
      isCompleted: true,
    };
    const done = await usersApi.doneLesson(body);
    if (done.errCode != 0) {
      return null;
    } else {
      if (index.indexOf(data.id) + 1 == all.length) {
        const doneRes = await usersApi.checkDoneCourse(data.courseId);
        let done = true;
        doneRes.forEach((i) => {
          if (!i.isCompleted) {
            done = false;
          }
        });
        if (done) {
          const body2 = {
            courseId: data.courseId,
            isCompleted: true,
          };
          await usersApi.doneCourse(body2);
        }
        history.push("/courses");
      } else {
        history.push(`/lesson/${all[index.indexOf(data.id) + 1].id}`);
      }
    }
  };

  const renderComment = () => {
    return comment
      .map((item, index) => {
        return (
          index > comment.length - showMoreCmt && (
            <div className="other-commnet-lesson">
              <div className="user-comment-lesson">
                <div className="comment-icon">
                  <i class="fas fa-user-circle"></i>
                </div>
                <div className="user-infor-lesson">
                  <p className="username">{`${item.userId.lastName} ${item.userId.firstName}`}</p>
                  <p>{new Date(item.updatedAt).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="content-of-comment-lesson">
                <p>{item.content}</p>
              </div>
            </div>
          )
        );
      })
      .reverse();
  };

  const sendComment = (e) => {
    e.preventDefault();
    const comment = commentInput;
    socket.current.emit("send-comment-lesson", comment, state.userId, lessonId);
    setCommentInput("");
  };
  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleSaveNote = async () => {
    const body = {
      lessonId: lessonId,
      content: note,
    };
    const success = await LessonApi.updateNote(body);
    if (success.errCode === 0) {
      setSavedNote(true);
    }
  };
  return (
    <>
      {data ? (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Bài học {data.lessonName}</title>
          </Helmet>
          <div className="lesson-container">
            {/* header */}
            <div className="lesson-name">
              {/* <Link to="/courses">
                <i class="fas fa-angle-left"></i>
              </Link> */}
              <i class="fas fa-angle-left" onClick={history.goBack}></i>
              <p>{data.lessonName}</p>
            </div>

            {/* giữa */}
            <div className="main-lesson-content">
              <div className="lesson-main">
                <div className={'content-lesson'}>
                  <div className="discuss-lesson">
                    <button
                      type="button"
                      className={
                        display === 'on'
                          ? 'discuss-icon-on-lesson'
                          : 'discuss-icon-lesson'
                      }
                      onClick={setcomment}
                    >
                      <i class="fab fa-rocketchat"></i>
                    </button>
                    <button
                      type="button"
                      className={
                        display2 === 'on'
                          ? 'discuss-icon-on-lesson'
                          : 'discuss-icon-lesson'
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
                        display === 'on' || display2 === 'on'
                          ? 'main-content-lesson-off'
                          : 'main-content-lesson'
                      }
                    >
                      <div
                        className="content-Lesson"
                        dangerouslySetInnerHTML={{
                          __html: content,
                        }}
                      ></div>
                      {/* <div className="content-Lesson">{data.content}</div> */}
                    </div>

                    {/* comment */}
                    <div
                      className={
                        display === 'on'
                          ? 'comment-section-on-lesson'
                          : 'comment-section-off-lesson'
                      }
                    >
                      <div className="number-comments-lesson">
                        <p>{comment.length} bình luận</p>
                      </div>
                      <div className="write-comment-lesson">
                        <div className="comment-icon">
                          <i class="fas fa-user-circle"></i>
                          <p>{state.fullname}</p>
                        </div>
                        <div className="comment-and-button-lesson">
                          <div className="place-write-comment-lesson">
                            <textarea
                              id="place-write-comment-lesson"
                              name="place-write-comment"
                              placeholder="Viết bình luận của bạn"
                              value={commentInput}
                              onChange={handleCommentChange}
                            ></textarea>
                          </div>

                          <button
                            type="button"
                            className="post-comment-btn-lesson"
                            onClick={sendComment}
                          >
                            Đăng
                          </button>
                        </div>
                      </div>
                      <div className="others-comment-lesson">
                        {comment.length > 0 && renderComment()}
                        {showMoreCmt < comment.length && (
                          <button
                            className="lesson-comment-show-more"
                            onClick={() => {
                              setShowMoreCmt(showMoreCmt + 5);
                            }}
                          >
                            Xem thêm bình luận
                          </button>
                        )}
                      </div>
                    </div>

                    {/* note */}
                    <div
                      className={
                        display2 === 'on'
                          ? 'ListNode__Container'
                          : 'ListNode__Container-off'
                      }
                    >
                      <div className="Noted__container">
                        <div className="Noted__container_title">
                          <h3>Ghi chú </h3>
                        </div>
                        <textarea
                          className="note-area"
                          value={note}
                          onChange={(e) => {
                            setNote(e.target.value);
                          }}
                        ></textarea>
                        {savedNote ? (
                          <button
                            type="button"
                            className={'save-note-on btn btn-outline-primary'}
                          >
                            Lưu
                          </button>
                        ) : (
                          <button
                            type="button"
                            className={'save-note-off btn btn-primary'}
                            onClick={handleSaveNote}
                          >
                            Lưu
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* code */}
                <div className={'code-lesson'}>
                  <div className="intro-lesson">
                    <p className="intro-content-lesson">
                      Code in here
                      <select
                        className="lang-select"
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                      >
                        <option value="Python">Python</option>
                        <option value="C++">C++</option>
                        <option value="C">C</option>
                        <option value="Java">Java</option>
                      </select>
                    </p>

                    <button type="button" className="refresh-btn-lesson">
                      Làm mới
                    </button>
                  </div>
                  <div className="place-code-lesson">
                    <textarea
                      id="code-of-exser-lesson"
                      name="code-of-exser"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="testcase-lesson">
                    <div className="testcase-header-lesson">
                      <p>TEST CASE</p>
                    </div>
                    <div className="testcase-content-lesson">
                      <div className="testcase-number-lesson">
                        <ul>{listTestCase()}</ul>
                      </div>
                      {showTestCase(testCase, realOutput)}
                    </div>
                    <div className="testcase-button-lesson">
                      <button
                        type="button"
                        className="run-btn-lesson"
                        onClick={handleSubmit}
                      >
                        Chạy thử
                      </button>
                      {allow ? (
                        <button
                          type="button"
                          className="submit-btn-lesson"
                          onClick={handleNextLesson}
                        >
                          Nộp bài
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="submit-btn-lesson-disable"
                        >
                          Nộp bài
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="main-container">
          <div className="loader" />
        </div>
      )}
    </>
  );
}

export default Lesson;

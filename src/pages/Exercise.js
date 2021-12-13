import "../assets/styles/Exercise.css";
import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import ExerciseApi from "../apis/ExerciseApi";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import compileApi from "../apis/compileApi";
import { useStore } from "../store";
import { io } from "socket.io-client";
function Exercise(Exercise)
{
    
    const [display,setdisplay]=useState("off");
    const setcomment = () =>
    {
        setdisplay(display === "off" ? "on" : "off");
    }
    /*api*/
    const [exercise,setExercise]=useState(null);
    const [testCase, setTestCase] = useState([]);
    const [realOutput, setRealOutput] = useState("");
    const [testCaseShow, setTestCaseShow] = useState({
        id: 0,
        lessonId: 0,
        input: "",
        output: "",
      });
    const [lang, setLang] = useState("C++");
    const [code, setCode] = useState("");
    const {exerciseId} =useParams();
    const socket = io("http://localhost:3000");

    useEffect( async () => {
       const res = await ExerciseApi.getAllExerciseById(exerciseId);
       setExercise(res);
        const testCase = await ExerciseApi.getTestCaseByExerciseId(exerciseId);
        setTestCase(testCase.data);
    }, [exerciseId]);

    useEffect(() => {
        setRealOutput("");
      }, [testCaseShow]);
    
      const listTestCase = () => {
        if (testCase.length > 0) {
          return testCase.map((item, index) => {
            return (
              <li key={item.id} onClick={() => setTestCaseShow(item)}>
                Test case {index + 1}
              </li>
            );
          });
        } else {
          return <li>Không có test case</li>;
        }
    };
    const showTestCase = (item, real) => {
        return (
          <div className="testcase-display-lesson">
            <p>Đầu vào: {item.input}</p>
            <p>Đầu ra: {real}</p>
            <p>Đầu ra mong muốn: {item.output}</p>
            {/* <p>Thời gian thực hiện:</p>
          <p>Tin nhắn:</p> */}
          </div>
        );
      };
    const handleSubmit = async () => {
        const body = {
          code: code,
          input: testCaseShow.input,
          inputRadio: true,
          lang: lang,
    };
    const response = await compileApi.postCompile(body);
    console.log(response);
        if (response.output) {
          setRealOutput(response.output);
        } else {
          setRealOutput(response.error);
        }
      };
      

    return (
        <>
            { exercise === null ? (<h1>Loading</h1>):
                (
                    <div className="exercise-container">
                <div className="exercise-name">
                    <Link to="/exercises">
                         <i class="fas fa-angle-left"></i>
                    </Link>
                    
                    <p>{exercise.exerciseName}</p>
                </div>
                <div className="exercise-main">
                    <div className="content">
                        <div className="discuss">
                            <button type="button" className={display === "on" ? "discuss-icon-on" : "discuss-icon"} onClick={setcomment}>
                                <i class="fab fa-rocketchat"></i>
                            </button>
                        </div>
                        <div className="content-and-comment">
                            <div className={display === "on" ? "main-content-off" : "main-content"}>
                            <div className="content-header">
                                <div className={(exercise.level === 1 ? "level-simple" : (exercise.level === 2 ? "level-normal" : "level-hard"))}>
                                    {(exercise.level === 1 ? "Đơn giản" : (exercise.level === 2 ? "Trung bình" : "Khó"))}
                                </div>
                                <div className="point">100 Points</div>
                            </div>
                            <div className="content-disc">
                                <p>
                                {exercise.content}
                                </p>
                            </div>
                            <div className="content-input">
                                <h2>Input:</h2>
                                <p>
                                    {exercise.input}
                                </p>
                            </div>
                            <div className="content-output">
                                <h2>Output:</h2>
                                <p>
                                    {exercise.output}
                                </p>
                            </div>
                            </div> 
                            <div className={display === "on" ? "comment-section-on" : "comment-section-off"}>
                                <div className="number-comments">
                                    <p>2 bình luận</p>
                                </div>                               
                                <div className="write-comment">                                    
                                    <div className="comment-icon">
                                         <i class="fas fa-user-circle"></i>
                                    </div>                                   
                                    <div className="comment-and-button">
                                        <div className="place-write-comment">
                                            <textarea id="place-write-comment" name="place-write-comment" placeholder="Viết bình luận của bạn"></textarea>
                                        </div>
                                        
                                            <button type="button" className="post-comment-btn">Đăng</button>
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
                                            <p>Sao bài này lại mức độ trung bình nhỉ? Chỉ cần làm vài phép toán 
                                                ra nháp rồi suy ra là ta có công thức chung rồi mà</p>
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
                                            <p>Sao bài này lại mức độ trung bình nhỉ? Chỉ cần làm vài phép toán 
                                                ra nháp rồi suy ra là ta có công thức chung rồi mà</p>
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
                                            <p>Sao bài này lại mức độ trung bình nhỉ? Chỉ cần làm vài phép toán 
                                                ra nháp rồi suy ra là ta có công thức chung rồi mà</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="exercise-code">
                            <div className="intro">
                                <p className="intro-content">Code in here
                                <select
                                    className="lang-select"
                                    value={lang}
                                    onChange={(e) => setLang(e.target.value)}
                                >
                                    <option value="C++">C++</option>
                                    <option value="C">C</option>
                                    <option value="Java">Java</option>
                                    <option value="Python">Python</option>
                                </select>
                                </p>
                                <button type="button" className="refresh-btn">Làm mới</button>
                            </div>
                            <div className="place-code">
                                <textarea 
                                        id="code-of-exser"
                                        name="code-of-exser"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}>
                                </textarea>
                            </div>
                        <div className="testcase">                           
                                <div className="testcase-header">
                                   <p>TEST CASE</p>
                                </div>
                                <div className="testcase-content">
                                    <div className="testcase-number">
                                         <ul>{listTestCase()}</ul>
                                    </div>
                                    {showTestCase(testCaseShow, realOutput)}
                                </div>
                                <div className="testcase-button">
                                    <button type="button" 
                                            className="run-btn"
                                            onClick={handleSubmit}
                                    >Chạy thử</button>
                                    <button type="button" className="submit-btn">Nộp bài</button>
                                </div>
                        </div>
                    </div>                    
                </div> 
            </div>              
            )}             
        </>
    )
}
export default Exercise;
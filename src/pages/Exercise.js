import MainLayout from "../layouts/MainLayout";
import "../assets/styles/Exercise.css";
import { useState,useEffect} from "react";
import reactDom from "react-dom";
import ExerciseApi from "../apis/ExerciseApi";
function Exercise(Exercise)
{
    /*api*/
    /*const [exercise,setExercise]=useState([]);
    useEffect( async(id) => {
       const res= await ExerciseApi.getAllExerciseById(id);
       setExercise(res.data);
    }, [])
    /*api*/
    const [display,setdisplay]=useState("off");
    const setcomment = () =>
    {
        setdisplay(display === "off" ? "on" : "off");
    }
    console.log(display);
    return (
        <>
            <div className="exercise-container">
                <div className="exercise-name">
                    <a href=""><i class="fas fa-angle-left"></i></a>
                    <p>{Exercise.title}</p>
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
                                <div className="level">{Exercise.level}</div>
                                <div className="point">100 Points</div>
                            </div>
                            <div className="content-disc">
                                <p>
                                {Exercise.content}
                                </p>
                            </div>
                            <div className="content-input">
                                <h2>Input:</h2>
                                <p>[Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript. 
                                    <br/>
                                    [Đầu vào]  Long long n1   n 1018.
                                </p>
                            </div>
                            <div className="content-output">
                                <h2>Output:</h2>
                                <p>
                                 Số lượng số composite lớn nhất
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
                    <div className="code">
                            <div className="intro">
                                <p className="intro-content">Code in here</p>
                                <button type="button" className="refresh-btn">Làm mới</button>
                            </div>
                            <div className="place-code">
                                <textarea id="code-of-exser" name="code-of-exser">
                                </textarea>
                            </div>
                        <div className="testcase">                           
                                <div className="testcase-header">
                                   <p>TEST CASE</p>
                                </div>
                                <div className="testcase-content">
                                    <div className="testcase-number">
                                        <ul>
                                            <li>Kiểm thử 1</li>
                                            <li>Kiểm thử 2</li>
                                            <li>Kiểm thử 2</li>
                                        </ul>
                                    </div>
                                    <div className="testcase-display">
                                        <p>Đầu vào:</p>
                                        <p>Đầu ra:</p>
                                        <p>Đầu ra mong muốn:</p>
                                        <p>Thời gian thực hiện:</p>
                                        <p>Tin nhắn:</p>
                                    </div>
                                </div>
                                <div className="testcase-button">
                                    <button type="button" className="run-btn">Chạy thử</button>
                                    <button type="button" className="submit-btn">Nộp bài</button>
                                </div>
                        </div>
                    </div>                    
                </div> 
            </div>                        
        </>
    )
}
export default Exercise;
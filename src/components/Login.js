import React from 'react'
import './Login.css';
import anh1 from '../assset/image/147353160_849851585747953_3866102664319134315_n.jpg'
import anh2 from '../assset/image/258771302_1802826646578663_3106383078379779822_n.png'
import anh3 from '../assset/image/258405880_1310680229361095_4537703433681840589_n.png'
import anh4 from '../assset/image/258868308_1946851468827802_626131283865978839_n.png'
import anh5 from '../assset/image/258891764_1289526941488343_155681037865934349_n.png'
import anh6 from '../assset/image/256304292_600805224574213_5430485495829320675_n.png'
import anh7 from '../assset/image/254884567_221471523448432_8016803298139607140_n.png'
import anh8 from '../assset/image/254981000_473344604100735_4534982061181340360_n.png'
import anh9 from '../assset/image/download.png'


function Login() {
  return (
    <div>

    {/* ----------------------PHAN DAU----------------------- */}
    <div className="wrap-block-user">
      
        <h2 className="welcome-user"> 
          Xin chào
          <span> LunarMoon8901@gmail.com</span>
          . Chào mừng bạn đến với CodeLearn. Hãy 
          <a className="btn-important" title="khám phá"> khám phá </a>
          nhé!
        </h2>

        <div className="profile-user">
          <div className="col-xs-12 col-md-4">

            <div className="mian-user-info">
              <div className="user-ava">
              <img  src={anh1} className="future-img" alt="Avata" /> 
              </div>

              <div className="content-info">
                <h3 className="user-name">MoonLunar8901</h3>
                <p className="main-user-dee"></p>
              </div>

              <div className="user-process">
              <span className="name">Tên: Moon Lunar</span>
            </div>
            
            </div>

            

          </div>

          <div className="col-xs-12 col-md-8">
            <div className="detail-user">
              <div className="row">
                <div className="col-xs-12 col-sm-4 detail-progress-item">
                  <h4>Khóa học</h4>
                  <div className="detail-progress-content">
                    <span className="result">1/19</span>
                  </div>

                  <div className="item-progress-bar">
                    <span className="current-progress" ></span>
                  </div>
                </div>


                <div className="col-xs-12 col-sm-4 detail-progress-item">
                  <h4>Luyện tập</h4>
                  <div className="detail-progress-content">
                    <span className="result">5/120</span>
                  </div>

                  <div className="item-progress-bar">
                    <span className="current-progress" ></span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

    </div>

    {/* -----------------------------------PHAN 2---------------------------- */}
      <div className="home-section">

        <h3 className="heading-block">  
          Khóa học
          <a href="/learning">Xem tất cả</a>
        </h3>

        <div className="wrap-cl-tabs-control">
          <span className="mobile-dropdown-control">
            <select className="mobile-dropdown-control-select">

              <option value="#suggest-courses" selected>Khoá học giợi ý</option>
              <option value="#recent-courses"> Đang học</option>
              <option value="#finish-courses"> Đã hoàn thành</option>

            </select>

            <i className="ion-ios-arrow-down"></i>
          </span>

          <ul className="cl-tabs-control">
            <li>
              <a onClick="initSlick();" href="#suggest-courses" className="cl-tab-control-item active">Khoá học giợi ý</a>
            </li>
              
            <li>
              <a onClick="initSlick();" href="#recent-courses" className="cl-tab-control-item">Đang học</a>
            </li>

            <li>
              <a onClick="initSlick();" href="#finish-courses" className="cl-tab-control-item disabled">Đã hoàn thành</a>
            </li>
          </ul>

          <div className="wrap-course-tabs">
            <div className="cl-tab-item active">
              <div className="row list-courses">
                <article className="course-item grid-style col-xs-12 col-sm-6 col-lg-3">
                  <a til="C++ cho người mới bắt đầu" href="https://codelearn.io/learning/cpp-cho-nguoi-moi-bat-dau" className="wrap-course-item"> 
                    <div className="course-thumb">
                      <img src={anh2}  alt="C++ cho người mới bắt đầu"/>
                    </div>
                 

                  <div className="view-content">
                    <h3 className="">C++ cho người mới bắt đầu</h3>
                    <p>
                    Khóa học lập trình C++ cơ bản cho người mới bắt đầu. Khóa học này 
                    sẽ cung cấp những kiến thức cơ bản, dễ hiểu nhất về ngôn ngữ lập trình C++.
                    </p>

                    <div className="course-info"> 
                      <span className="btn btn-round" title="C++ cho người mới bắt đầu">
                        Học ngay
                      </span>
                    </div>

                    </div>
                  </a>
                </article>

                <article className="course-item grid-style col-xs-12 col-sm-6 col-lg-3">
                  <a til="Lập trình hướng đối tượng" href="https://codelearn.io/learning/lap-trinh-huong-doi-tuong-trong-cpp" className="wrap-course-item"> 
                    <div className="course-thumb">
                      <img src={anh3}  alt="Lập trình hướng đối tượng"/>
                    </div>
                  

                  <div className="view-content">
                    <h3 className="">Lập trình hướng đối tượng</h3>
                    <p>
                    Lập trình hướng đối tượng (Object-Oriented-Programming) 
                    là phương pháp lập trình dựa trên đối tượng để tìm ra bản chất của vấn đề.
                    </p>

                    <div className="course-info"> 
                      <span className="btn btn-round" title="Lập trình hướng đối tượng">
                        Học ngay
                      </span>
                    </div>

                  </div>
                  </a>
                </article>

                <article className="course-item grid-style col-xs-12 col-sm-6 col-lg-3">
                  <a til="Python cơ bản" href="https://codelearn.io/learning/python-co-ban" className="wrap-course-item"> 
                    <div className="course-thumb">
                      <img src={anh4}  alt="Python cơ bản"/>
                    </div>
                  

                  <div className="view-content">
                    <h3 className="">Python cơ bản</h3>
                    <p>
                    Khóa học lập trình Python cơ bản với các bài tập và lý thuyết dễ hiểu, 
                    học xong bạn có thể tự tin để tới với các chủ đề nâng cao hơn của Python.
                    </p>
                  

                  <div className="course-info"> 
                      <span className="btn btn-round" title="Python cơ bản">
                        Học ngay
                      </span>
                    </div>

                    </div>
                  </a>
                </article>

                <article className="course-item grid-style col-xs-12 col-sm-6 col-lg-3">
                  <a til="C cho người mới bắt đầu" href="https://codelearn.io/learning/c-cho-nguoi-moi-bat-dau" className="wrap-course-item"> 
                    <div className="course-thumb">
                      <img src={anh5}  alt="C cho người mới bắt đầu"/>
                    </div>
                  

                  <div className="view-content">
                    <h3 className="">C cho người mới bắt đầu</h3>
                    <p>
                    Khóa học lập trình C cho người mới bắt đầu. Khóa học này sẽ cung cấp những kiến thức
                     cơ bản và là nền tảng để bạn đi xa hơn trên con đường lập trình.
                    </p>

                    <div className="course-info"> 
                      <span className="btn btn-round" title="C cho người mới bắt đầu">
                        Học ngay
                      </span>
                    </div>

                  </div>
                  </a>
                </article>

              </div>
            </div>
          </div>
        </div>
      </div>


{/* -------------------------------------------PHAN 3---------------------- */}
      <div className="mid-bottom-section home-section">
        <div className="row">
          <div className="col-xs-12 col-lg-7">
            <h3 className="heading-block">
              Luyện tập hằng ngày
              <a href="/learning">Xem tất cả</a>
            </h3>

            <div className="wrap-training-section wrap-home-block">
              <ul className="list-training-summary">
                <li className="easy-level">
                  <span className="summary-value">0/70</span> Đơn giản
                </li>

                <li className="normal-level">
                  <span className="summary-value">0/80</span> Trung bình
                </li>

              </ul>

              <div className="row list-task-training">
                <article className="col-xs-12 col-sm-4 training-item">
                  <a href="https://codelearn.io/training/detail/18003" src="isPowerOfFour" className="wrap-training-content" >
                    <div className="task-item-detail">
                      <h3 className="task-title">isPowerOfFou</h3>
                      <span className="badge badge-secondary easy">Đơn giản</span>
                    </div>

                    <ul className="task-info-info">
                      <li className="6581/7280">
                        <i>
                          <img src={anh9}  alt="người"/>
                          <span className="span-user-submit">30/40</span>
                        </i>
                      </li>
                    </ul>
                  </a>
                </article>

                <article className="col-xs-12 col-sm-4 training-item">
                  <a href="https://codelearn.io/training/detail/23151" src="isSortedArray" className="wrap-training-content" >
                    <div className="task-item-detail">
                      <h3 className="task-title">isSortedArray</h3>
                      <span className="badge badge-secondary easy">Đơn giản</span>
                    </div>

                    <ul className="task-info-info">
                      <li className="6581/7280">
                        <i>
                          <img src={anh9}  alt="người"/>
                          <span className="span-user-submit">30/40</span>
                        </i>
                      </li>
                    </ul>
                  </a>
                </article>

                <article className="col-xs-12 col-sm-4 training-item">
                  <a href="https://codelearn.io/training/detail/4538" src="maxSubarrayr" className="wrap-training-content" >
                    <div className="task-item-detail">
                      <h3 className="task-title">maxSubarray</h3>
                      <span className="badge badge-secondary medium">Trung bình</span>
                    </div>

                    <ul className="task-info-info">
                      <li className="6581/7280">
                        <i>
                          <img src={anh9}  alt="người"/>
                          <span className="span-user-submit">30/40</span>
                        </i>
                      </li>
                    </ul>
                  </a>
                </article>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-lg-5">
            <h3 className="heading-block">
              Chia sẻ
              <a href="/learning">Xem tất cả</a>
            </h3>

            <div className="wrap-home-block blog-block">
              <article className="blog-item list-style">
                <a className="wrap-blog-item" href="https://codelearn.io/sharing/cai-vscode-lap-trinh-cpp-de-nhat" 
                title="Cài Đặt Visual Studio Code Lập Trình C++ Dễ Như Ăn Kẹo">

                  <div className="wrap-blog-thumb">
                    <img src={anh6} alt="Cài Đặt Visual Studio Code Lập Trình C++ Dễ Như Ăn Kẹo"/>
                  </div>

                  <div className="wrap-blog-item-content">
                    <h3 className="blog-title">Cài Đặt Visual Studio Code Lập Trình C++ Dễ Như Ăn Kẹo</h3>

                    <p className="short-desc">Mình đã viết một bài hướng dẫn cài Visual Studio Code để lập trình C++. 
                    Nhưng, dường như cách đó gây khó khăn cho các bạn khi thực hiện. </p>
                  </div>
                </a>
              </article>

              <article className="blog-item list-style">
                <a className="wrap-blog-item" href="https://codelearn.io/sharing/6-dau-hieu-cho-thay-ban-code-rat-te" 
                title="6 Dấu Hiệu Cho Thấy Bạn Code Rất Tệ!">

                  <div className="wrap-blog-thumb">
                    <img src={anh7} alt="6 Dấu Hiệu Cho Thấy Bạn Code Rất Tệ!"/>
                  </div>

                  <div className="wrap-blog-item-content">
                    <h3 className="blog-title">6 Dấu Hiệu Cho Thấy Bạn Code Rất Tệ!</h3>

                    <p className="short-desc">Hôm qua, tôi đã đọc một bài viết rất dài và giá trị của Daryll Santos trên Github và sẽ
                     tóm lược một số thông tin chính và quan trọng dưới đây, về 6 dấu hiệu của một LTV tồi. </p>
                  </div>
                </a>
              </article>

              <article className="blog-item list-style">
                <a className="wrap-blog-item" href="https://codelearn.io/sharing/cac-mau-kien-truc-phan-mem" 
                title="Rì-viu 5 Phút: Các Mẫu Kiến Trúc Phần Mềm Không Thể Bỏ Qua">

                  <div className="wrap-blog-thumb">
                    <img src={anh8} alt="Rì-viu 5 Phút: Các Mẫu Kiến Trúc Phần Mềm Không Thể Bỏ Qua"/>
                  </div>

                  <div className="wrap-blog-item-content">
                    <h3 className="blog-title">Rì-viu 5 Phút: Các Mẫu Kiến Trúc Phần Mềm Không Thể Bỏ Qua</h3>

                    <p className="short-desc">Tại sao bạn nên học các Mẫu kiến trúc cơ bản như một Kỹ sư phần mềm? </p>
                  </div>
                </a>
              </article>

            </div>
          </div>

        </div>

      </div>


    </div>
  );
}

export default Login;

import React from 'react';
import './Intro.css';
import anh1 from '../../../assets/images/Animated-Image.png'
import anh2 from '../../../assets/images/Group.png'
import anh3 from '../../../assets/images/icon-park-outline_brain.png'
import anh4 from '../../../assets/images/vaadin_handshake.png'

function Intro() {
    return (
      <div>
      <div className="container">
      <h2 className="title-section">Giới thiệu web DCE</h2>
  
      <div className="row">
          <div className="col-xs-12 col-sm-5 col-md-6">
              <img  src={anh1} className="future-img" alt="Giới thiệu sơ lược về DCE" /> 
          </div>
  
          <div className="col-xs-12 col-sm-7 col-md-6">
              <ul className="list-key-futures">
                  <li>
                      <div className="heading-key">
                          <img  src={anh2} className="heading-key-img" alt="Nơi tỏa sức đam mê code" /> 
                          <h3>Nơi tỏa sức đam mê code</h3>
                      </div>
  
                      <p className="key-des">Trang web này là nơi chúng tôi tạo ra các bài học bổ ích từ cơ bản đến nâng cao. 
                          Tại đây, bạn thỏa sức sáng tạo các sản phẩm dựa trên các bài học.</p>
                  </li>
  
                  <li>
                      <div className="heading-key">
                          <img  src={anh3} className="heading-key-img" alt="Định hướng nghề nghiệp" /> 
                          <h3>Định hướng nghề nghiệp</h3>
                      </div>
  
                      <p className="key-des">Học lập trình giúp bạn có được những kiến thức tốt nhất để làm quen với thế giới công nghệ, 
                          thích nghi với cuộc sống thời đại 4.0.</p>
                  </li>
  
                  <li>
                      <div className="heading-key">
                          <img  src={anh4} className="heading-key-img" alt="Sẻ chia kinh nghiệm lập trình" /> 
                          <h3>Sẻ chia kinh nghiệm lập trình</h3>
                      </div>
  
                      <p className="key-des">Kỹ năng lập trình có xu hướng đa dạng hơn phục vụ cho nhu cầu phát triển của mọi ngành nghề. 
                          DCE đồng hành cùng bạn để chia sẻ, làm giàu thêm kinh nghiệm lập trình.</p>
                  </li>
  
              </ul>
          </div>
      </div>
  
  </div>
  
        <div className="our-statistic">
  
        <div className="row">
                  <div className="col-xs-12 col-sm-4">
                      <div className="wrap-statistic-content">
                          <div className="statistic-number">
                              <span className="counter">100</span> +
                          </div>
          
                          <h3 className="statistic-title">Thành viên đăng ký</h3>
                      </div>
                  </div>
                  
  
                  <div className="col-xs-12 col-sm-4">
                      <div className="wrap-statistic-content">
                          <div className="statistic-number">
                              <span className="counter">20</span> +
                          </div>
          
                          <h3 className="statistic-title">Bài học luyện tập</h3>
                      </div>
                  </div>
  
  
                  <div className="col-xs-12 col-sm-4">
                      <div className="wrap-statistic-content">
                          <div className="statistic-number">
                              <span className="counter">8</span> +
                          </div>
          
                          <h3 className="statistic-title">Nhân viên hỗ trợ trực tuyến</h3>
                      </div>
                  </div>
  
  
              </div>
  
        </div>
  </div>
    );
  }
  
  export default Intro;




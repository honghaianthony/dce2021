import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        {/* Logo and Social Networks */}
        <div className='footer-icons-wrapper'>
          <div class='footer-icons-items'>
            {/* Website Logo here! */}
            <span> DCE
              <i class='fas fa-disease' />
            </span>
            <h2>Liên hệ với chúng tôi</h2>
            <a href='https://www.facebook.com/' target="_blank" title='Facebook'>
              <img src='/images/facebook-logo-45px.png'/>
            </a>
            <a href='https://www.instagram.com/' target="_blank" title='Instagram'>
              <img src='/images/instagram-logo-45px.png' />
            </a>
            <a href='https://twitter.com/' target="_blank" title='Twitter' >
              <img src='/images/twitter-logo-45px.png' />
            </a>
          </div>
        </div>
        {/* Links and Credit */}
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Hỗ Trợ</h2>
            <Link to='/'>Hướng dẫn</Link>
            <Link to='/'>Câu hỏi thường gặp</Link>
            <Link to='/'>Mục tiêu</Link>
            <Link to='/'>Tài trợ</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Liên Kết</h2>
            <Link to='/'>Trang chủ</Link>
            <Link to='/'>Khoá học</Link>
            <Link to='/'>Luyện tập</Link>
            <Link to='/'>Blog</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Nhóm 7</h2>
            <Link to='/'>Nhập môn Công nghệ phần mềm</Link>
            <Link to='/'>Trường Đại học Công Nghệ Thông Tin</Link>
            <img src='/images/UIT-logo-60px.png' alt='UIT-logo' />
          </div>
        </div>
      </div>
      {/* Copyrights */}
      <section class='social-media'>
        <small class='website-rights'>DCE © 2021</small>
      </section>

    </div>
  );
}

export default Footer;

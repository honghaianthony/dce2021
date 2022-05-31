import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        {/* Logo and Social Networks */}
        <div className='footer-icons-wrapper'>
          <div className='footer-icons-items'>
            <img src="https://firebasestorage.googleapis.com/v0/b/dce2021.appspot.com/o/images%2F1639105423707-logoDCE.png?alt=media&token=05afc33e-ef75-4e9e-9247-a9c48f95bea4" alt='DCE-logo' className="dce-logo-large" />
            <h2 className="contact-us">Liên hệ với chúng tôi</h2>
            <div className="social-icons">
              <a href='https://www.facebook.com/' target="_blank" title='Facebook'>
                <img src='/images/facebook-logo-45px.png' />
              </a>
              <a href='https://www.instagram.com/' target="_blank" title='Instagram'>
                <img src='/images/instagram-logo-45px.png' />
              </a>
              <a href='https://twitter.com/' target="_blank" title='Twitter' >
                <img src='/images/twitter-logo-45px.png' />
              </a>
            </div>
          </div>
        </div>
        {/* Links and Credit */}
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Hỗ Trợ</h2>
            <Link to='/'>Hướng dẫn</Link>
            <Link to='/'>Câu hỏi thường gặp</Link>
            <Link to='/'>Mục tiêu</Link>
            <Link to='/supportus'>
              Ủng hộ chúng tôi
              <img src="/images/logo-momo-png-1.png" alt="momo" className='momo'/>
            </Link>
          </div>
          <div className='footer-link-items'>
            <h2>Liên Kết</h2>
            <Link to='/'>Trang chủ</Link>
            <Link to='/courses'>Khoá học</Link>
            <Link to='/'>Luyện tập</Link>
            <Link to='/'>Blog</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Nhóm 3</h2>
            <Link to='/'>Kỹ thuật phát triển hệ thống web</Link>
            <Link to='/'>Trường Đại học Công Nghệ Thông Tin</Link>
            <img src='/images/UIT-logo-60px.png' alt='UIT-logo' />
          </div>
        </div>
      </div>
      {/* Copyrights */}
      <section className='social-media'>
        <small className='website-rights'>DCE © 2021</small>
      </section>

    </div>
  );
}

export default Footer;

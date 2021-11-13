import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  // Hook: useState()
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //Hook: useEffect()
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            DCE
            <i class='fas fa-disease' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='./Home' className='nav-links' onClick={closeMobileMenu}>
                Trang chủ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='./'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Khoá học
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='./'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Luyện tập
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='./'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to='./Login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Đăng ký
              </Link>
            </li>
          </ul>
          <ul className="button-container">
            <li>
              <img src='/images/flag.png' alt='Ngôn ngữ'/>
            </li>
            <li>
              {button && <Button buttonStyle='btn--outline'>Đăng nhập</Button>}
            </li>
            <li>
              {button && <Button buttonStyle='btn--primary'>Đăng ký</Button>}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

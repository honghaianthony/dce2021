import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDetectClickOutside } from "react-detect-click-outside";
import * as BsIcons from 'react-icons/bs';
import './NavigationCensor.css';

function NavigationCensor() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [profileSelected, setProfileSelected] = useState(false);
  const closeDropDownProfileSelected = () => {
    setProfileSelected(false);
  };
  const refProfileSelected = useDetectClickOutside({
    onTriggered: closeDropDownProfileSelected,
  });
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="https://firebasestorage.googleapis.com/v0/b/dce2021.appspot.com/o/images%2F1639105423707-logoDCE.png?alt=media&token=05afc33e-ef75-4e9e-9247-a9c48f95bea4" className="dce-logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/HomeLogin' className='nav-links' onClick={closeMobileMenu}>
                Trang chủ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/courses'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Khoá học
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/exercises'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Luyện tập
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blogs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/censor'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Kiểm duyệt
              </Link>
            </li>
          </ul>
          <ul className="button-container">
            <li>
              <img src='/images/flag.png' alt='Ngôn ngữ' />
            </li>
            <li>
              <BsIcons.BsBell className="notification" />
            </li>
            <li
              className="profile"
              ref={refProfileSelected}
              onClick={() => {
                setProfileSelected(!profileSelected);
              }}>
              <img className="avatar" src='https://i.pinimg.com/564x/e6/4b/ec/e64beca1b9921925b59671bbf74b9837.jpg' />
              {profileSelected && (
                <div className="menu-starter">
                  <div className="menu">
                    <div className="options">
                      <Link to="/account">
                        <p> Thông tin của tôi </p>
                      </Link>
                      <Link to="/addblog" >
                        <p> Tạo bài blog</p>
                      </Link>
                      <Link to="/" >
                        <p> Tạo bài luyện tập</p>
                      </Link>
                      <span>
                        <p>Thoát</p>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationCensor;

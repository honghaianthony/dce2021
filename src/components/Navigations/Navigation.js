import React, { useState, useEffect } from "react";
import { Button } from "./Button/index";
import { Link } from "react-router-dom";
import "./Navigation.css";

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

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dce2021.appspot.com/o/images%2F1639105423707-logoDCE.png?alt=media&token=05afc33e-ef75-4e9e-9247-a9c48f95bea4"
              className="dce-logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/courses"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Khoá học
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/exercises"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Luyện tập
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Đăng ký
              </Link>
            </li>
          </ul>
          <ul className="button-container">
            <li>
              <img src="/images/flag.png" alt="Ngôn ngữ" />
            </li>
            <li>
              {button && <Button buttonStyle="btn--outline">Đăng nhập</Button>}
            </li>
            <li>
              {button && <Button buttonStyle="btn--primary">Đăng ký</Button>}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

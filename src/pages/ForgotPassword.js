import React from "react";
import "../assets/styles/ForgotPassword.css";
import { Helmet } from "react-helmet-async";

function ForgotPassword() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quên mật khẩu</title>
      </Helmet>
      <div className="ForgotPassword__container">
        <div className="ForgotPassword_content">
          <div className="Top_ForgotPassword_title">
            <span>Quên mật khẩu</span>
          </div>
          <div className="Top_ForgotPassword_title_line"></div>
          <div className="center_ForgotPassword_input">
            <form className="form_ForgotPassword">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Tên đăng nhập..."
                className="ForgotPassword_input"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com..."
                className="ForgotPassword_input"
                required
              />
            </form>
            <div className="submit__ForgotPassword">
              <input
                className="btn-submit-ForgotPassword"
                type="submit"
                value="Xác nhận tạo mật khẩu mới"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;

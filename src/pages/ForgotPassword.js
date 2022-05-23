import React, { useState, useEffect } from "react";
import "../assets/styles/ForgotPassword.css";
import authApi from "../apis/authApi";
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function ForgotPassword() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = async () => {
    const res = await authApi.forgotPassword({ email, userName });
    if (res.success) {
      toast.success("Mật khẩu mới đã được gửi qua mail của bạn", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        history.goBack();
      }, 2000);
    } else {
      toast.error("Thông tin không chính xác", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleGoBack = () => {
    history.goBack();
  };
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com..."
                className="ForgotPassword_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </form>
            <div className="submit__ForgotPassword">
              <input
                className="btn-submit-ForgotPassword"
                type="submit"
                value="Xác nhận tạo mật khẩu mới"
                onClick={handleSubmit}
              />
            </div>
            <div className="submit__ForgotPassword">
              <input
                className="btn-submit-GoBack"
                type="submit"
                value="Quay lại trang đăng nhập"
                onClick={handleGoBack}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="test">OKE KHÔNG!</button>
    </>
  );
}

export default ForgotPassword;

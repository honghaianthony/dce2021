import React, { useState, useEffect } from "react";
import "../assets/styles/ForgotPassword.css";
import authApi from "../apis/authApi";
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";

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
      <div className="forgot_pw_form_container">
        <div className="cover-screen"></div>
        <Form className="forgot_pw_form">
          <h2 className="mb-3">Lấy lại mật khẩu</h2>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Tên tài khoản lúc đăng ký"
              id="account"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email lúc đăng ký"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text>
              Hệ thống sẽ gửi mật khẩu mới cho bạn thông qua email này
            </Form.Text>
          </Form.Group>
          <Button variant="success" className="mb-3" onClick={handleSubmit}>
            Xác nhận lấy lại mật khẩu
          </Button>
          <Button variant="primary" onClick={handleGoBack}>
            Quay lại trang đăng nhập
          </Button>
        </Form>
      </div>
    </>

    /* <div className="ForgotPassword__container">
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
    </> */
  );
}

export default ForgotPassword;

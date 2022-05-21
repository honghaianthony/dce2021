import React, { useState } from "react";
import hinhlaptrinh from "../assets/images/background-login.png";
import { Link, useHistory } from "react-router-dom";
import { useStore, actions } from "../store";
import authApi from "../apis/authApi";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { toast } from "react-toastify";
import GoogleLogin from "react-google-login";

import "../assets/styles/Login.css";
function Login() {
  const [state, dispatch] = useStore();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const body = {
      userName: e.target.username.value,
      password: e.target.password.value,
    };
    const res = await authApi.postLogin(body);
    if (res.success) {
      toast.success("Đăng nhập thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        dispatch(actions.login(res.token));
      }, 2000);
    } else {
      toast.error("Đăng nhập thất bại !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleLoginGG = async (googleData) => {
    const res = await authApi.postGoogleLogin(googleData);
    console.log(res);
    dispatch(actions.login(res.token));
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Đăng nhập</title>
      </Helmet>
      {state.isAuthenticated ? (
        history.push("/home")
      ) : (
        <section className="login">
          <div className="background-img-screen"></div>
          <div className="cover-screen"></div>
          <Link to="/" className="btn_back_login">
            <button>Trở về trang chủ</button>
          </Link>
          <div className="form-content">
            <div className="form-content-top">
              <div className="login-text">
                <span>Đăng nhập</span>
              </div>
            </div>
            <form
              action=""
              method="POST"
              className="login-form"
              onSubmit={async (e) => {
                await handleLogin(e);
              }}
            >
              <div className="form-middle">
                <div className="from-group">
                  <label className="label-login" htmlFor="username">
                    Tên đăng nhập
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    name="username"
                    placeholder="Tên đăng nhập..."
                    id="user-name"
                    required
                  />
                </div>
                <div className="from-group">
                  <label
                    className="label-login label-password"
                    htmlFor="password"
                  >
                    Mật khẩu
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Mật khẩu..."
                    id="password"
                    required
                  />
                </div>
              </div>
              <div className="form-checked">
                <input
                  className="btn-checkbox-password"
                  type="checkbox"
                  name="check-password"
                  id="check-password"
                />
                <label className="check-password" htmlFor="check-password">
                  Lưu mật khẩu
                </label>
              </div>
              <div className="summit-container">
                <input
                  className="btn-submit-login"
                  type="submit"
                  value="Đăng nhập"
                />
                <div className="text-submit">
                  <p>Hoặc</p>
                  <p>đăng nhập bằng</p>
                </div>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Log in with Google"
                  onSuccess={handleLoginGG}
                  onFailure={handleLoginGG}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </form>
            <div className="form-bottom">
              <Link to="/forgotpassword" className="forgot-pass">
                Quên mật khẩu?
              </Link>
              <div className="become-member">
                <p>Chưa phải là thành viên?</p>
                <Link to="/register" className="sign-up-now">
                  Đăng ký ngay
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import "../assets/styles/Register.css";
import { useStore } from "../store";
import { Link, useHistory } from "react-router-dom";
import authApi from "../apis/authApi";
import { Helmet } from "react-helmet-async";
import hinhlaptrinh2 from "../assets/images/Hinhlaptrinh2.png";
import { toast } from "react-toastify";
function Register() {
  const [state] = useStore();
  const history = useHistory();
  const [confirmPass, setConfirmPass] = useState("");
  const [validPass, setValidPass] = useState(true);

  useEffect(() => {
    const pass = document.getElementById("password").value;
    if (confirmPass !== pass) {
      setValidPass(false);
    } else {
      setValidPass(true);
    }
  }, [confirmPass]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const body = {
      userName: e.target.username.value,
      password: e.target.password.value,
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      dateOfBirth: e.target.dateOfBirth.value,
    };
    console.log(body);
    if (validPass) {
      const res = await authApi.register(body);
      // dispatch(actions.login(res.token));
      toast.success("Đăng ký thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        history.push(`/login`)
      }, 2000);
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Đăng ký</title>
      </Helmet>
      {state.isAuthenticated ? (
        history.push("/")
      ) : (
        <div className="Register__container">
          <div className="cover-screen"></div>
          <div className="img-content-left_register">
            <Link to="/" className="btn_back_login">
              <button>Trở về trang chủ</button>
            </Link>
            <img src={hinhlaptrinh2} alt="Hình minh họa" />
          </div>
          <div className="Register_content">
            <div className="Top_Register_title">
              <span>Tạo Tài Khoản</span>
            </div>
            <div className="center_Register_input">
              <form className="form_register" onSubmit={handleRegister}>
                <div className="form_group">
                  <label
                    className="label-register_container"
                    htmlFor="firstname"
                  >
                    Họ
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Họ..."
                    className="register_input"
                  />
                  <label
                    className="label-register_container"
                    htmlFor="lastname"
                  >
                    Tên
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Tên..."
                    className="register_input"
                  />
                </div>
                <div className="form_group">
                  <label className="label-register_container" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com..."
                    className="register_input"
                  />
                </div>
                <div className="form_group">
                  <label className="label-register_container" htmlFor="phone">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Số điện thoại..."
                    className="register_input"
                  />
                </div>
                <div className="form_group">
                  <label
                    className="label-register_container"
                    htmlFor="Username"
                  >
                    Tên người dùng
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Tên người dùng..."
                    className="register_input"
                    required
                  />
                </div>
                <div className="form_group">
                  <label
                    className="label-register_container"
                    htmlFor="password"
                  >
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu..."
                    className="register_input"
                    required
                  />
                </div>
                <div className="form_group">
                  <label
                    className="label-register_container"
                    htmlFor="confirmpassword"
                  >
                    Nhập lại mật khẩu
                    {!validPass && <span>*Không khớp với mật khẩu</span>}
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Nhập lại Mật khẩu..."
                    className="register_input"
                    value={confirmPass}
                    onChange={(e) => {
                      setConfirmPass(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form_group">
                  <label
                    className="label-register_container"
                    htmlFor="dateOfBirth"
                  >
                    Ngày sinh
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className="register_input"
                  />
                </div>
                <div className="submit__register">
                  <input
                    className="btn-submit-register"
                    type="submit"
                    value="Đăng ký"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;

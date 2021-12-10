import React from "react";
import "../assets/styles/Register.css";
import { useStore, actions } from "../store";
import { useHistory } from "react-router-dom";
import authApi from "../apis/authApi";

function Register() {
  const [state, dispatch] = useStore();
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    const body = {
      userName: e.target.username.value,
      password: e.target.password.value,
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      dateOfBirth: "2021-12-10T02:31:07.457Z",
    };
    const res = await authApi.register(body);
    dispatch(actions.login(res.token));
  };
  return (
    <>
      {state.isAuthenticated ? (
        history.push("/")
      ) : (
        <div className="Register__container">
          <div className="Register_content">
            <div className="Top_Register_title">
              <span>Tạo Tài Khoản</span>
            </div>
            <div className="Top_Register_title_line"></div>
            <div className="center_Register_input">
              <form className="form_register" onSubmit={handleRegister}>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="họ..."
                  className="register_input"
                />
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="tên..."
                  className="register_input"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com..."
                  className="register_input"
                />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Số điện thoại..."
                  className="register_input"
                />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Tên người dùng..."
                  className="register_input"
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mật khẩu..."
                  className="register_input"
                  required
                />
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="Nhập lại Mật khẩu..."
                  className="register_input"
                  required
                />
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

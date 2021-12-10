import React from "react";
import "../assets/styles/Register.css";
import { useStore, actions } from "../store";
import { useHistory } from "react-router-dom";
import authApi from "../apis/authApi";
// import Hinhlaptrinh2 from "../assets/images/Hinhlaptrinh2.png"
import hinhlaptrinh2 from "../assets/images/Hinhlaptrinh2.png";
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
          <div className="img-content-left_register">
            <img src={hinhlaptrinh2} alt="Hình minh họa" />
          </div>
          <div className="Register_content">
            <div className="Top_Register_title">
              <span>Tạo Tài Khoản</span>
            </div>
            {/* <div className="Top_Register_title_line"></div> */}
            <div className="center_Register_input">
              <form className="form_register" onSubmit={handleRegister}>
                <div className="form_group">
                  <label className="label-register_container" for="firstname">
                      Họ
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="họ..."
                    className="register_input"
                  />
                  <label className="label-register_container" for="lastname">
                      Tên
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="tên..."
                    className="register_input"
                  />
                </div>
                {/* <div className="form_group">
                  
                </div> */}
                <div className="form_group">
                  <label className="label-register_container" for="email">
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
                  <label className="label-register_container" for="phone">
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
                  <label className="label-register_container" for="Username">
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
                  <label className="label-register_container" for="password">
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
                  <label className="label-register_container" for="confirmpassword">
                      Nhập lại mật khẩu
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Nhập lại Mật khẩu..."
                    className="register_input"
                    required
                  />
                </div>
                <div className="form_group">
                  <label className="label-register_container" for="dateOfBirth">
                      Ngày sinh
                  </label>
                  <input type="date" name="dateOfBirth" id="dateOfBirth" className="register_input"/>
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

import React, { useState, useEffect } from "react";
import "../assets/styles/Register.css";
import { useStore } from "../store";
import { Link, useHistory } from "react-router-dom";
import authApi from "../apis/authApi";
import { Helmet } from "react-helmet-async";
import hinhlaptrinh2 from "../assets/images/Hinhlaptrinh2.png";
import { toast } from "react-toastify";
import { Col, Row, Form, Button } from "react-bootstrap";
function Register() {
  const [state] = useStore();
  const history = useHistory();

  const [hidePW, setHidePW] = useState(true);
  const [error, setError] = useState({
    account: "",
    email: "",
    pw: "",
    cfPw: "",
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
  });
  const [input, setInput] = useState({
    account: "",
    email: "",
    pw: "",
    cfPw: "",
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
  });

  const handleBack = () => {
    history.goBack();
  };
  const handleChangeAccount = (e) => {
    if (!e.target.validity.valid) {
      e.target.className = "form-control invalid";
      if (e.currentTarget.value === "") {
        setError({ ...error, account: "Tài khoản không được để trống" });
      } else {
        setError({
          ...error,
          account: "Tài khoản không hợp lệ hoặc đã tồn tại",
        });
      }
    } else {
      e.target.className = "form-control valid";
      setError({
        ...error,
        account: "",
      });
    }
    setInput({ ...input, account: e.target.value });
  };
  const handleChangeEmail = (e) => {
    if (!e.target.validity.valid) {
      e.target.className = "form-control invalid";
      if (e.currentTarget.value === "") {
        setError({ ...error, email: "Email không được để trống" });
      } else {
        setError({
          ...error,
          email: "Email không hợp lệ hoặc đã tồn tại",
        });
      }
    } else {
      e.target.className = "form-control valid";
      setError({
        ...error,
        email: "",
      });
    }
    setInput({ ...input, email: e.target.value });
  };
  const handleChangePassword = (e) => {
    const temp = { ...error };
    if (!e.target.validity.valid) {
      e.target.className = "form-control invalid";
      if (e.target.value === "") {
        temp.pw = "Mật khẩu không được để trống";
      } else {
        temp.pw = "Mật khẩu quá yếu hãy thử lại mật khẩu khác";
      }
    } else {
      e.target.className = "form-control valid";
      temp.pw = "";
    }
    if (input.cfPw !== "") {
      if (e.target.value !== input.cfPw) {
        document.getElementById("cfPw").className = "form-control invalid";
        temp.cfPw = "Mật khẩu xác nhận không trùng khớp";
      } else {
        document.getElementById("cfPw").className = "form-control valid";
        temp.cfPw = "";
      }
    } else {
      document.getElementById("cfPw").className = "form-control";
      temp.cfPw = "";
    }
    setError({ ...temp });
    setInput({ ...input, pw: e.target.value });
  };
  const handleChangeCFPassword = (e) => {
    const temp = { ...error };
    if (e.target.value !== "") {
      if (e.target.value !== input.pw) {
        e.target.className = "form-control invalid";
        temp.cfPw = "Mật khẩu xác nhận không trùng khớp";
      } else {
        e.target.className = "form-control valid";
        temp.cfPw = "";
      }
    } else {
      e.target.className = "form-control";
      temp.cfPw = "";
    }
    setError({ ...temp });
    setInput({ ...input, cfPw: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      error.account == "" &&
      error.pw == "" &&
      error.cfPw == "" &&
      error.email == ""
    ) {
      const body = {
        userName: input.account,
        password: input.pw,
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phone: input.phone,
        dateOfBirth: input.dob,
      };
      const res = await authApi.register(body);
      toast.success("Đăng ký thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        history.push(`/login`);
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
        <div className="register_form_container">
          <div className="cover-screen"></div>
          <Form className="register_form">
            <h2>Đăng ký</h2>
            <h4 className="mb-3">Tài khoản</h4>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Tài khoản"
                required
                id="account"
                value={input.account}
                onChange={(e) => handleChangeAccount(e)}
              />
              <span>{error.account}</span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                required
                id="email"
                value={input.email}
                onChange={(e) => handleChangeEmail(e)}
              />
              <span>{error.email}</span>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type={`${hidePW ? "password" : "text"}`}
                placeholder="Mật khẩu"
                required
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                id="pw"
                value={input.pw}
                onChange={(e) => handleChangePassword(e)}
              />
              <span>{error.pw}</span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type={`${hidePW ? "password" : "text"}`}
                placeholder="Xác nhận mật khẩu"
                required
                id="cfPw"
                value={input.cfPw}
                onChange={(e) => handleChangeCFPassword(e)}
              />
              <span>{error.cfPw}</span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Hiện mật khẩu"
                onChange={() => setHidePW(!hidePW)}
              />
            </Form.Group>
            <h4 className="mb-3">Thông tin người dùng</h4>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Họ" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Tên" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control type="tel" placeholder="Số điện thoại" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Ngày sinh"
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => {
                  e.currentTarget.type = "text";
                  e.currentTarget.placeholder = "Ngày sinh";
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mb-3"
              onClick={handleRegister}
            >
              Đăng ký
            </Button>
            <Button variant="success" onClick={handleBack}>
              Đã có tài khoản, quay lại đăng nhập
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}
export default Register;

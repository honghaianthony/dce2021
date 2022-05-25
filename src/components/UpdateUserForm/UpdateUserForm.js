import React, { useState, useEffect } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { toast } from "react-toastify";
import usersApi from "../../apis/usersApi";

function ValidateEmail(inputText) {
  if (inputText === "") return true;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

function UpdateUserForm() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(async () => {
    const res = await usersApi.getMe();
    setUser(res.user.user);
    setEmail(res.user.user.email);
    return {};
  }, []);

  const handleSubmit = async () => {
    if (ValidateEmail(user.email) === false) {
      toast.warning("Email không hợp lệ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.dateOfBirth == "" ||
      user.phone == "" ||
      user.email == ""
    ) {
      toast.warning("Các trường thông tin không được để trống", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    const res = await usersApi.updateUserInfo(user);
    if (res.errCode === 1) {
      toast.warning("Email đã tồn tại", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res.errCode === 0) {
      toast.success("Cập nhật thông tin người dùng thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("token", res.token);
    }
  };
  return user !== null ? (
    <div className="col-md-8">
      <h3 class="mb-3">Cập nhật thông tin người dùng</h3>
      <FloatingLabel label="Họ" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Nguyễn"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
      </FloatingLabel>
      <FloatingLabel label="Tên" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Duy"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
      </FloatingLabel>
      <FloatingLabel label="Ngày sinh" className="mb-3">
        <Form.Control
          type="date"
          placeholder="01/01/0001"
          value={user.dateOfBirth}
          onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
        />
      </FloatingLabel>
      <FloatingLabel label="Số điện thoại" className="mb-3">
        <Form.Control
          type="text"
          placeholder="09xxxxxxxx"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
      </FloatingLabel>
      <FloatingLabel label="Email" className="mb-3">
        <Form.Control
          type="email"
          className={`${ValidateEmail(user.email) === false ? "invalid" : ""}`}
          placeholder="09xxxxxxxx"
          disabled={email !== ""}
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </FloatingLabel>
      <Button variant="primary" onClick={handleSubmit}>
        Câp nhật thay đổi
      </Button>
    </div>
  ) : (
    <div className="col-md-8">
      <div className="contain-loader">
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default UpdateUserForm;

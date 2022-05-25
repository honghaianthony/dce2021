import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import authApi from "../../apis/authApi";
import { toast } from "react-toastify";

function ChangePasswordForm(props) {
  const [showpass, setShowpass] = useState(false);
  const [dataP, setDataP] = useState({
    oldPass: "",
    newPass: "",
    confirmNP: "",
  });

  const handleSubmit = async () => {
    if (dataP.oldPass === "" || dataP.newPass == "" || dataP.confirmNP == "") {
      toast.warning("Các trường thông tin không được để trống", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    const res = await authApi.updatePassword(dataP);
    if (res.errCode === 0) {
      toast.success("Cập nhật mật khẩu mới thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res.errCode === 2) {
      toast.warning("Mật khẩu cũ không trùng khớp", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res.errCode === 1) {
      toast.warning("Mật khẩu xác nhận không trùng khớp", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className="col-md-8">
      <h3 class="mb-3">Cập nhật mật khẩu</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu cũ</Form.Label>
          <Form.Control
            type={showpass ? "text" : "password"}
            placeholder="Nhâp mật khẩu cũ"
            value={dataP.oldPass}
            onChange={(e) => setDataP({ ...dataP, oldPass: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu mới</Form.Label>
          <Form.Control
            type={showpass ? "text" : "password"}
            placeholder="Nhập mật khẩu mới"
            value={dataP.newPass}
            onChange={(e) => setDataP({ ...dataP, newPass: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Xác nhận mật khẩu</Form.Label>
          <Form.Control
            type={showpass ? "text" : "password"}
            placeholder="Xác nhận mật khẩu mới"
            value={dataP.confirmNP}
            onChange={(e) => setDataP({ ...dataP, confirmNP: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Hiện mật khẩu"
            onChange={() => setShowpass(!showpass)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Xác nhận đổi mật khẩu
        </Button>
      </Form>
    </div>
  );
}

export default ChangePasswordForm;

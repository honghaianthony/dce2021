import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Info.css";
import { useStore } from "../../../store";
import anh1 from "../../../assets/images/avata.jpg";
import usersApi from "../../../apis/usersApi";
import UserInfo from "../../UserInfo/UserInfo";
import ChangePasswordForm from "../../ChangePasswordForm/ChangePasswordForm";
import UpdateUserForm from "../../UpdateUserForm/UpdateUserForm";

function Info() {
  const [state, dispatch] = useStore();
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("view");

  return (
    <>
      <div className="container">
        <div className="user--profile">
          <div className="row">
            {/* ------------------------------BEN TRAI---------------------------------- */}
            <div className="col-md-4">
              <div className="user--profile-left">
                <ul className="user--profile--list-function">
                  <li className="active li">
                    <span
                      onClick={() => {
                        setStatus("view");
                      }}
                    >
                      Thông tin người dùng
                    </span>
                  </li>

                  <li
                    className={`li ${status === "edit" ? "on" : ""}`}
                    onClick={() => setStatus("edit")}
                  >
                    Cập nhật thông tin người dùng
                  </li>

                  <li
                    className={`li ${status === "change-password" ? "on" : ""}`}
                    onClick={() => setStatus("change-password")}
                  >
                    Đổi mật khẩu
                  </li>
                </ul>
              </div>
            </div>
            {/* ------------------------------------------BEN PHAI---------------------- */}
            {status === "view" && <UserInfo />}
            {status === "change-password" && (
              <ChangePasswordForm users={users} />
            )}
            {status === "edit" && <UpdateUserForm />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;

import React, { useState, useEffect } from "react";
import { useStore, actions } from "../../store";
import { Link } from "react-router-dom";
import usersApi from "../../apis/usersApi";

function UserInfo() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const res = await usersApi.getMe();
    setUser(res.user.user);
    return {};
  }, []);
  return user !== null ? (
    <div className="col-md-8 user--profile-right-container">
      <div className="user--profile-right">
        <div className="user--profile-group">
          <h2 className="user--profile-title-group">Thông tin</h2>

          <div className="row">
            <div className="col-md-8 col-xs-12">
              <div className="row">
                <div className="col-lg-3 col-sm-5 col-xs-12">
                  <div className="form-group">Họ</div>
                </div>

                <div className="col-lg-9 col-sm-8 col-xs-12">
                  <div className="form-group">
                    <div className="span-display">{user.lastName}</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-5 col-xs-12">
                  <div className="form-group">Tên</div>
                </div>

                <div className="col-lg-9 col-sm-8 col-xs-12">
                  <div className="form-group">
                    <div className="span-display">{user.firstName}</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-5 col-xs-12">
                  <div className="form-group">Ngày sinh</div>
                </div>

                <div className="col-lg-9 col-sm-8 col-xs-12">
                  <div className="form-group">
                    <div className="span-display">{user.dateOfBirth}</div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-sm-5 col-xs-12">
                  <div className="form-group">Số điện thoại</div>
                </div>

                <div className="col-lg-9 col-sm-8 col-xs-12">
                  <div className="form-group">
                    <div className="span-display">{user.phone}</div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-sm-5 col-xs-12">
                  <div className="form-group">Địa chỉ email</div>
                </div>

                <div className="col-lg-9 col-sm-8 col-xs-12">
                  <div className="form-group">
                    <div className="span-display">{user.email}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="ImgPreview">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/dce2021.appspot.com/o/images%2F1639215255401-Anonymous-Avatar.png?alt=media&token=be8c5e92-271b-4d0e-85ff-53ae1abfb6f8"
                  className="anh-thong-tin"
                  alt="Anh dai dien"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="col-md-8 col-md-8">
      <div className="contain-loader">
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default UserInfo;

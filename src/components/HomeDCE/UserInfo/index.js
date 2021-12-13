import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Info.css";
import { useStore } from '../../../store'
import anh1 from "../../../assets/images/avata.jpg";
// import usersApi from '../../../apis/usersApi'




function Info() {
  const [state, dispatch] = useStore();
  // const [users, setUsers] = useState([]);
  // useEffect(async () => {
  //   const res = await usersApi.getAllUsers();
  //   setUsers(res);
  // }, []);

  return (
    <>
      <div className="container">
        <div className="user--profile">
          <div className="row">
            {/* ------------------------------BEN TRAI---------------------------------- */}
            <div className="col-md-3">
              <div className="user--profile-left">
                <ul className="user--profile--list-function">
                  <li className="active" className="li">
                    <span>Thông tin liên hệ</span>
                  </li>

                  <li className="li">Đổi tên người dùng</li>

                  <li className="li">Đổi mật khẩu</li>
                </ul>
              </div>
            </div>
            {/* ------------------------------------------BEN PHAI---------------------- */}

            <div className="col-md-9 user--profile-right-container">
              <div className="user--profile-right">
                <div className="user--profile-group">
                  <h2 className="user--profile-title-group">Thông tin</h2>

                  <div className="row">
                    <div className="col-md-2 col-xs-12">
                      <div className="ImgPreview">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dce2021.appspot.com/o/images%2F1639215255401-Anonymous-Avatar.png?alt=media&token=be8c5e92-271b-4d0e-85ff-53ae1abfb6f8"
                          className="anh-thong-tin"
                          alt="Anh dai dien" />
                      </div>
                    </div>


                    <div></div>


                    <div className="col-md-9 col-xs-12">

                      <div className="row">
                        <div className="col-lg-3 col-sm-5 col-xs-12">
                          <div className="form-group">First Name</div>
                        </div>

                        <div className="col-lg-9 col-sm-8 col-xs-12">
                          <div className="form-group">
                            <div className="span-display">{state.firstName}</div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-sm-5 col-xs-12">
                          <div className="form-group">Last Name</div>
                        </div>

                        <div className="col-lg-9 col-sm-8 col-xs-12">
                          <div className="form-group">
                            <div className="span-display">{state.lastName}</div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-sm-5 col-xs-12">
                          <div className="form-group">Họ và tên</div>
                        </div>

                        <div className="col-lg-9 col-sm-8 col-xs-12">
                          <div className="form-group">
                            <div className="span-display">{state.fullName}</div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-sm-5 col-xs-12">
                          <div className="form-group">Ngày sinh</div>
                        </div>

                        <div className="col-lg-9 col-sm-8 col-xs-12">
                          <div className="form-group">
                            <div className="span-display">{state.dateOfBirth}</div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-sm-5 col-xs-12">
                          <div className="form-group">Số điện thoại</div>
                        </div>

                        <div className="col-lg-9 col-sm-8 col-xs-12">
                          <div className="form-group">
                            <div className="span-display">{state.phone}</div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-sm-5 col-xs-12">
                          <div className="form-group">Địa chỉ email</div>
                        </div>

                        <div className="col-lg-9 col-sm-8 col-xs-12">
                          <div className="form-group">
                            <div className="span-display">
                              {state.email}
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;

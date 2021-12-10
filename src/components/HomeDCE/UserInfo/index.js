import React from "react";
import "./Info.css";
import anh1 from "../../../assets/images/avata.jpg";
// import axiosInstance from "../../../apis/axiosInstance";


function Info() {
  // const [data, setData] = useState([]);
  // useEffect(async () => {
  //   const res = await axiosInstance();
  //   setData(res);
  // }, []);

  // const listAccount = () => {
  //   if (data.length > 0) {
  //     return data.map((item, index) => {
  //       let path = "/user/" + item.id;
  //       return (
  //         <>
  //           key = {index}
  //           src = {item.image}
  //           text = {item.firstName}
  //           text = {item.lastName}
  //           text = {item.phone}
  //           date = {item.dateOfBirth}
  //         </>

  //       );
  //     });
  //   } else {
  //     return <h2>Loading</h2>;
  //   }
  // };
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
                        <img src={anh1} alt="Anh dai dien" />
                      </div>
                    </div>

                    {/* <ul>{listAccount}</ul> */}

                    <div className="row">
                      <div className="col-lg-3 col-sm-4 col-xs-12">
                        <div className="form-group">First Name</div>
                      </div>

                      <div className="col-lg-9 col-sm-8 col-xs-12">
                        <div className="form-group">
                          <div className="span-display">Lunar</div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-sm-4 col-xs-12">
                        <div className="form-group">Last Name</div>
                      </div>

                      <div className="col-lg-9 col-sm-8 col-xs-12">
                        <div className="form-group">
                          <div className="span-display">Moon</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-9 col-xs-12">
                      <div className="row">
                        <div className="col-lg-3 col-sm-4 col-xs-12">
                          <div className="form-group">Họ và tên</div>
                        </div>

                        <div className="col-lg-9 col-sm-8 col-xs-12">
                          <div className="form-group">
                            <div className="span-display">Lunar Moon</div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-sm-4 col-xs-12">
                          <div className="form-group">Ngày sinh</div>
                        </div>

                        <div className="col-lg-9 col-sm-8 col-xs-12">
                          <div className="form-group">
                            <div className="span-display">8-9-2001</div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-sm-4 col-xs-12">
                          <div className="form-group">Số điện thoại</div>
                        </div>

                        <div className="col-lg-9 col-sm-8 col-xs-12">
                          <div className="form-group">
                            <div className="span-display">0386183947</div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-sm-4 col-xs-12">
                          <div className="form-group">Địa chỉ email</div>
                        </div>

                        <div className="col-lg-9 col-sm-8 col-xs-12">
                          <div className="form-group">
                            <div className="span-display">
                              MoonLunar8901@gmail.com
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

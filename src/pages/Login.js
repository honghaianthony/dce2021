// import React from 'react'
import React, { useState } from 'react'
import hinhlaptrinh from '../assets/images/background-login.png'
import "./Login.css"
function Login () {
    const [isCreateAccount, setIsCreateAccount] = useState(false)

    const toggleCreateAccount = () => {
      setIsCreateAccount(!isCreateAccount);
    }
    return (
        <section className="login">
            <div className="img-content-left">
                <img src={hinhlaptrinh} alt="Hình minh họa" />
            </div> 
            {/* {!isCreateAccount && ( */}
                <div className="form-content">
                    <div className="form-content-top">  
                        <div className="login-text">
                            <span>Đăng nhập</span>
                        </div>
                    </div>
                    <form action="" method="POST" className="login-form">
                    <div className="form-middle">
                        <div className="from-group">
                            <label className="label-login" for="user-name">Tên đăng nhập</label>
                            <input className="form-input" type="text" name="user-name" placeholder="Tên đăng nhập..." id="user-name" required/>
                        </div>
                        <div className="from-group">
                            <label className="label-login label-password" for="password">Mật khẩu</label>
                            <input className="form-input" type="password" name="password" placeholder="Mật khẩu..." id="password" required/>
                        </div>
                    </div>
                    </form>
                    <div className="form-checked">
                        <input className="btn-checkbox-password" type="checkbox" name="check-password" id="check-password" />
                        <label className="check-password" htmlFor="check-password">Lưu mật khẩu</label>
                    </div>
                    <div className="summit-container">
                        <input className="btn-submit-login"type="submit" value="Đăng nhập" />
                        <div className="text-submit">
                            <p>Hoặc</p>
                            <p>đăng nhập bằng</p>
                        </div>
                            <input className="btn-submit-google" type="submit" value="Google" />
                    </div>
                    <div className="form-bottom">
                        <div className="forgot-pass">
                            <a  href="#">Quên mật khẩu?</a>
                        </div>
                        <div className="become-member">
                            <p>Chưa phải là thành viên?</p>
                            <a href="#" className="sign-up-now" onClick={toggleCreateAccount}>Đăng ký ngay</a>
                        </div>
                    </div>
                </div>
                {/* )} */}
             {/* pop up create account */}
             {/* {isCreateAccount && (
                <div className="modal">
                    <div className="login-overlay" onClick={toggleCreateAccount}></div>
                    <div className="register-form">
                        <div className="register-title">Đăng ký</div>
                        <form action="/register" method="POST">

                        </form>
                    </div>
                    
                </div>
                )} */}
        </section>
        
    )
}

export default Login;
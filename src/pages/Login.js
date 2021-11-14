import React from 'react'
import hinhlaptrinh from '../assets/images/background-login.png'
import "./Login.css"
function Login () {
    return (
        <section className="login">
            <div className="img-content-left">
                <img src={hinhlaptrinh} alt="Hình minh họa" />
            </div> 
            <div className="form-content">
                <div className="form-content-top">
                    
                    <div className="login-text">
                        <span>Đăng nhập</span>
                    </div>
                </div>
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
                        <a href="#" className="sign-up-now">Đăng ký ngay</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
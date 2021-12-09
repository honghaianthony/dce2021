import React from 'react'
import '../assets/styles/Register.css'
function Register() {
    return (
        <div className="Register__container">
            <div className="Register_content">
                <div className="Top_Register_title">
                    <span>Tạo Tài Khoản</span>
                </div>
                <div className="Top_Register_title_line">

                </div>
                <div className="center_Register_input">
                    <form className='form_register'>
                            <input 
                            type="text" 
                            name="firstname"
                            id="firstname"
                            placeholder="họ..."
                            className='register_input'
                            />
                            <input 
                            type="text" 
                            name="lastname"
                            id="lastname"
                            placeholder="tên..."
                            className='register_input'
                            />
                            <input 
                            type="email" 
                            name="email"
                            id="email"
                            placeholder="example@gmail.com..."
                            className='register_input'

                            />
                            <input 
                            type="text" 
                            name="phone"
                            id="phone"
                            placeholder="Số điện thoại..."
                            className='register_input'

                            />
                            <input 
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Tên người dùng..."
                            className='register_input'
                            required
                            />
                            <input 
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Mật khẩu..."
                            className='register_input'
                            required
                            />
                            <input 
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            placeholder="Nhập lại Mật khẩu..."
                            className='register_input'
                            required
                            />
                    </form>
                    <div className="submit__register">
                           <input className="btn-submit-register"type="submit" value="Đăng ký" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

import react from "react";
import "./Banner.css";
function Banner()
{
    return(
       <section className="Banner">
           <div className="Banner-content">
               <p className="title">HIỆN THỰC ĐAM MÊ <span>LẬP TRÌNH</span>!</p>
               <p className="banner-text">Đăng ký tài khoản và tham gia ngay hôm nay</p>
           </div>
           <div className="Banner-button">
               <button classname="Banner-btn"src="#">Bắt đầu ngay!</button>
           </div>
       </section>
    )
}
export default Banner;
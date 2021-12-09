import react from "react";
import "./Talkabout.css"
import { useState } from 'react';
function Talkabout() {
    const users =
        [
            {
                id: 0,
                avt: 'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png',
                name: 'Ngọc Giao',
                job: 'Sinh viên',
                age: '20',
                think: 'Web thật tuyệt vời'
            },
            {
                id: 1,
                avt: 'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png',
                name: 'Hải Đăng',
                job: 'Sinh viên',
                age: '20',
                think: 'Tôi thật sự thích trang web này.'
            },
            {
                id: 2,
                avt: 'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png',
                name: 'Tiến Dũng',
                job: 'Sinh viên',
                age: '20',
                think: 'Tôi thấy trang web này quá tốt giúp ta cải thiện kỹ năng lập trình.'
            }
        ]
    /*const [current, setCurrent] = useState(0);
    const lenght = users.length;
    const lastslide = current;
    /*const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1)
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? lenght - 1 : current - 1)
    };
    if (!Array.isArray(users) || lenght <= 0) {
        return null;
    }*/
    
    return (
        <div id="Slider">
            <div className="Slider-title">
                <h2>Học viên nói gì về CDE?</h2>
            </div>
            <div className="Slider-main">
                {users.map((user) => {
                    const { avt, name, job, think } = user;
                    return (                           
                                <div className="Slide">
                                    <div className="Slider-item-avt">
                                        <img src={user.avt} />
                                    </div>
                                    <div className="user-talk">
                                        <p className="Slider-item-name">{user.name}</p>
                                        <p className="Slider-item-job">{user.job}</p>
                                        <p className="Slider-item-think">" {user.think} "</p>
                                    </div>
                                </div>
                    )})
                }
            </div>
        </div>
    )
}
export default Talkabout;
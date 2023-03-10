import React from "react";
import ExercisesCensor from "../components/Censor/ExerciseCensorTable";
import BlogCensor from "../components/Censor/BlogCensorTable";
import "../components/Censor/Censor.css"
import CensorLayout from "../layouts/CensorLayout"
import { FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom"

function Censor() {
    return (
        <CensorLayout>
            <div className='censor'>
                <div className='censor-path'>
                    <Link to='/' className='censor-link'>
                        <span>Trang chủ </span>
                    </Link>
                    <i className='icon-angle-right'><FaAngleRight /></i>
                    <Link to='/censor' className='censor-link'>
                        <span> Kiểm duyệt</span>
                    </Link>
                </div>
                <div className='censor-container'>
                    <h2 className='censor-title'>Kiểm duyệt bài luyện tập</h2>
                    <ExercisesCensor />
                    <h2 className='censor-title'>Kiểm duyệt bài blog</h2>
                    <BlogCensor />
                </div>
            </div>
        </CensorLayout>
    )
}

export default Censor;
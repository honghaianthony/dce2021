import React from 'react'
import { Link } from 'react-router-dom'
import './Roadmap.css'

function Roadmap() {
    return (
        <div className='roadmap-container'>
            <h2 className='roadmap-title'>Lộ trình để trở thành<br/>Lập Trình Viên</h2>
            <div className='roadmap-row'>
                <Link to='/' className='roadmap-step'>
                    <div className='roadmap-step-img'>
                        <span className='roadmap-label-step'>1</span>
                        <img src='/images/home/home-roadmap-step1.png' alt='Learn to code'/>
                    </div>
                    <h3 className='roadmap-step-title'>Học lập trình</h3>
                    <p className='roadmap-step-des'>Học lập trình từ cơ bản đến nâng cao qua các khóa học.</p>
                </Link>

                <Link to='/' className='roadmap-step'>
                    <div className='roadmap-step-img'>
                        <span className='roadmap-label-step'>2</span>
                        <img src='/images/home/home-roadmap-step2.png' alt='Practice coding'/>
                    </div>
                    <h3 className='roadmap-step-title'>Luyện kỹ năng</h3>
                    <p className='roadmap-step-des'>Luyện tập lập trình hàng ngày cùng với chuyên mục luyện tập.</p>
                </Link>

                <Link to='/blogs' className='roadmap-step'>
                    <div className='roadmap-step-img'>
                        <span className='roadmap-label-step'>3</span>
                        <img src='/images/home/home-roadmap-step3.png' alt='Share'/>
                    </div>
                    <h3 className='roadmap-step-title'>Tìm hiểu thêm</h3>
                    <p className='roadmap-step-des'>Tìm hiểu kỹ năng lập trình thông qua chia sẻ từ mọi người.</p>
                </Link>
            </div>
        </div>
    )
}

export default Roadmap

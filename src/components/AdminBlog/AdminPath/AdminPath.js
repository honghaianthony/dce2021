import React from 'react';
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa';
import './AdminPath.css';

function AdminPath() {
    return (
        <div className='admin-path'>
            <Link to='/' className='admin-link'>
                <span>Trang chủ</span>
            </Link>
            <i className='icon-angle-right'><FaAngleRight/></i>
            <Link to='/adminbloglist' className='admin-link'>
                <span>Quản lý blog</span>
            </Link>
        </div>
    );
}

export default AdminPath;
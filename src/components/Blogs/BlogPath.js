import React from 'react';
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa';
import './BlogPath.css';

function BlogPath() {
    return (
        <div className='blogs-path'>
            <Link to='/' className='blogs-link'>
                <span>Trang chủ</span>
            </Link>
            <i className='icon-angle-right'><FaAngleRight/></i>
            <Link to='/blogs' className='blogs-link'>
                <span>Blogs</span>
            </Link>
        </div>
    );
}

export default BlogPath;
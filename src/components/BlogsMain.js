import React from 'react';
import { Link } from 'react-router-dom'
import { FaAngleRight, FaSistrix } from 'react-icons/fa';
import './BlogsMain.css';
import BlogItem from './BlogItem';

function BlogsMain() {
    return (
        <div className='blogs-container'>
            <div className='blogs-path'>
                <Link to='/' className='blogs-link'>
                    <span>Trang chủ</span>
                </Link>
                <i className='icon-angle-right'><FaAngleRight/></i>
                <Link to='/blogs' className='blogs-link'>
                    <span>Blogs</span>
                </Link>
            </div>
            <div className='blogs-search'>
                <form className='form-search' action='/action_page.php'>
                    <input className='form-control' type='text' placeholder='Nhập nội dung tìm kiếm' name='search'/>
                    <span className='icon-search' type='submit'><i className='icon-fa-search'><FaSistrix/></i></span>
                </form>
            </div>
            <div className='blog-list'>
                <div className='blog-feature'>
                    <div className='blog-feature-item'>
                        <BlogItem
                            src='/images/blogs/blog-feature-img.jpg'
                            title='Cài Đặt Visual Studio Code Lập Trình C++ Dễ Như Ăn Kẹo'
                            description='Mình đã từng viết một hướng dẫn cài Vscode để lập trình C++ nhưng cách đó có vẻ gây khó khăn cho các bạn khi thực hiện. Hôm nay mình viết một hướng dẫn khác dễ hơn cho các bạn có thể thực hiện dễ dàng'
                            author='Nguyễn Văn A'
                            time='28/10/2021'
                            view='134'
                            path='/'
                        />
                    </div>
                </div>
                <div className='blog-trend'>
                    <h3 className='blog-category'>Xu hướng</h3>
                    <div className='blog-trend-items'>
                        <BlogItem
                            src='/images/blogs/blog-trend-img1.jpg'
                            title='6 Dấu Hiệu Cho Thấy Bạn Code Rất Tệ!'
                            description='Hôm qua, tôi đã đọc một bài viết rất dài và giá trị của Daryll Santos trên Github và sẽ tóm lược một số thông tin chính và quan trọng dưới đây, về 6 dấu hiệu của một LTV tồi.'
                            author='Nguyễn Văn A'
                            time='21/10/2021'
                            view='102'
                            path='/'
                        />
                        <BlogItem
                            src='/images/blogs/blog-trend-img2.jpg'
                            title='Rè-viu 5 phút: Các mẫu kiến trúc phần mềm không thể bỏ qua'
                            description='Tại sao bạn nên học các Mẫu kiến trúc cơ bản như một Kỹ sư phần mềm? Tôi tin rằng có rất nhiều câu trả lời cho câu hỏi này, nhưng tôi sẽ đưa ra một vài lý do để bạn cân nhắc.'
                            author='Nguyễn Văn A'
                            time='06/10/2021'
                            view='183'
                            path='/'
                        />    
                        <BlogItem
                            src='/images/blogs/blog-trend-img3.jpg'
                            title='Hãy Hạn Chế Dùng Boxing, Unboxing Trong C#'
                            description='Khi làm việc với C#, vấn đề sẽ xảy ra khi bạn dùng các collection này để lưu trữ kiểu dữ liệu nguyên thủy (int, double,...) vì khi đó sẽ xảy ra quá trình boxing/unboxing.'
                            author='Nguyễn Văn A'
                            time='05/10/2021'
                            view='145'
                            path='/'
                        />  
                    </div>
                </div>
                <div className='blog-new'>
                    <h3 className='blog-category'>Bài viết mới</h3>
                    <div className='blog-new-item'>
                        <BlogItem
                            src='/images/blogs/blog-new-img1.jpg'
                            title='Giải Mã Lời Gọi Hàm std::sort() Trong C++'
                            description='Bài viết nói về thuật toán Intro Sort - thuật toán được sử dụng trong thư viện chuẩn STL trong C++.'
                            author='Nguyễn Văn A'
                            time='28/09/2021'
                            view='98'
                            path='/'
                        /> 
                        <BlogItem
                            src='/images/blogs/blog-new-img2.jpg'
                            title='Kỹ Năng Viết Có Quan Trọng Đối Với Lập Trình Viên'
                            description='“Những kỹ sư phần mềm khi mới vào nghề, họ dành đến 30% thời gian trong ngày dùng cho việc viết lách. Còn những Kỹ sư làm công tác quản lý cấp trung, họ viết hết 50% đến 70% thời gian trong ngày.'
                            author='Nguyễn Văn A'
                            time='25/09/2021'
                            view='116'
                            path='/'
                        /> 
                        <BlogItem
                            src='/images/blogs/blog-new-img3.jpg'
                            title='Tất Tần Tật Về Block Cipher'
                            description='Sơ lược về lớp hệ thống crypto block cipher - một lớp hệ thống thông dụng hơn stream cipher ngày nay.'
                            author='Nguyễn Văn A'
                            time='12/09/2021'
                            view='147'
                            path='/'
                        /> 
                        <BlogItem
                            src='/images/blogs/blog-new-img4.jpg'
                            title='Stream Cipher Và Pseudo Random Number Generator'
                            description='Sơ lược về một lớp cryptosystem hiện đại, và cách thức vận hành đằng sau những hệ thống này.'
                            author='Nguyễn Văn A'
                            time='08/09/2021'
                            view='175'
                            path='/'
                        /> 
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default BlogsMain;
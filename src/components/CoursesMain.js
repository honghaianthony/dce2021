import React,{useEffect, useState} from 'react';
import './Courses.css';
import CourseItem from './CourseItem';
import SearchFilter from "../components/SearchFilter";
import coursesApi from '../apis/coursesApi';

function CoursesMain() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const res = await coursesApi.getAllCourses('ALL');
    setData(res);
  }, [])
  return (
    <>

      <div className="head__background">
        <div className="courses__head">
          <div className="courses__head__container">

            <h2>Tự học lập trình trực tuyến. Hãy bắt đầu với khoá học đầu tiên của bạn!</h2>
            <SearchFilter placeholder="Nhập khoá học cần tìm" className='courses-search' />

          </div>
          <img
              className='decor__img'
              src='/images/courses/decor.png'
          />

        </div>

      </div>

      <div className='courses'>
        <div className='courses__container'>
          <div className='courses__wrapper'>
            <ul className='courses__items'>
              <CourseItem
                src='/images/courses/img-1.png'
                text='Lập trình hướng đối tượng trong C++'
                rating=''
                description='Khóa học C++ OOP giúp các lập trình viên học được kỹ thuật lập trình mà tất cả logic, yêu cầu thực tế đều được xây dựng xoay quanh các đối tượng. Hiểu được cách thức hoạt động của C++ OOP sẽ làm đơn giản hóa việc bảo trì và dễ dàng mở rộng trong việc thiết kế phần mềm.'
                path='/' />
              <CourseItem
                src='/images/courses/img-2.png'
                text='Truyền thông và Mạng máy tính'
                description='Khóa học cung cấp cho lập trình viên những kiến thức cơ bản và dễ hiểu về mạng máy tính và truyền thông dữ liệu. '
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-3.png'
                text='Phần mềm máy tính'
                description='Phần mềm luôn là công cụ cần thiết trong mọi lĩnh vực, khóa học này sẽ giúp bạn hiểu được các khái niệm về phần mềm và các phần mềm phổ biến hiện nay.'
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-4.png'
                text='Phần cứng máy tính'
                description='Khóa học này tập trung vào việc cung cấp các kiến thức chung về các bộ phận của máy tính để bạn có thể áp dụng vào việc lựa chọn và sử dụng máy tính.'
                rating=''
                path='/' />
            </ul>
            <ul className='courses__items'>
              <CourseItem
                src='/images/courses/img-5.png'
                text='C cho người mới bắt đầu'
                description='Khóa học lập trình C cho người mới bắt đầu. Khóa học này sẽ cung cấp những kiến thức cơ bản và là nền tảng để bạn đi xa hơn trên con đường lập trình.'
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-6.png'
                text='C++ cho người mới bắt đầu'
                description='Khóa học lập trình C++ cơ bản cho người mới bắt đầu. Khóa học này sẽ cung cấp những kiến thức cơ bản, dễ hiểu nhất về ngôn ngữ lập trình C++.'
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-7.png'
                text='Làm quen với SQL'
                description='Khóa học này sẽ giúp các lập trình viên nắm được nguyên tắc, cú pháp và cách thức hoạt động của SQL (Structured Query Language).'
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-8.png'
                text='Javascript căn bản'
                description='Giúp học viên nắm vững các nguyên tắc và cú pháp cơ bản trong Javascript - ngôn ngữ lập trình phổ biến nhất trên thế giới.'
                rating=''
                path='/' />
            </ul>
            <ul className='courses__items'>
              <CourseItem
                src='/images/courses/img-9.png'
                text='Thực hành với SQL'
                description='Khóa học này sẽ giúp bạn biết về một số chức năng chính cần thiết để sắp xếp, lọc và phân loại thông tin trong cơ sở dữ liệu quan hệ, mở rộng bộ công cụ SQL của bạn và giúp bạn có khả năng giải quyết các vấn đề phức tạp hơn thông qua bộ công cụ này. Yêu cầu: Bạn cần hoàn thành khóa Làm quen với SQL để có kiến thức cơ bản trước khi'
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-10.png'
                text='Cấu trúc dữ liệu và giải thuật'
                description='Khóa học này sẽ giúp các bạn hiểu thuật toán cũng như hiểu rõ bản chất của các cấu trúc dữ liệu - điều kiện để trở thành lập trình viên giỏi.'
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-11.png'
                text='Lập trình hướng đối tượng trong Java'
                description='Lập trình hướng đối tượng (Object-Oriented-Programming) là phương pháp lập trình dựa trên đối tượng để tìm ra bản chất của vấn đề. Khóa học Java OOP giúp các lập trình viên học được kỹ thuật lập trình mà tất cả logic, yêu cầu thực tế đều được xây dựng xoay quanh các đối tượng. Hiểu được cách'
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-12.png'
                text='C++ nâng cao'
                description='Khóa học lập trình C++ nâng cao sẽ giúp bạn hiểu sâu hơn về C++ với một số khái niệm như con trỏ, mảng, cấp phát bộ nhớ động, struct, ...'
                rating=''
                path='/' />
            </ul>
            <ul className='courses__items'>
              <CourseItem
                src='/images/courses/img-13.png'
                text='Thuật toán nâng cao'
                description='Giúp lập trình viên cải thiện khả năng lập trình với những thuật toán mạnh mẽ để giải quyết các bài toán lập trình phức tạp.'
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-14.png'
                text='Thuật toán căn bản'
                description='Với khóa học thuật toán cơ bản, bạn sẽ học được cách tư duy và giải quyết các bài toán lập trình cơ bản mà một lập trình viên cần có.'
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-15.png'
                text='Thư viện chuẩn C++'
                description='Thư viện chuẩn luôn là thứ không thể thiếu đối với một ngôn ngữ lập trình, khóa học này sẽ giúp bạn thành thạo các thư viện hay được sử dụng trong C++.'
                rating=''
                path='/' />
              <CourseItem
                src='/images/courses/img-16.png'
                text='Điện toán đám mây'
                description='Khóa học sẽ cung cấp cái nhìn cơ bản và tổng quan về lĩnh vực điện toán đám mây và các công nghệ điện toán đám mây nổi bật.'
                rating=''
                path='/' />
            </ul>
          </div>
        </div>
      </div></>
  );
}

export default CoursesMain;

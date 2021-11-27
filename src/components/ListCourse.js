import React from 'react'
import './ListCourse.css'
import CourseItemInfo from './CourseItemInfo'
function ListCourse() {
    const courses=
    [
        {
            id:'1',
            title:'Lớp và Đối Tượng',
            decription:'Ngôn ngữ C++ được phát triển từ C lên, nó được bổ sung thêm tính hướng đối tượng. Các lớp (class) là tính năng trung tâm của C++ mà hỗ trợ lập trình hướng đối tượng và thường được gọi là các kiểu người dùng tự định nghĩa'
        },
        {
            id:'2',
            title:'Biến Tĩnh Và Phương Thức Tĩnh',
            decription:'Biến tĩnh (static variables) là biến được tạo ra duy nhất một lần khi gọi hàm lần đầu tiên và nó sẽ tiếp tục tồn trong suốt vòng đời của chương trình. Đây là sự khác biệt giữa biến tĩnh và biến cục bộ.'
        },
        {
            id:'3',
            title:'Tính Đóng gói',
            decription:'Tính đóng gói - Data encapsulation là một kỹ thuật đóng gói dữ liệu, và các hàm mà sử dụng chúng và trừu tượng hóa dữ liệu là một kỹ thuật chỉ trưng bày tới các Interface và ẩn Implementation Detail (chi tiết trình triển khai) tới người sử dụng.'
        },
        {
            id:'4',
            title:'Tính Kế Thừa',
            decription:'Tính kế thừa là một trong những đặc tính quan trọng nhất của lập trình hướng đối tượng. Nó là khả năng lấy một thuộc tính, đặc tính của một lớp cha để áp dụng lên lớp con.'
        },
        {
            id:'5',
            title:'Tính Đa Hình Kế Thừa',
            decription:'Đa hình (polymorphism) nghĩa là có nhiều hình thái khác nhau. Tiêu biểu là, đa hình xuất hiện khi có một cấu trúc cấp bậc của các lớp và chúng là liên quan với nhau bởi tính kế thừa.'
        },
        {
            id:'6',
            title:'Mối Quan Hệ Giữa Các Đối Tượng',
            decription:'Quan hệ một một (1-1), quan hệ một nhiều(1-n), quan hệ nhiều nhiều'
        },
        {
            id:'7',
            title:'Bài Tập Trắc Nghiệm',
            decription:'Bài tập này sẽ đưa ra các bài trắc nghiệm để kiểm tra mức độ hiểu biết của bạn.'
        },
        {
            id:'8',
            title:'Bài Tập Rèn Luyện',
            decription:'Bài tập này sẽ đưa ra các bài tập ứng dụng để kiểm tra mức độ hiểu biết của bạn và ứng dụng kiến thức đó vào bài tập.'
        }
    ]
    return (
        <div className="ListCourse__Container">
            {
                courses.map(
                    (CourseItem=>(
                        <CourseItemInfo className="CourseItemInfo"
                            key={CourseItem.id}
                            title={CourseItem.title}
                            decription={CourseItem.decription}
                        />
                    ))
                )
            }
        </div>
    )
}

export default ListCourse

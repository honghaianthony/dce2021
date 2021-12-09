import React from "react";
import { Link } from "react-router-dom";
import "./CourseListTable.css"

function CourseListTable( {coursedata}) {
    return (
        <div className="listtable-container">
            <table className="listtable">
                <thead className="listtable-header">
                    <tr className="listtable-row">
                        <th>ID</th>
                        <th>Tên khoá học</th>
                        <th>Admin</th>
                        <th>Ngày tạo</th>
                        <th>Update</th>
                        <th>Xem</th>
                    </tr>
                </thead>

                <tbody className="listtable-body">
                    {/* {coursedata.map((coursedata) => (
                        <tr>
                            <td>{coursedata.id}</td>
                            <td>{coursedata.name}</td>
                            <td>
                                <p>vietcv</p>
                            </td>
                            <td>02/10/2021</td>
                            <td>02/10/2021</td>
                            <td>
                                <Link to='./'>
                                    <button className='view-btn'>
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))} */}

                    <tr>
                        <td>1</td>
                        <td>Lập trình hướng đối tượng trong C++</td>
                        <td>
                            <p>nnkd</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Truyền thông và Mạng máy tính</td>
                        <td>
                            <p>nnmc</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Phần mềm máy tính</td>
                        <td>
                            <p>dnhh</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Phần cứng máy tính</td>
                        <td>
                            <p>tbc</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>C cho người mới bắt đầu</td>
                        <td>
                            <p>tng</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>C++ cho người mới bắt đầu</td>
                        <td>
                            <p>dkd</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Làm quen với SQL</td>
                        <td>
                            <p>van</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Javascript căn bản</td>
                        <td>
                            <p>nva</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Python cơ bản</td>
                        <td>
                            <p>nnmc</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>C# cơ bản</td>
                        <td>
                            <p>nnkd</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CourseListTable;
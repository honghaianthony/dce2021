import React from "react";
import { Link } from "react-router-dom";
import "./BlogListTable.css"

function BlogListTable({ coursedata }) {
    return (
        <div className="listtable-container">
            <table className="listtable">
                <thead className="listtable-header">
                    <tr className="listtable-row">
                        <th>ID</th>
                        <th>Tên Blog</th>
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
                        <td>Lập trình hướng đối tượng trong C++ khó không??</td>
                        <td>
                            <p>Lunar Moon</p>
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
                        <td>Truyền thông và Mạng máy tính là gì??</td>
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
                            <p>Lunar Moon</p>
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
                        <td>Sự thú vị của phần cứng máy tính</td>
                        <td>
                            <p>Lunar Moon</p>
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
                        <td>C nên bắt đầu code như thế nào?</td>
                        <td>
                            <p>Lunar Moon</p>
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
                        <td>C++ không hề khó</td>
                        <td>
                            <p>Lunar Moon</p>
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
                        <td>SQL và MySQL có gì khác nhau?</td>
                        <td>
                            <p>Lunar Moon</p>
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
                        <td>Javascript căn bản rất đơn giản</td>
                        <td>
                            <p>Lunar Moon</p>
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
                        <td>Python cơ bản rất đơn giản</td>
                        <td>
                            <p>Lunar Moon</p>
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
                        <td>C# cơ bản rất đơn giản</td>
                        <td>
                            <p>Lunar Moon</p>
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

export default BlogListTable;
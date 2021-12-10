import React, {useEffect, useState} from "react";
import "./BlogCensorTable.css";
import { Link } from 'react-router-dom';

function BlogCensor( { blogdata }) {
    return (
        <div className="blogtable-container">
            <table className="blogtable">
                <thead className="blogtable-header">
                    <tr className="blogtable-row">
                        <th>STT</th>
                        <th>Tên bài blog</th>
                        <th>Tác giả</th>
                        <th>Ngày gửi</th>
                        <th>Xem</th>
                        <th>Duyệt</th>
                    </tr>
                </thead>

                <tbody className="blogtable-body">
                    {/* {blogdata.map((blogdata) => (
                        <tr>
                            <td>{blogdata.id}</td>
                            <td>{blogdata.name}</td>
                            <td>
                                <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                                <p>vietcv</p>
                            </td>
                            <td>02/10/2021</td>
                            <td>
                                <Link to='./'>
                                    <button className='view-btn'>
                                        Xem chi tiết
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <Link to='/' className='check'>
                                    <i className="fas fa-check-circle"></i>
                                </Link>
                            </td>
                        </tr>
                    ))} */}

                    <tr>
                        <td>1</td>
                        <td>Cách không bị stress</td>
                        <td>
                            <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                            <p className='blog-author'>vietcv</p>
                        </td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                        <td>
                            <Link to='/' className='check'>
                                <i className="fas fa-check-circle"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>DISC bí kíp giao tiếp trong làm việc nhóm</td>
                        <td>
                            <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                            <p className='blog-author'>Fsoft_LongVH13</p>
                        </td>
                        <td>04/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                        <td>
                            <Link to='/' className='check'>
                                <i className="fas fa-check-circle"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Lỗi ngớ ngẩn trong lập trình C++</td>
                        <td>
                            <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                            <p className='blog-author'>MinhNguyet</p>
                        </td>
                        <td>05/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                        <td>
                            <Link to='/' className='check'>
                                <i className="fas fa-check-circle"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Ngôn ngữ lập trình là tất cả đối với Development?</td>
                        <td>
                            <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                            <p className='blog-author'>vietcv</p>
                        </td>
                        <td>05/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                        <td>
                            <Link to='/' className='check'>
                                <i className="fas fa-check-circle"></i>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cách nấu ăn ngon</td>
                        <td>
                            <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                            <p className='blog-author'>vietcv</p>
                        </td>
                        <td>07/10/2021</td>
                        <td>
                            <Link to='./'>
                                <button className='view-btn'>
                                    Xem chi tiết
                                </button>
                            </Link>
                        </td>
                        <td>
                            <Link to='/' className='check'>
                                <i className="fas fa-check-circle"></i>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default BlogCensor;
import React, { useState, useEffect } from 'react';
import './ExcerciseCensorTable.css';
import { Link } from 'react-router-dom';

function ExercisesCensor({ exdata }) {
    // const [exercises, setExdatas] = useState(data);
    return (
        <div className="exercisetable-container">
            <table className='exercisetable'>
                <thead className='exercisetable-header'>
                    <tr className='exercisetable-row'>
                        <th>STT</th>
                        <th>Tên bài luyện tập</th>
                        <th>Tác giả</th>
                        <th>Cấp độ</th>
                        <th>Ngày gửi</th>
                        <th>Xem</th>
                        <th>Duyệt</th>
                    </tr>
                </thead>

                <tbody className='exercisetable-body'>
                    {/* {exdata.map((exdata) => (
                        <tr>
                            <td>{exdata.id}</td>
                            <td>{exdata.name}</td>
                            <td>
                                <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                                <p className='exercise-author'>vietcv</p>
                            </td>
                            <td>{exdata.level}</td>
                            <td>02/10/2021</td>
                            <td>
                                <Link to='./'>
                                    <button className='btn'>
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
                        <td>boxBlur</td>
                        <td>
                            <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                            <p className='exercise-author'>vietcv</p>
                        </td>
                        <td>Trung bình</td>
                        <td>02/10/2021</td>
                        <td>
                            <Link to='./' className='btn-mobile'>
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
                        <td>makeTriangle</td>
                        <td>
                            <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                            <p className='exercise-author'>Fsoft_LongVH13</p>
                        </td>
                        <td>Đơn giản</td>
                        <td>04/10/2021</td>
                        <td>
                            <Link to='./' className='btn-mobile'>
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
                        <td>removeDuplicateCharacter</td>
                        <td>
                            <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                            <p className='exercise-author'>MinhNguyet</p>
                        </td>
                        <td>Đơn giản</td>
                        <td>05/10/2021</td>
                        <td>
                            <Link to='./' className='btn-mobile'>
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
                        <td>oneMoveCheckMate</td>
                        <td>
                            <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                            <p className='exercise-author'>vietcv</p>
                        </td>
                        <td>Trung bình</td>
                        <td>05/10/2021</td>
                        <td>
                            <Link to='./' className='btn-mobile'>
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
                        <td>sequenceElement</td>
                        <td>
                            <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                            <p className='exercise-author'>vietcv</p>
                        </td>
                        <td>Trung bình</td>
                        <td>07/10/2021</td>
                        <td>
                            <Link to='./' className='btn-mobile'>
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

                    {/* {exercises.map((exercise) => (
                        <tr className='table-row'>
                            <td>{exercise.id}</td>
                            <td>{exercise.name}</td>
                            <td>
                                <img src='https://drive.google.com/uc?id=1rxPivgNOIy8VOAuDAG4ohRciZT9S_mWX' className='circle' />
                                <p className='exercise-author'>{exercise.author}</p>
                            </td>
                            <td>{exercise.level}</td>
                            <td>{exercise.date}</td>
                            <td>
                                <Link to='./' className='view-detail'>
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

                    )
                    )} */}

                </tbody>
            </table>
        </div>
    )
}

export default ExercisesCensor;
import React from "react";
import { Link } from "react-router-dom";
import "./MemberListTable.css"

function MemberListTable( {memberdata}) {
    return (
        <div className="memberlisttable-container">
            <table className="memberlisttable">
                <thead className="memberlisttable-header">
                    <tr className="memberlisttable-row">
                        <th>ID</th>
                        <th>Tên tài khoản</th>
                        <th>Email</th>
                        <th>Ngày tham gia</th>
                        <th>Role</th>
                    </tr>
                </thead>

                <tbody className="memberlisttable-body">
                    {/* {exercisedata.map((exercisedata) => (
                        <tr>
                            <td>{exercisedata.id}</td>
                            <td>{exercisedata.name}</td>
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
                        <td>nnkd</td>
                        <td>nnkd@gmail.com</td>
                        <td>02/10/2021</td>
                        <td>
                            <div className="member-role-container">
                                <select name="role" className="member-role">
                                    <option value="role">Người dùng</option>
                                    <option value="role">Kiểm duyệt viên</option>
                                    <option value="role">Admin</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>nnmc</td>
                        <td>nnkd@gmail.com</td>
                        <td>02/10/2021</td>
                        <td>
                            <div className="member-role-container">
                                <select name="role" className="member-role">
                                    <option value="role">Người dùng</option>
                                    <option value="role">Kiểm duyệt viên</option>
                                    <option value="role">Admin</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>dnhh</td>
                        <td>nnkd@gmail.com</td>
                        <td>02/10/2021</td>
                        <td>
                            <div className="member-role-container">
                                <select name="role" className="member-role">
                                    <option value="role">Người dùng</option>
                                    <option value="role">Kiểm duyệt viên</option>
                                    <option value="role">Admin</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>tbc</td>
                        <td>nnkd@gmail.com</td>
                        <td>02/10/2021</td>
                        <td>
                            <div className="member-role-container">
                                <select name="role" className="member-role">
                                    <option value="role">Người dùng</option>
                                    <option value="role">Kiểm duyệt viên</option>
                                    <option value="role">Admin</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>tng</td>
                        <td>nnkd@gmail.com</td>
                        <td>02/10/2021</td>
                        <td>
                            <div className="member-role-container">
                                <select name="role" className="member-role">
                                    <option value="role">Người dùng</option>
                                    <option value="role">Kiểm duyệt viên</option>
                                    <option value="role">Admin</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>dkd</td>
                        <td>nnkd@gmail.com</td>
                        <td>02/10/2021</td>
                        <td>
                            <div className="member-role-container">
                                <select name="role" className="member-role">
                                    <option value="role">Người dùng</option>
                                    <option value="role">Kiểm duyệt viên</option>
                                    <option value="role">Admin</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>van</td>
                        <td>nnkd@gmail.com</td>
                        <td>02/10/2021</td>
                        <td>
                            <div className="member-role-container">
                                <select name="role" className="member-role">
                                    <option value="role">Người dùng</option>
                                    <option value="role">Kiểm duyệt viên</option>
                                    <option value="role">Admin</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>nva</td>
                        <td>nnkd@gmail.com</td>
                        <td>02/10/2021</td>
                        <td>
                            <div className="member-role-container">
                                <select name="role" className="member-role">
                                    <option value="role">Người dùng</option>
                                    <option value="role">Kiểm duyệt viên</option>
                                    <option value="role">Admin</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MemberListTable;
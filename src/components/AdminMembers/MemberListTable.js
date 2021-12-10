import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MemberListTable.css"
import usersApi from "../../apis/usersApi"

function MemberListTable() {
    const [data, setListMember] = useState([]);
    useEffect(async () => {
        const res = await usersApi.getAllUsers();
        setListMember(res);
    }, [])
    const listUsers = () => {
        if (data.length > 0) {
            return data.map((item, index) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                        <td>{item.createdAt}</td>
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
                );
            });
        }
        else {
            return <h2>Loading..</h2>
        }
    }
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
                    {listUsers()}
                    {/* <tr>
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
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default MemberListTable;
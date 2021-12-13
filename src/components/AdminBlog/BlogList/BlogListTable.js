import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogListTable.css";
// import AdminPath from "../AdminPath/AdminPath";
import blogsApi from "../../../apis/blogsApi";


function getFormattedDate(date) {
    return new Date(date).toLocaleDateString();
}

function BlogListTable() {
    const [data, setListBlogs] = useState([]);
    useEffect(async () => {
        const res = await blogsApi.getAllBlogs();
        setListBlogs(res);
    }, []);
    const listBlogs = () => {
        if (data.length > 0) {
            return data.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.blogName}</td>
                        <td>
                            <p>nguyet</p>
                        </td>
                        <td>{getFormattedDate(item.createdAt)}</td>
                        <td>{getFormattedDate(item.updatedAt)}</td>
                        <td>
                            <Link to={`/blogs/${item.id}`}>
                                <button className="view-btn">Xem chi tiết</button>
                            </Link>
                        </td>
                    </tr>
                );
            });
        } else {
            return <h2>Loading..</h2>;
        }
    };
    return (
        <div className="listtable-container">
            <table className="listtable">
                <thead className="listtable-header">
                    <tr className="listtable-row">
                        <th>ID</th>
                        <th>Tên blog</th>
                        <th>Admin</th>
                        <th>Ngày tạo</th>
                        <th>Update</th>
                        <th>Xem</th>
                    </tr>
                </thead>
                <tbody className="listtable-body">{listBlogs()}</tbody>
            </table>
        </div>
    );
}

export default BlogListTable;



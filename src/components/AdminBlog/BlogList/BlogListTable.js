import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogListTable.css";
import AdminPath from "../AdminPath/AdminPath";
import blogsApi from "../../../apis/blogsApi";
import Search from "../../Search/index";

function getFormattedDate(date) {
  return new Date(date).toLocaleDateString();
}

function BlogListTable() {
  const [data, setListBlogs] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const res = await blogsApi.getAllBlogs();
    setListBlogs(res);
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    const newData = data.filter((item) => {
      return (
        item.title.toLowerCase().search(search.toLowerCase()) !== -1 ||
        (item.id + "").indexOf(search) !== -1
      );
    });
    setFilteredData(newData);
  }, [search]);

  const listBlogs = () => {
    if (filteredData.length > 0) {
      return filteredData.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.user.userName}</td>
            <td>{getFormattedDate(item.createdAt)}</td>
            <td>{getFormattedDate(item.updatedAt)}</td>
            <td>
              <Link to={`/blogs/${item._id}`}>
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
    <div className="bloglisttable-container">
      <div className="bloglist">
        <AdminPath />
        <div className="bloglist-container">
          <h2 className="bloglist-title"> Danh sách blog </h2>
          <Search
            placeholder="Nhập tên blog cần tìm"
            className="bloglist-search"
            value={search}
            onChange={setSearch}
          />
        </div>
      </div>
      <h2 className="bloglist-tablename">Thông tin blog</h2>
      <table className="bloglisttable">
        <thead className="bloglisttable-header">
          <tr className="bloglisttable-row">
            <th>ID</th>
            <th>Tên blog</th>
            <th>Admin</th>
            <th>Ngày tạo</th>
            <th>Update</th>
            <th>Xem</th>
          </tr>
        </thead>
        <tbody className="bloglisttable-body">{listBlogs()}</tbody>
      </table>
    </div>
  );
}

export default BlogListTable;

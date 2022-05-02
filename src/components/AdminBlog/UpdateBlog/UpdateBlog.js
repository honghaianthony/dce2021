import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UpdateBlog.css";
import AdminPath from "../AdminPath/AdminPath";
import blogsApi from "../../../apis/blogsApi";
import Search from "../../Search/index";
import blogApi from "../../../apis/blogsApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
function getFormattedDate(date) {
  return new Date(date).toLocaleDateString();
}

function BlogListTable() {
  const [data, setListBlogs] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const res = await blogsApi.getAllBlogs();
    console.log(res);
    setListBlogs(res);
  }, []);

  const { blogId } = useParams();

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

  const [dataDelete, setDataDelete] = useState();

  useEffect(async () => {
    const res = await blogApi.getBlogById(blogId);
    setDataDelete(res);
  }, [blogId]);

  const handleDelete = async (blog) => {
    try {
      let response = await blogApi.deleteBlog(blog.id);
      if (response && response.errCode === 0) {
        const succ = await blogApi.getAllBlogs();
        setListBlogs(succ);
        toast.success("Xóa thành công");
      } else {
        toast.success("Xóa thất bại");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listBlogs = () => {
    if (filteredData.length > 0) {
      return filteredData.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.User.userName}</td>
            <td>{item.title}</td>
            <td>{item.content}</td>
            <td>{item.coverImage}</td>
            <td>{item.blogImage}</td>
            {/* <td>{item.User.userName}</td> */}
            <td>{getFormattedDate(item.createdAt)}</td>
            <td>{getFormattedDate(item.updatedAt)}</td>
            <td>
              <Link to={`/adminUpdateBlog/${item.id}`}>
                <button className="view-btn">Chỉnh sửa</button>
              </Link>
            </td>
            <td>
              <Link to={`/adminUpdateBlog`}>
                <button
                  className="view-btn-delete"
                  onClick={() => handleDelete(item)}
                >
                  Xóa
                </button>
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
            <th>Admin</th>
            <th>Tên blog</th>
            {/* <th>Admin</th> */}
            <th>Nội dung</th>
            <th>Hình ảnh</th>
            <th>Ảnh blog</th>
            <th>Ngày tạo</th>
            <th>Update</th>
            <th>Chỉnh sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody className="bloglisttable-body">{listBlogs()}</tbody>
      </table>
    </div>
  );
}

export default BlogListTable;

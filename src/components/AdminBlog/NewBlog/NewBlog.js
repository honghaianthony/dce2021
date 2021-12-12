import React from "react";
import AdminPath from "../AdminPath/AdminPath";
import "./NewBlog.css";
// import MarkdownIt from "markdown-it";
// import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import { useState, useEffect } from "react";
import { CKEditor } from "ckeditor4-react";
import blogApi from "../../../apis/blogsApi";
import { toast } from "react-toastify";

function NewBlog() {
  // Initialize a markdown parser
  const [data, setData] = useState("");
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    coverImage: "",
  });

  // Finish!
  function handleEditorChange({ editor }) {
    setData(editor.getData());
  }

  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const sendBlog = async () => {
    const dataBlog = {
      userId: 1,
      title: inputValues.title,
      content: data,
      description: inputValues.description,
      coverImage: inputValues.coverImage,
    };
    const res = await blogApi.postBlog(dataBlog);
    if (res) {
      toast.success("Đăng bài blog thành công");
    } else {
      toast.error("Đăng bài blog thất bại");
    }
  };

  return (
    <div className="add-blog-container">
      <AdminPath />
      <div className="add-blog-main">
        <div className="add-blog-sidebar"></div>
        <div className="add-blog">
          <h1>Tạo bài blog mới</h1>
          <div className="add-blog-title">
            <input
              type="text"
              name="title"
              id="add-blog-title"
              placeholder="Nhập tiêu đề bài viết"
              onChange={handleOnChangeInput}
            />
          </div>
          <div className="add-blog-description">
            <input
              type="text"
              name="description"
              id="add-blog-description"
              placeholder="Nhập mô tả cho bài viết"
              onChange={handleOnChangeInput}
            />
          </div>
          <div className="add-blog-cover-image">
            <input
              type="text"
              name="coverImage"
              id="add-blog-cover-image"
              placeholder="Link hình ảnh"
              onChange={handleOnChangeInput}
            />
          </div>
          <div className="add-blog-cover"></div>
          <div className="add-blog-content">
            <CKEditor
              config={{
                extraPlugins: `justify`,
              }}
              onChange={(editor) => {
                handleEditorChange(editor);
              }}
            />
          </div>
          <div className="add-blog-button">
            <button type="button" className="add-blog-btn" onClick={sendBlog}>
              Tạo bài blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBlog;

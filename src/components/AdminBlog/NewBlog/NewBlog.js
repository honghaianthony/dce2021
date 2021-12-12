import React from "react";
import { Redirect } from "react-router-dom";
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
import { uploadFile, deleteFile } from "../../../firebase/util";

function NewBlog() {
  // Initialize a markdown parser
  let isAuth;
  const [data, setData] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (image !== null) {
      uploadFile(
        image,
        (progress) => {
          setProgress(progress);
        },
        (url) => {
          setUrl(url);
        }
      );
    }
  }, [image]);

  // Finish!
  function handleEditorChange({ editor }) {
    setData(editor.getData());
  }

  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const imageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const deleteImage = () => {
    deleteFile(
      url,
      () => {
        toast.success("Xóa thành công");
        setProgress(0);
        setUrl("");
        document.getElementById("add-blog-cover-image").value = null;
      },
      (error) => {
        toast.error("Lỗi!!!");
      }
    );
  };

  const sendBlog = async () => {
    const dataBlog = {
      userId: 1,
      title: inputValues.title,
      content: data,
      description: inputValues.description,
      coverImage: url,
    };
    const res = await blogApi.postBlog(dataBlog);
    if (res) {
      toast.success("Đăng bài blog thành công");
    } else {
      toast.error("Đăng bài blog thất bại");
    }
  };

  return (
    <>
      <div className="add-adminblog-container">
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
              {progress < 100 && (
                <input
                  type="file"
                  accept="image/*"
                  name="coverImage"
                  id="add-blog-cover-image"
                  placeholder="Link hình ảnh"
                  onChange={imageChange}
                />
              )}
              {progress > 0 && (
                <div className="upload-image">
                  <progress
                    className="progress-bar"
                    value={progress}
                    max="100"
                  />
                  <br />
                  <i class="far fa-times-circle" onClick={deleteImage}></i>
                  <img
                    className="preview-image"
                    src={url || "http://via.placeholder.com/300"}
                    alt="firebase-image"
                  />
                </div>
              )}
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
    </>
  );
}

export default NewBlog;
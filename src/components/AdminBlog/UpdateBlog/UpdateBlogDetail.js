import React from "react";
import AdminPath from "../AdminPath/AdminPath";
import "./UpdateBlogDetail.css";
// import MarkdownIt from "markdown-it";
// import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import { useState, useEffect } from "react";
import { CKEditor } from "ckeditor4-react";
import blogApi from "../../../apis/blogsApi";
import { toast } from "react-toastify";
import { uploadFile, deleteFile } from "../../../firebase/util";
import AdminLayout from "../../../layouts/AdminLayout";
import { useParams } from "react-router-dom";

function UpdateBlogDetail() {
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
    const { blogId } = useParams();

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
    function handleEditorChange(event) {
        setBlogContent(event.editor.getData());
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

    const [blogName, setBlogName] = useState();
    const [blogDescription, setBlogDescription] = useState();
    const [blogContent, setBlogContent] = useState('');

    useEffect(async () => {
        const res = await blogApi.getBlogById(blogId);
        setBlogName(res.title);
    }, [blogId]);
    console.log(blogId)
    useEffect(async () => {
        const res = await blogApi.getBlogById(blogId);
        console.log(res)
        setBlogDescription(res.description);
    }, [blogId]);

    useEffect(async () => {
        const res = await blogApi.getBlogById(blogId);
        setBlogContent(res.content);
    }, [blogId]);

    const handleSaveBlog = async (e) => {
        e.preventDefault();
        const newBlog = {
            blogId: blogId,
            title: blogName,
            // description: blogDescription,
            content: blogContent,
        };
        const res = await blogApi.updateBlogById(newBlog);

        if (res.errCode===0) {
            toast.success("Cập nhật thành công");
        } else {
            toast.error("Cập nhật thất bại");
        }
    };

    return (
      <AdminLayout>
        <div className="add-adminblog-container">
          <AdminPath />
          <div className="add-blog-main">
            <div className="add-blog-sidebar"></div>
            <div className="add-blog">
              <h1>Chỉnh sửa bài blog</h1>
              <form onSubmit={handleSaveBlog}>
                <div className="add-blog-title">
                  <input
                    type="text"
                    name="title"
                    id="add-blog-title"
                    placeholder="Nhập tiêu đề bài viết"
                    value={blogName}
                    onChange={(event) => setBlogName(event.target.value)}
                  />
                </div>
                {/* <div className="add-blog-description">
                                <input
                                    type="text"
                                    name="description"
                                    id="add-blog-description"
                                    placeholder="Nhập mô tả cho bài viết"
                                    value={blogDescription}
                                    onChange={(event) =>
                                        setBlogDescription(event.target.value)
                                    }
                                />
                            </div> */}
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
                        src={url || 'http://via.placeholder.com/300'}
                        alt="firebase-image"
                      />
                    </div>
                  )}
                </div>
                <div className="add-blog-cover"></div>
                <div className="add-blog-content">
                  {blogContent !== '' && (
                    <CKEditor
                      config={{
                        extraPlugins: `justify`,
                      }}
                      onChange={handleEditorChange}
                      initData={blogContent}
                    />
                  )}
                </div>
                <div className="add-blog-button">
                  <button type="submit" className="add-blog-btn">
                    Tạo bài blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
}

export default UpdateBlogDetail;

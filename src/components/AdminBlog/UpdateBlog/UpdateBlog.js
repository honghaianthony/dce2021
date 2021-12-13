import React from "react";
import AdminPath from "../AdminPath/AdminPath";
import "./UpdateBlog.css";
import "react-markdown-editor-lite/lib/index.css";
import { useState, useEffect } from "react";
import { CKEditor } from "ckeditor4-react";
import blogApi from "../../../apis/blogsApi";
import { toast } from "react-toastify";
import { uploadFile, deleteFile } from "../../../firebase/util";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function UpdateBlog() {
    // Initialize a markdown parser
    let isAuth;
    const [data, setData] = useState(null);
    const { blogId } = useParams();
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [inputValues, setInputValues] = useState({
        title: "",
        description: "",
    });

    useEffect(async () => {
        const res = await blogApi.getBlogById(blogId);
        setData(res);
    }, [blogId]);

    // update

    // const [title, setBlogTitle] = useState();
    // const [description, setBlogDes] = useState();

    // useEffect(async () => {
    //     const res = await blogApi.getBlogById(blogId);
    //     setBlogTitle(res.title);
    // }, [blogId]);

    // useEffect(async () => {
    //     const res = await blogApi.getBlogById(blogId);
    //     setBlogDes(res.description);
    // }, [blogId]);

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

    // const handleChangeBlog = async (e) => {
    //     e.preventDefault();
    //     const dataBlog = {
    //     userId: 1,
    //     title: title,
    //     content: data,
    //     description: description,
    //     coverImage: url,
    //     };
    //     const res = await blogApi.updateBlogById(dataBlog);
    //     if (res) {
    //     toast.success("Cập nhật bài blog thành công");
    //     } else {
    //     toast.error("Cập nhật bài blog thất bại");
    //     }
    // };

    return (
        <>
            <div className="update-adminblog-container">
                <AdminPath />
                <div className="update-blog-main">
                    <div className="update-blog-sidebar"></div>
                    <div className="update-blog">
                    <h1>Chỉnh sửa bài blog</h1>
                    <div className="update-blog-title">
                        <input
                        type="text"
                        name="title"
                        id="update-blog-title"
                        //placeholder="Nhập tiêu đề bài viết"
                        onChange={handleOnChangeInput}
                        // value={title}
                        // onChange={(event) => setBlogTitle(event.target.value)}
                        />
                    </div>
                    <div className="update-blog-description">
                        <input
                        type="text"
                        name="description"
                        id="update-blog-description"
                        placeholder="Nhập mô tả cho bài viết"
                        onChange={handleOnChangeInput}
                        // value={description}
                        // onChange={(event) => setBlogDes(event.target.value)}
                        />
                    </div>
                    <div className="update-blog-cover-image">
                        {progress < 100 && (
                        <input
                            type="file"
                            accept="image/*"
                            name="coverImage"
                            id="update-blog-cover-image"
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
                    <div className="update-blog-cover"></div>
                    <div className="update-blog-content">
                        <CKEditor
                        config={{
                            extraPlugins: `justify`,
                        }}
                        onChange={(editor) => {
                            handleEditorChange(editor);
                        }}
                        />
                    </div>
                    <div className="update-blog-button">
                        <button type="button" className="update-blog-btn" onClick={sendBlog}>
                        Cập nhật
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateBlog;
import axiosInstance from "./axiosInstance";
import Cookies from 'js-cookie';

const getAllBlogs = async () => {
  return await axiosInstance.get("blog/get-all-blogs");
};
const getBlogById = async (id) => {
  return await axiosInstance.get(`/blog/get-blog-by-id?id=${id}`);
};
const getAllBlogCommentByBlogId = async (id) => {
  return await axiosInstance.get(`blog/get-all-blog-comments?id=${id}`);
};
const postBlog = async (data) => {
  return await axiosInstance.post(`blog/create-new-blog`, data, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const updateBlogById = async (data) => {
  return await axiosInstance.put(`/blog/update-blog`, data, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const deleteBlog = async (id) => {
  return await axiosInstance.delete(`/blog/delete-blog?id=${id}`, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

export default {
  getAllBlogs,
  getBlogById,
  getAllBlogCommentByBlogId,
  postBlog,
  updateBlogById,
  deleteBlog,
};

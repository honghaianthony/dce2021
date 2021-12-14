import axiosInstance from "./axiosInstance";

const getAllBlogs = async () => {
  return await axiosInstance.get("blog/get-all-blogs");
};
const getBlogById = async (id) => {
  return await axiosInstance.get(`blog/get-blog-by-id?id=${id}`);
};
const getAllBlogCommentByBlogId = async (id) => {
  return await axiosInstance.get(`blog/get-all-blog-comments?blogId=${id}`);
};
const postBlog = async (data) => {
  return await axiosInstance.post(`blog/create-new-blog`, data, {});
};

const updateBlogById = async (data) => {
  return await axiosInstance.put(`/blog/update-blog`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const deleteBlog = async (id) => {
  return await axiosInstance.delete(`/blog/delete-blog?id=${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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

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

export default {
  getAllBlogs,
  getBlogById,
  getAllBlogCommentByBlogId,
  postBlog,
};

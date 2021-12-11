import axiosInstance from "./axiosInstance";

const postBlog = async (data) => {
    return await axiosInstance.post(`blog/create-new-blog`, data);
};

export default {
    postBlog,
};

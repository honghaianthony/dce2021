import React from "react";
import MainLayout from "../layouts/MainLayout";
import BlogDetail from "../components/Blogs/BlogDetail/BlogDetail";

function Blog () {
    return (
        <>
            <MainLayout>
                <BlogDetail />
            </MainLayout>
        </>
    )
}

export default Blog;
import React from "react";
import MainLayout from "../layouts/MainLayout";
import NewBlog from "../components/Blogs/NewBlog/NewBlog";

function AddBlog () {
    return (
        <>
            <MainLayout>
                <NewBlog />
            </MainLayout>
        </>
    )
}

export default AddBlog;
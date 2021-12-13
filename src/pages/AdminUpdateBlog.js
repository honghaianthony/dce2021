import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import UpdateBlog from "../components/AdminBlog/UpdateBlog/UpdateBlog";

function AdminUpdateBlog () {
    return (
        <>
            <AdminLayout>
                <UpdateBlog />
            </AdminLayout>
        </>
    )
}

export default AdminUpdateBlog;
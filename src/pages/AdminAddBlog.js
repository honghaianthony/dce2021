import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import NewBlog from "../components/AdminBlog/NewBlog/NewBlog";

function AdminAddBlog () {
    return (
        <>
            <AdminLayout>
                <NewBlog />
            </AdminLayout>
        </>
    )
}

export default AdminAddBlog;
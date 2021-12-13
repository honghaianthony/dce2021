import React from "react";
import BlogListTable from "../components/AdminBlog/BlogList/BlogListTable";
import AdminLayout from "../layouts/AdminLayout"


function AdminBlogList() {
    return (
        <AdminLayout>
            <BlogListTable />
        </AdminLayout>
    )
}
export default AdminBlogList;

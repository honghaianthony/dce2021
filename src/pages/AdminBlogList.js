import React from "react";
import BlogListTable from "../components/AdminBlog/BlogList/BlogListTable";
import AdminLayout from "../layouts/AdminLayout";
import { Helmet } from "react-helmet-async";

function AdminBlogList() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Danh sách các blog</title>
      </Helmet>
      <AdminLayout>
        <BlogListTable />
      </AdminLayout>
    </>
  );
}
export default AdminBlogList;

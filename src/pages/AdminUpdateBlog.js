import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import UpdateBlog from "../components/AdminBlog/UpdateBlog/UpdateBlog";
import { Helmet } from "react-helmet-async";

function AdminUpdateBlog() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cập nhật thông tin blog</title>
      </Helmet>
      <AdminLayout>
        <UpdateBlog />
      </AdminLayout>
    </>
  );
}

export default AdminUpdateBlog;

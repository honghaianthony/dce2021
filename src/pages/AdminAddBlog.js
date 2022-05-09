import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import NewBlog from "../components/AdminBlog/NewBlog/NewBlog";
import { Helmet } from "react-helmet-async";

function AdminAddBlog() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tạo blog</title>
      </Helmet>
      <AdminLayout>
        <NewBlog />
      </AdminLayout>
    </>
  );
}

export default AdminAddBlog;

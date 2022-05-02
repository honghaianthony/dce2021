import React from "react";
import MainLayout from "../layouts/MainLayout";
import NewBlog from "../components/Blogs/NewBlog/NewBlog";
import { Helmet } from "react-helmet-async";

function AddBlog() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tạo bài blog</title>
      </Helmet>
      <MainLayout>
        <NewBlog />
      </MainLayout>
    </>
  );
}

export default AddBlog;

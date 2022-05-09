import React from "react";
import MainLayout from "../layouts/MainLayout";
import BlogsMain from "../components/Blogs/index";
import { Helmet } from "react-helmet-async";

function Blogs() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chia sẻ và học hỏi kiến thức lập trình</title>
        <meta
          name="description"
          content="Cùng nhau chia sẻ về cuộc sống, công việc và kinh nghiệm lập trình của bạn."
        />
      </Helmet>
      <MainLayout>
        <BlogsMain />
      </MainLayout>
    </>
  );
}

export default Blogs;

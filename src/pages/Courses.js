import React from "react";
import MainLayout from "../layouts/MainLayout";
import CoursesMain from "../components/Courses/index";
import { Helmet } from "react-helmet-async";

function Courses() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Học lập trình với các khóa học</title>
        <meta
          name="description"
          content="Các khóa học lập trình miễn phí về các ngôn ngữ phổ biến nhất hiện nay như Python, Java, Javascript... giải thuật và cấu trúc dữ liệu."
        />
      </Helmet>
      <MainLayout>
        <CoursesMain />
      </MainLayout>
    </>
  );
}

export default Courses;

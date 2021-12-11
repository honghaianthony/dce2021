import React, { useState, useEffect } from "react";
import { FaSistrix } from "react-icons/fa";
import "./BlogsMain.css";
import BlogItem from "./BlogItem";
import BlogPath from "./BlogPath";
import blogsApi from "../../apis/blogsApi";

function BlogsMain() {
  const [blogs, setBlogs] = useState([]);
  useEffect(async () => {
    const res = await blogsApi.getAllBlogs();
    setBlogs(res);
  }, []);
  const idArray = blogs.map((item, index) => {
    return index;
  });
  let firstItem = 0;
  let trendBlogs = [1, 2, 3];
  idArray.splice(0, 4);
  const trendMap = () => {
    return trendBlogs.map((item) => {
      return (
        <BlogItem
          key={blogs[item].id}
          src={blogs[item].coverImage}
          title={blogs[item].title}
          description={blogs[item].description}
          author={`${blogs[item].User.lastName} ${blogs[item].User.firstName}`}
          time={new Date(blogs[item].updatedAt).toLocaleDateString()}
          //view='134'
          path={`/blogs/${blogs[item].id}`}
        />
      );
    });
  };
  const restMap = () => {
    return idArray.map((item) => {
      return (
        <BlogItem
          key={blogs[item].id}
          src={blogs[item].coverImage}
          title={blogs[item].title}
          description={blogs[item].description}
          author={`${blogs[item].User.lastName} ${blogs[item].User.firstName}`}
          time={new Date(blogs[item].updatedAt).toLocaleDateString()}
          //view='134'
          path={`/blogs/${blogs[item].id}`}
        />
      );
    });
  };
  console.log(firstItem, trendBlogs, idArray);
  return (
    <div className="blogs-container">
      <BlogPath />
      <div className="blogs-search">
        <form className="form-search" action="/action_page.php">
          <input
            className="form-control"
            type="text"
            placeholder="Nhập nội dung tìm kiếm"
            name="search"
          />
          <span className="icon-search" type="submit">
            <i className="icon-fa-search">
              <FaSistrix />
            </i>
          </span>
        </form>
      </div>
      {blogs.length > 0 ? (
        <div className="blog-list">
          <div className="blog-feature">
            <div className="blog-feature-item">
              <BlogItem
                src={blogs[firstItem].coverImage}
                title={blogs[firstItem].title}
                description={blogs[firstItem].description}
                author={`${blogs[firstItem].User.lastName} ${blogs[firstItem].User.firstName}`}
                time={new Date(blogs[firstItem].updatedAt).toLocaleDateString()}
                //view='134'
                path={`/blogs/${blogs[firstItem].id}`}
              />
            </div>
          </div>
          {blogs.length > 3 && (
            <div className="blog-trend">
              <h3 className="blog-category">Xu hướng</h3>
              <div className="blog-trend-items">{trendMap()}</div>
            </div>
          )}
          {blogs.length > 4 && (
            <div className="blog-new">
              <h3 className="blog-category">Bài viết mới</h3>
              <div className="blog-new-item">{restMap()}</div>
            </div>
          )}
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default BlogsMain;

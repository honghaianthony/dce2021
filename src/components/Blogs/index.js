import React, { useState, useEffect } from "react";
import { FaSistrix } from "react-icons/fa";
import "./BlogsMain.css";
import BlogItem from "./BlogItem";
import BlogPath from "./BlogPath";
import blogsApi from "../../apis/blogsApi";
import Search from "../Search/index";

function BlogsMain() {
  const [blogs, setBlogs] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const res = await blogsApi.getAllBlogs();
    //
    console.log(res);
    setBlogs(res);
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    const newData = data.filter((item) => {
      return (
        item.title.toLowerCase().search(search.toLowerCase()) !== -1 ||
        item.description.toLowerCase().search(search.toLowerCase()) !== -1
      );
    });
    setFilteredData(newData);
  }, [search]);

  const idArray = blogs.map((item, index) => {
    return index;
  });
  let firstItem = 0;
  let trendBlogs = [1, 2, 3];
  idArray.splice(0, 4);

  const listBlog = () => {
    if (filteredData.length > 0) {
      return filteredData.map((item, index) => {
        let path = "/blogs/" + item.id;
        return (
          <BlogItem
            key={index}
            src={item.coverImage}
            title={item.title}
            description={item.description}
            author={`${item.User.lastName} ${item.User.firstName}`}
            time={new Date(item.updatedAt).toLocaleDateString()}
            //view='134'
            path={path}
          />
        );
      });
    } else {
      return <div className="loader"></div>;
    }
  };

  const trendMap = () => {
    return trendBlogs.map((item) => {
      return (
        blogs[item] && (
          <BlogItem
            key={blogs[item].id}
            src={blogs[item].coverImage}
            title={blogs[item].title}
            description={blogs[item].description}
            author={`${blogs[item].User.lastName} ${blogs[item].User.firstName}`}
            time={new Date(blogs[item].updatedAt).toLocaleDateString()}
            //view='134'
            path={`/blogs/${blogs[item]._id}`}
          />
        )
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
          path={`/blogs/${blogs[item]._id}`}
        />
      );
    });
  };
  return (
    <div className="blogs-container">
      <BlogPath />
      <Search
        placeholder="Nhập bài blog cần tìm"
        className="blogs-search"
        value={search}
        onChange={setSearch}
      />
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
                path={`/blogs/${blogs[firstItem]._id}`}
              />
            </div>
          </div>
          {blogs.length > 1 && (
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

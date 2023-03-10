import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import BlogPath from "../BlogPath";
import "./BlogDetail.css";
import { BsCircle, BsFillStarFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import blogsApi from "../../../apis/blogsApi";
import { useStore } from "../../../store";
import { io } from "socket.io-client";
import { Helmet } from "react-helmet-async";

function BlogDetail() {
  const [data, setData] = useState(null);
  const { blogId } = useParams();
  const [state, dispatch] = useStore();
  const [comment, setComment] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [showMoreCmt, setShowMoreCmt] = useState(5);
  console.log(blogId);
  useEffect(async () => {
    const res = await blogsApi.getBlogById(blogId);
    setData(res);    
    const cmt = await blogsApi.getAllBlogCommentByBlogId(blogId);
    setComment(cmt);
  }, []);
  //socket.io
  const socket = useRef();
  useEffect(() => {
    socket.current = io("http://localhost:3000");
    socket.current.emit("join-room", blogId);
    socket.current.on("receive-comment-blog", async (data) => {
      const cmt = await blogsApi.getAllBlogCommentByBlogId(blogId);
      setComment(cmt);
    });
  }, [blogId, socket.current]);

  const renderComment = () => {
    return comment
      .map((item, index) => {
        return (
          index > comment.length - showMoreCmt && (
            <div className="blog-comment-other" key={item.id}>
              <div className="blog-comment-user">
                <div className="blog-comment-userinfo">
                  <div className="blog-comment-avatar">
                    <IoPersonCircleSharp />
                  </div>
                  <div className="blog-comment-name">
                    <p>{`${item.userId.lastName} ${item.userId.firstName}`}</p>
                  </div>
                  <div className="blog-comment-date">
                    <p>{new Date(item.updatedAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="blog-comment-content">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          )
        );
      })
      .reverse();
  };
  const sendComment = (e) => {
    e.preventDefault();
    const comment = commentInput;
    socket.current.emit("send-comment-blog", comment, state.userId, blogId);
    setCommentInput("");
  };
  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };
  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{data.title}</title>
      </Helmet> */}
      <div className="blog-container">
        <BlogPath />
        {data ? (
          <div className="blog-detail">
            <div className="blog-detail-main">
              <div className="blog-main">
                <div className="blog-author">
                  <span>T??c gi???:</span>
                   <span className="blog-author-name">{`${data.user.lastName} ${data.user.firstName}`}</span>
                  <i className="blog-time-icon">
                    <BsCircle />
                  </i>
                  <span className="blog-time">
                    {new Date(data.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="blog-main-content">
                  <div className="blog-cover-img">
                    <img src={data.coverImage} alt="blog-cover-img" />
                  </div>
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{
                      __html: data.content,
                    }}
                  ></div>
                </div>
              </div>
              <div className="blog-comment">
                {state.isAuthenticated && (
                  <>
                    <div className="blog-comment-rating">
                      <i className="blog-item-rating">
                        <BsFillStarFill />
                      </i>
                      <i className="blog-item-rating">
                        <BsFillStarFill />
                      </i>
                      <i className="blog-item-rating">
                        <BsFillStarFill />
                      </i>
                      <i className="blog-item-rating">
                        <BsFillStarFill />
                      </i>
                      <i className="blog-item-rating">
                        <BsFillStarFill />
                      </i>
                      <p>
                        5.0 <i>(4 ????nh gi??)</i>
                      </p>
                    </div>
                    <p className="blog-comment-number">
                      {comment.length} b??nh lu???n
                    </p>
                    <form onSubmit={sendComment}>
                      <div className="blog-comment-write">
                        <div className="blog-comment-avatar">
                          <IoPersonCircleSharp />
                        </div>
                        <div className="blog-comment-field">
                          <textarea
                            id="blog-cmt-field"
                            name="comment"
                            placeholder="Vi???t b??nh lu???n c???a b???n"
                            rows={3}
                            value={commentInput}
                            onChange={handleCommentChange}
                          ></textarea>
                          <div className="blog-comment-button">
                            <button type="submit" className="blog-cmt-btn">
                              ????ng
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </>
                )}
                <div className="blog-comment-others">
                  {comment.length > 0 && renderComment()}
                </div>
                {showMoreCmt < comment.length && (
                  <div className="blog-comment-show-more">
                    <button
                      onClick={() => {
                        setShowMoreCmt(showMoreCmt + 5);
                      }}
                    >
                      Xem th??m b??nh lu???n{" "}
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="blog-sidebar">
              <div className="blog-author-info">
                <h3>T??C GI???</h3>
                <div className="author">
                  <div className="author-avatar">
                    <IoPersonCircleSharp />
                  </div>
                  <div className="author-name">
                    <p>{`${data.user.lastName} ${data.user.firstName}`}</p>
                  </div>
                  <div className="author-info">
                    <p>Email: {data.user.email}</p>
                    <p>
                      Th??nh vi??n t???{" "}
                      {new Date(data.user.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </>
  );
}

export default BlogDetail;

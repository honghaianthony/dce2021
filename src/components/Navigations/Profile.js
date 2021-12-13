import React from "react";
import { useStore, actions } from "../../store";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [state, dispatch] = useStore();

  const handleLogout = () => {
    dispatch(actions.logout());
  };
  return (
    <div className="menu-starter">
      <div className="menu">
        <div className="options">
          <Link to={"/me"} >
            <p> Thông tin của tôi </p>
          </Link>
          <Link to={"/addblog"} >
            <p> Đăng blog </p>
          </Link>
          <Link to="/adminAddExercise" >
            <p>Tạo bài luyện tập</p>
          </Link>
          <span onClick={handleLogout}>
            <p> Thoát </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;

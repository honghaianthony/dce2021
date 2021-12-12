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
          <span>
            <Link to={"/me"} className="option-item">
              Thông tin của tôi
            </Link>
          </span>
          <span>
            <Link to={"/addblog"} className="option-item">
              Đăng Blog
            </Link>
          </span>
          <Link to="/adminAddExercise" className="option-item">
            Tạo bài luyện tập
          </Link>
          <span className="logout" onClick={handleLogout}>
            Thoát
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import React from "react";
import { useStore, actions } from "../../store";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';

function Profile() {
  const [state, dispatch] = useStore();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(actions.logout());
  };

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/stream/${uid}`);
  };
  return (
    <div className="menu-starter">
      <div className="menu">
        <div className="options">
          <Link to={"/me"}>
            <p> Thông tin của tôi </p>
          </Link>
          <Link to={"/addblog"}>
            <p> Đăng blog </p>
          </Link>
          <Link to="/adminAddExercise">
            <p>Tạo bài luyện tập</p>
          </Link>
          <span onClick={startCall}>
            <p> Tạo Meet</p>
          </span>
          <span onClick={handleLogout}>
            <p> Thoát </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;

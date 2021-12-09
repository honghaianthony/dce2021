import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import Exercises from "../pages/Exercises";
import Exercise from "../pages/Exercise";
import Blogs from "../pages/Blogs";
import HomeLogin from "../pages/HomeLogin";
import Blog from "../pages/Blog";
import Censor from "../pages/Censor";
import Account from "../pages/Account";
import Course from "../pages/Course";
import Lesson from "../pages/Lesson";
import TestCallApi from "../pages/TestCallApi";
// import AdminAddCourseDetail from "../pages/AddCourseDetail";
import AdminAddCourseDetail from "../pages/AdminAddCourseDetail";
import AdminAddCourse from "../pages/AdminAddCourse";
// import AdminUpdateCourse from "../pages/AdminUpdateCourse";
import Register from "../pages/Register";
import AdminUpdateCourse from "../pages/AdminUpdateCourse"
import ForgotPassword from "../pages/ForgotPassword";
export default function App() {
  return (
    //   định nghĩa các route

    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/exercises">
            <Exercises />
          </Route>
          <Route path="/exercise">
            <Exercise />
          </Route>
          <Route path="/course">
            <Course />
          </Route>
          <Route path="/lesson">
            <Lesson />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/censor">
            <Censor />
          </Route>
          <Route path="/HomeLogin">
            <HomeLogin/>
            <Route path="/Account"> 
              <Account/>
            </Route>
          </Route>
          <Route path="/adminaddcoursedetail">
            <AdminAddCourseDetail/>
          </Route>
          <Route path="/adminaddcourse">
            <AdminAddCourse />
          </Route>
          <Route path="/adminupdatecourse">
            <AdminUpdateCourse/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword/>
          </Route>
          <Route path="/testcallapi">
            <TestCallApi />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}

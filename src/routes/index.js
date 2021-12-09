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
import AdminCourseList from "../pages/AdminCourseList";
import AdminExerciseList from "../pages/AdminExerciseList";
// import AdminAddCourseDetail from "../pages/AdminCourse/AddCourse/AddCourseDetail";
// import AdminAddCourse from "../pages/AdminCourse/AdminAddCourse";
import CensorDetailExercise from "../components/Censor/DetailExercise/DetailExercise";
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
          {/* <Route path="/adminaddcoursedetail">
            <AdminAddCourseDetail/>
          </Route>
          <Route path="/adminaddcourse">
            <AdminAddCourse />
          </Route>
          <Route path="/adminupdatecourse">
            <AdminUpdateCourse/>
          </Route> */}
          <Route path="/admincourselist">
            <AdminCourseList/>
          </Route>
          <Route path="/adminexerciselist">
            <AdminExerciseList/>
          </Route>
          <Route path="/censor/detailexercise">
            <CensorDetailExercise/>
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

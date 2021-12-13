import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
  Home,
  HomeLogin,
  Login,
  Courses,
  Exercises,
  Exercise,
  Blogs,
  Blog,
  Censor,
  Account,
  Course,
  Lesson,
  AdminMemberList,
  AdminCourseList,
  AdminExerciseList,
  AdminAddCourseDetail,
  AdminAddCourse,
  Register,
  AdminUpdateCourse,
  ForgotPassword,
  TestCallApi,
  UploadTest,
  AddBlog,
  AdminAddBlog,
  AdminBlogList,
} from "../pages";
import UpdateLesson from "../components/AdminCourses/AddCourse/UpdateCourse/UpdateLesson";
import UpdateExercise from "../components/AdminExercises/AddExercise/UpdateExercise/UpdateExercise";
import AddExercise from "../components/AdminExercises/AddExercise/AddExercise/AddExercise";
import AddLesson from "../components/AdminCourses/AddCourse/AddCourse/AddLesson";
import AddTestCase from "../components/AdminExercises/AddExercise/AddExercise/AddTestCase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lessoncopy from "../pages/Lessoncopy";

import { useStore, actions } from "../store";
import Report from "../pages/Report";

export default function App() {
  const [state, dispatch] = useStore();
  useEffect(() => {
    dispatch(actions.reload());
  }, []);
  return (
    //   định nghĩa các route
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/HomeLogin">
            <HomeLogin />
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path={`/courses/:courseId`}>
            <Course />
          </Route>
          <Route exact path="/lesson/:lessonId">
            <Lesson />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path={`/blogs/:blogId`}>
            <Blog />
          </Route>
          <PrivateRoute exact path="/addblog">
            <AddBlog />
          </PrivateRoute>
          <PrivateRoute exact path="/adminmemberlist">
            <AdminMemberList />
          </PrivateRoute>
          <PrivateRoute exact path="/report">
            <Report />
          </PrivateRoute>
          <PrivateRoute exact path="/admincourselist">
            <AdminCourseList />
          </PrivateRoute>
          <PrivateRoute exact path="/adminexerciselist">
            <AdminExerciseList />
          </PrivateRoute>
          <Route exact path="/exercises">
            <Exercises />
          </Route>
          <Route exact path={`/exercises/:exerciseId`}>
            <Exercise />
          </Route>
          <Route path="/censor">
            <Censor />
          </Route>
          <PrivateRoute path="/me">
            <Account />
          </PrivateRoute>
          <Route path={`/adminaddcoursedetail/:courseId`}>
            <AdminAddCourseDetail />
          </Route>
          <Route path="/adminaddcourse">
            <AdminAddCourse />
          </Route>
          <Route path={`/adminupdatecourse/:courseId`}>
            <AdminUpdateCourse />
          </Route>
          <Route path="/adminUpdateLesson">
            <UpdateLesson />
          </Route>
          <Route exact path="/adminUpdateExersise/:exerciseId">
            <UpdateExercise />
          </Route>
          <Route path="/adminAddLesson">
            <AddLesson />
          </Route>
          <Route path="/adminAddExercise">
            <AddExercise />
          </Route>
          <Route path="/adminbloglist">
            <AdminBlogList />
          </Route>
          <Route path="/adminAddTestCase">
            <AddTestCase />
          </Route>
          <Route path="/adminaddblog">
            <AdminAddBlog />
          </Route>
          <Route path="/testcallapi">
            <TestCallApi />
          </Route>
          <Route path="/upload">
            <UploadTest />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

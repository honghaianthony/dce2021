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
} from "../pages";
import UpdateLesson from "../components/AdminCourses/AddCourse/UpdateCourse/UpdateLesson";
import UpdateExercise from "../components/AdminExercises/AddExercise/UpdateExercise/UpdateExercise";
import AddExercise from "../components/AdminExercises/AddExercise/AddExercise/AddExercise";
import AddLesson from "../components/AdminCourses/AddCourse/AddCourse/AddLesson";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useStore, actions } from "../store";

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
          <Route exact path="/addblog">
            <AddBlog />
          </Route>
          <Route path="/exercises">
            <Exercises />
          </Route>
          <Route path="/exercise">
            <Exercise />
          </Route>
          <Route path="/censor">
            <Censor />
          </Route>
          <Route path="/Account">
            <Account />
          </Route>
          <Route path="/adminaddcoursedetail">
            <AdminAddCourseDetail />
          </Route>
          <Route path="/adminaddcourse">
            <AdminAddCourse />
          </Route>
          <Route path="/adminupdatecourse">
            <AdminUpdateCourse />
          </Route>
          <Route path="/adminUpdateLesson">
            <UpdateLesson />
          </Route>
          <Route path="/adminUpdateExersise">
            <UpdateExercise />
          </Route>
          <Route path="/adminAddLesson">
            <AddLesson />
          </Route>
          <Route path="/adminAddExercise">
            <AddExercise />
          </Route>
          <Route path="/admincourselist">
            <AdminCourseList />
          </Route>
          <Route path="/adminexerciselist">
            <AdminExerciseList />
          </Route>
          <Route path="/adminmemberlist">
            <AdminMemberList />
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

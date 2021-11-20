import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home';
import Login from "../pages/Login";
import Course from "../pages/Course";
export default function App() {
  return (

    //   định nghĩa các route
    
    <Router>
      <div>
        {/* Navigation sẽ ở đây */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users">
            <Users />
            {/* trong router sẽ render các pages */}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/course">
            <Course />
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
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import User from '../User';
import Logout from "../Logout"
import Login from "../Login"
import { ErrorModal } from '../Modals';
import LoadingScreen from '../LoadingScreen'
import {NoMatch} from "../NoMatch"
import './App.css';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


function AppRouter() {
  return (
    <LoadingScreen >
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/about/" component={About} />
              <Route path="/users/" component={User} />
              <Route path="/logout" component={Logout} />
              <Route path ="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        <ErrorModal />
      </div>
    </LoadingScreen >
  );
}

export default AppRouter;

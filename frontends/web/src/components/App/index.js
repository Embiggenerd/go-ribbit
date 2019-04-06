import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import User from '../User';
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
                  <Link to="/about">About</Link>
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

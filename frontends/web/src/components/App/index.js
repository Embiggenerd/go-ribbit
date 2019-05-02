import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Register from '../Register';
import Logout from '../Logout';
import Login from '../Login';
import Index from '../Index'
import { ErrorModal } from '../Modals';
import LoadingScreen from '../LoadingScreen';
import { NoMatch } from '../NoMatch';
import './App.css';

function AppRouter() {
  return (
    <LoadingScreen>
      <div className="router_wrapper">
        <Router>
          <div className="non-modal_wrapper">
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/register/" component={Register} />
              <Route path="/logout" component={Logout} />
              <Route path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        <ErrorModal />
      </div>
    </LoadingScreen>
  );
}

export default AppRouter;

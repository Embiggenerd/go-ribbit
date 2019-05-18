import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { USERNAME, USER_FORM, PASSWORD } from '../../constants';
import { handleFieldChange, auth, loginUser } from './actions';
import frog from './frogHomeLink.png';

const Login = ({ loginUser, handleFieldChange, userForm, history }) => {
  return (
    <div className="login_layout">
      <div className="login_nav">
        <Link className="small_frog--link" to="/">
          <img src={frog} />
        </Link>
      </div>
      <div className="form_box--wrapper">
        <div className="form_box--buffer" />
        <div className="form_box">
          <form
            className="login_form"
            // data-test-id={`${whichForm}-form`}
            onSubmit={e =>
              loginUser(e, userForm['username'], userForm['password'], history)
            }
          >
            {/* <label className="label">Username</label> */}
            <h2>Log in to Go Ribbit</h2>
            <input
              className="login_form--input"
              // data-test-id={`${whichForm}-username-input`}
              //3id={`${whichForm}-username`}
              type="text"
              name="username"
              placeholder="username"
              onChange={e => {
                handleFieldChange(e, USERNAME, USER_FORM);
              }}
              // value={values.username}
            />
            {/* <label className="label">Password</label> */}
            <input
              className="login_form--input"
              // data-test-id={`${whichForm}-password-input`}
              // id={`${whichForm}-password`}
              type="password"
              name="password"
              placeholder="password"
              onChange={e => {
                handleFieldChange(e, PASSWORD, USER_FORM);
              }}
              // value={values.password}
            />
            <input className="little_login" type="submit" value="Log In" />
            <p>
              New to Go Ribbit?{' '}
              <Link className="sign_up_here" to="/register">
                Sign up here.
              </Link>
            </p>
          </form>
        </div>
        <div className="form_box--buffer" />
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth, userForm }) => ({ auth, userForm });

const mapDispatchToProps = {
  handleFieldChange,
  loginUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

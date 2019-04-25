import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { USERNAME, USER_FORM, PASSWORD } from '../../constants';
import { handleFieldChange, auth, loginUser } from './actions';

const Login = ({ loginUser, handleFieldChange, userForm, history }) => {
  return (
    <form
      className="user_form"
      // data-test-id={`${whichForm}-form`}
      onSubmit={e => loginUser(e, userForm['username'], userForm['password'], history)}
    >
      <label className="label">Qsername</label>
      <input
        className="user_form--input"
        // data-test-id={`${whichForm}-username-input`}
        // id={`${whichForm}-username`}
        type="text"
        name="username"
        placeholder="username"
        onChange={e => {
          handleFieldChange(e, USERNAME, USER_FORM);
        }}
        // value={values.username}
      />
      <label className="label">Password</label>
      <input
        className="user_form--input"
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
      <input
        className="button button--user_submit"
        type="submit"
        value="submit"
      />
    </form>
    // <p>{footNote(whichForm)}</p>
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

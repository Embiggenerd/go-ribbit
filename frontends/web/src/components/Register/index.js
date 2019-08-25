import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { USERNAME, USER_FORM, PASSWORD } from '../../constants';
import { handleFieldChange, registerUser } from './actions';
import { NextButton } from '../subcomponents';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    step: 1
  };

  render() {
    const { handleFieldChange, registerUser, auth, userForm } = this.props;
    return (
      <div className="register_layout">
        <div className="register_nav">
          <h2 className="register_nav--heading" />
          <NextButton handleClick={this.handleNext} />
        </div>
        <form
          className="register_form"
          // data-test-id={`${whichForm}-form`}
          onSubmit={e =>
            registerUser(e, userForm['username'], userForm['password'], history)
          }
        >
          <label className="label">Username</label>
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
      </div>
      // <p>{footNote(whichForm)}</p>
    );
  }
  handleNext(){
    this.setState((state) => ({
      step: state.step + 1
    }))
  }
}

const mapStateToProps = ({ auth, userForm }) => ({ auth, userForm });

const mapDispatchToProps = {
  handleFieldChange,
  registerUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);

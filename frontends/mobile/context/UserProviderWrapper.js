import React from 'react';
import UserContext from './userContext';
const UserProvider = UserContext.Provider;

export default class UserProviderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.changeUserContext = this.changeUserContext.bind(this);
  }

  state = {
    username: '',
    userToken: null,
    authenticated: false
  };

  render() {
    return (
      <UserProvider
        value={{
          user: this.state,
          changeUserContext: this.changeUserContext
        }}
      >
        {this.props.children}
      </UserProvider>
    );
  }

  changeUserContext(field, value) {
    this.setState(
      {
        [field]: value
      },
      () => {
        console.log('newSate', this.state);
      }
    );
  }
}

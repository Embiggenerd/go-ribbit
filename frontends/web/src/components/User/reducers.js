import {AUTH, PASSWORD, USERNAME, USER_FORM} from '../../constants'

export const auth = (state = false, {type, auth}) => {
  switch (type) {
    case AUTH:
      return auth
    default:
      return state
  }
}

export const passwordFormReducer = (state = '', { key, text }) => {
  switch (key) {
    case PASSWORD:
      return text;
    default:
      return state;
  }
};

const usernameFormReducer = (state = '', { key, text }) => {
  switch (key) {
    case USERNAME:
      return text;
    default:
      return state;
  }
};

export const userForm = (
  state = { username: '', password: '' },
  { type, text, key }
) => {
  switch (type) {
    case USER_FORM:
      return {
        password: passwordFormReducer(state.password, { key, text }),
        username: usernameFormReducer(state.username, { key, text })
      };
    default:
      return state;
  }
};

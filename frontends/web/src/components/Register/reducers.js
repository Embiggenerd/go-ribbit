import {AUTH, PASSWORD, USERNAME, USER_FORM} from '../../constants'

export const auth = (state = false, {type, auth}) => {
  switch (type) {
    case AUTH:
      return auth
    default:
      return state
  }
}
/**
 * Each compositional reducer simply takes a key and text from the 
 * invoking reducer's payload, and uses the key as type, and the text
 * as value. The key is passed from the action creator. We could reducer
 * code further and simply use one compositional reducer with a larger 
 * switch, but that may become confusing.
 * @param {*} state 
 * @param {*} param1 
 */
const passwordFormReducer = (state = '', { key, text }) => {
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

/**
 * We are using reducer composition to control the username
 * and password fields of user form
 * @param {*} state 
 * @param {*} param1 
 */
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

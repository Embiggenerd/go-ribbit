import axios from 'axios'

import { AUTH, ERROR } from '../../constants'

export const auth = (e, name) => {
  e.preventDefault()
  return async dispatch => {
    try {
      await axios.post('api/users/getUserByUsername', {
        username: name
      });
      console.log("authActionInvoked")
    } catch (e) {
      console.log("authErr", e.response.data )
      dispatch({
        type: ERROR,
        error: e.response.data
      })
    } finally {
      dispatch({
        type: AUTH,
        auth: true
      });
    }
  };
};

export const handleFieldChange = (e, key, field) => {
  return dispatch => {
    if (!field) {
      return dispatch({
        type: key,
        text: e.target.value
      });
    }
    dispatch({
      type: field,
      key: key,
      text: e.target.value
    });
  };
};
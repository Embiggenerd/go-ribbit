import axios from 'axios'

import { AUTH, ERROR } from '../../constants'


export const auth = (e, name) => {
  e.preventDefault()
  return async dispatch => {
    try {
      await axios.post('/api/users/getUserByUsername', {
        username: name
      });
    } catch (e) {
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

export const loginUser = (e, username, password) => {
  e.preventDefault()
  return async dispatch => {
    try {
      await axios.post('/api/users/login', {
        username,
        password
      });
      dispatch({
        type: AUTH,
        auth: true
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e.response.data
      })
    }
    // } finally {
    //   dispatch({
    //     type: AUTH,
    //     auth: true
    //   });
    // }
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
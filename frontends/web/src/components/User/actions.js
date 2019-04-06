import axios from 'axios'

import { AUTH, ERROR } from '../../constants'

// Mimick this action creator for exiting loading screen 
// export const getTodos = () => {
//   return async dispatch => {
//     let res;
//     try {
//       res = await axios.get('/todos/get');

//       dispatch({
//         type: AUTH,
//         auth: true
//       });
//       dispatch({
//         type: GET_TODOS,
//         todos: res.data.todos
//       });
//     } catch (e) {
//     } finally {
//       dispatch({
//         type: LOADING,
//         loading: false
//       });
//     }
//   };
// };
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
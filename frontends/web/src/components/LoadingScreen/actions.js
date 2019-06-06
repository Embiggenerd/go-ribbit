const axios = require('axios');
const { AUTH, LOAD_USER, LOADING } = require('../../constants');

export const authUser = () => {
  return async dispatch => {
    let res;
    try {
      res = await axios.get('api/users/authReq');
      console.log('authUser res.data', res.data);

      dispatch({
        type: AUTH,
        auth: true
      });

      dispatch({
        type: LOAD_USER,
        user: res.data
      });
      
    } catch (e) {
      console.log('authUser e', e);
    } finally {
      setTimeout(() => {
        dispatch({
          type: LOADING,
          loading: false
        });
      }, 1000);
    }
  };
};

import { ERROR } from '../../constants'

export const handleCloseModal = () => {
  console.log("handleCloseModal invoked")
  return dispatch => {
    dispatch({
      type: ERROR,
      error: ''
    });
  };
};
import LOADING from '../../constants'

export const loadingReducer = (state = true, { type, loading }) => {
  switch (type) {
    case LOADING:
      return loading;
    default:
      return state;
  }
};
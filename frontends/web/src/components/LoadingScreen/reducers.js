import { LOADING, USER, LOAD_USERNAME, LOAD_USERID } from '../../constants';

export const loadingReducer = (state = true, { type, loading }) => {
  switch (type) {
    case LOADING:
      return loading;
    default:
      return state;
  }
};

const loadUserName = (state, { type, name }) => {
  switch (type) {
    case LOAD_USERNAME:
      return name;
    default:
      return state
  }
};

const loadUserID = (state, {type, id}) => {
  switch(type) {
    case LOAD_USERID:
      return id;
    default:
      return state
  }
}

/**
 * Using reducer composition to 
 * @param {*} state 
 * @param {*} param1 
 */
export const loadUser = (state = { name: '', id: null }, { type, user }) => {
  switch (type) {
    case USER:
      return {
        name: loadUserName(state.name, {
          type: LOAD_USERNAME,
          name: user.name
        }),
        id: loadUserID(state.id, { type: LOAD_USERID, id: user.id })
      };
    default:
      return state;
  }
};

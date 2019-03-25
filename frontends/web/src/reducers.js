import { combineReducers } from 'redux';
import { auth, userForm } from './components/User/reducers';
import { errorReducer } from './components/Modals/reducers';

export default combineReducers({
  auth,
  userForm,
  error: errorReducer
});

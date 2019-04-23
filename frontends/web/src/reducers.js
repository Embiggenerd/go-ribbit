import { combineReducers } from 'redux';
import { auth, userForm } from './components/User/reducers';
import { errorReducer } from './components/Modals/reducers';
import { loadingReducer, loadUser } from './components/LoadingScreen/reducers'

export default combineReducers({
  auth,
  userForm,
  error: errorReducer,
  loading: loadingReducer,
});

/**
 * shape of default state:
  {
    auth: false,
    userForm: {
      username: '',
      password: ''
    },
    error: false || {
      code: '',
      message: ''
    },
    loading: true,
    user: {
      name: '',
      id: number
    }
  }
 */

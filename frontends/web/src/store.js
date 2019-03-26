import { createStore, applyMiddleware } from 'redux';
import thunkMW from 'redux-thunk';
import reducers from './reducers';
import { reduxLogger } from './utils'



export default state => {
  if (process.env.NODE_ENV == "development"){
    return createStore(reducers, state, applyMiddleware(reduxLogger, thunkMW))
  }
  return createStore(reducers, state, applyMiddleware(thunkMW))
}

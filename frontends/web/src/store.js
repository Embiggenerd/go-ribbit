import { createStore, applyMiddleware } from 'redux';
import thunkMW from 'redux-thunk';
import reducers from './reducers';
import { reduxLogger } from './utils'

export default state => createStore(reducers, state, applyMiddleware(reduxLogger, thunkMW));

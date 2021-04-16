import { combineReducers } from 'redux';
import counterReducer from './components/Counter/counterReducer';
import userReducer from './components/User/userReducer';

export default combineReducers({
  counter: counterReducer,
  user: userReducer,
});

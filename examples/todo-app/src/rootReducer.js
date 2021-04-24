import { combineReducers } from 'redux';
import { todoReducer } from './components/Todo/todoReducer';

export const rootReducer = combineReducers({
  todos: todoReducer,
});

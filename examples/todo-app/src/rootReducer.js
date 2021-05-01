import { combineReducers } from 'redux';
import { todoReducer } from './components/Todo/todoReducer';
import { visibilityReducer } from './components/ToggleVisibility/toogleVisibilityReducer';

export const rootReducer = combineReducers({
  todos: todoReducer,
  filter: visibilityReducer,
});

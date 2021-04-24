/**
 * TODO Item : {
 * id: string,
 * text: string,
 * isDone: boolean
 * }
 */

import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM } from './todoActions';

const initialState = {
  list: [
    {
      id: '123123',
      text: 'something to do in the list',
      isDone: false,
    },
    {
      id: '12312111',
      text: 'shopping',
      isDone: false,
    },
  ],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id === action.payload),
      };
    case TOGGLE_ITEM: {
      const todoToToggle = state.list.find((todo) => todo.id === action.payload);
      todoToToggle.isDone = !todoToToggle.isDone;
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload).concat(todoToToggle),
      };
    }
    default:
      return state;
  }
};

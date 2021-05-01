import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } from './toggleVisibilityActions';

export const FILTERS = {
  ALL: 0,
  COMPLETED: 1,
  UNCOMPLETED: 2,
};

const initialState = FILTERS.ALL;

export const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return FILTERS.ALL;
    case SHOW_COMPLETED:
      return FILTERS.COMPLETED;
    case SHOW_UNCOMPLETED:
      return FILTERS.UNCOMPLETED;
  }
  return state;
};

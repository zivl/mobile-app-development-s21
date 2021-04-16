import { DECREMENT, INCREMENT } from './counterActions';

const initialState = {
  count: 0,
  showError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
        showError: false,
      };
    case DECREMENT: {
      if (state.count === 0) {
        return { ...state, showError: true };
      }
      return {
        ...state,
        count: state.count - 1,
      };
    }
  }
  return state;
};

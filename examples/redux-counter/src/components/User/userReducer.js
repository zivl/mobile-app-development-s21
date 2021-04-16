import { LOGOUT } from './userActions';

const initialState = {
  name: 'ziv',
  geo: 'ISR',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...state, name: '', geo: '' };
  }
  return state;
};

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const SET_USER_DATA = 'SET_USER_DATA';

const setData = (data) => ({ type: SET_USER_DATA, payload: data.username });

export const loadUserData = () => async (dispatch) => {
  // goes to some API
  const result = await (
    await fetch('https://api.soundcloud.com/me?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE')
  ).json();
  dispatch(setData(result));
};

export const addItem = (text) => ({
  type: ADD_ITEM,
  payload: {
    id: Date.now().toString(),
    text,
    isDone: false,
  },
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  payload: id,
});

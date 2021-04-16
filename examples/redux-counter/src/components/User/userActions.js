export const LOGOUT = 'LOGOUT';

const logoutUserFromServer = (name) => {
  // return new Promise(resolve => setTimeout(resolve, 1000))
  console.log('DONE!');
  console.log(`${name} is logged out`);
};

export const logoutUser = (name) => {
  logoutUserFromServer(name);
  return { type: LOGOUT, data: name };
};

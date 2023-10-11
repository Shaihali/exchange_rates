export const registerUserAction = (username, email, password) => {
  return {
    type: 'REGISTER_USER',
    payload: { username, email, password }
  };
};

export const loginUserAction = (username, password) => {
  return {
    type: 'LOGIN_USER',
    payload: { username, password }
  };
};

export const logoutUserAction = () => {
  return {
    type: 'LOGOUT_USER'
  };
};
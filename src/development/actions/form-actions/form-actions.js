export const signUpAction = (sign) => {
  return {
    type: 'SIGNUP',
    payload: sign,
  };
};

export const signInAction = (sign) => {
  return {
    type: 'SIGNIN',
    payload: sign,
  };
};
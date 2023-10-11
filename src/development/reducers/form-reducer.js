const defaultState = {
  signUp: 'signUp',
  signIn: null
};

export const formReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        signUp: action.payload,
      };
    case 'SIGNIN':
      return {
        ...state,
        signIn: action.payload,
      };
    default:
      return state;
  }
};
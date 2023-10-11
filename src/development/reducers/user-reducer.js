const defaultState = JSON.parse(localStorage.getItem('usersData')) ? JSON.parse(localStorage.getItem('usersData')) : {users: [], loggedInUser: null}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
        loggedInUser: action.payload,
      };
    case 'LOGIN_USER':
      const user = state.users.find((user) => user.username === action.payload.username && user.password === action.payload.password);
      return {
        ...state,
        loggedInUser: user || null
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        loggedInUser: null
      };
    default:
      return state;
  }
};
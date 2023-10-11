const defaultState = localStorage.getItem('symbols') ? JSON.parse(localStorage.getItem('symbols')) : {};

export const symbolsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SUCCESS':
      return {
        ...state,
        symbols: action.payload,
      };
      default:
      return state;
  } 
}
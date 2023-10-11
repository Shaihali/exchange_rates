import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../reducers/user-reducer';
import { formReducer } from '../reducers/form-reducer';
import { symbolsReducer } from '../reducers/symbols-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
  symbols: symbolsReducer
});

export const store = configureStore({
  reducer: rootReducer
});
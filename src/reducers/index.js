// src/reducers/index.js
import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer'; // You'll create this file next
import { reducer as formReducer } from 'redux-form'




const rootReducer = combineReducers({
  example: exampleReducer,
  form: formReducer,
});

export default rootReducer;
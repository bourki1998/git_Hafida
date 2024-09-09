// src/reducers/exampleReducer.js
const initialState = {
    value: 0,
  };
  
  const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          value: state.value + 1,
        };
      case 'decrement':
        return {
          ...state,
          value: state.value - 1,
        };
      default:
        return state;
    }
  };
  
  export default exampleReducer;
  
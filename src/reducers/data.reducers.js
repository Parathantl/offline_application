import {
    SET_DATA,
  } from "../actions/index";
    
  const initialState = { data: []};
  
  export const dataReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case `${SET_DATA}`:
        console.log('setData', payload)
        return { data: payload };
      default:
        return state;
    }
  }
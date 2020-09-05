import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AuthState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert

  return (
    <AlertContext.Provider value={{}}>{props.children}</AlertContext.Provider>
  );
};

export default AlertState;

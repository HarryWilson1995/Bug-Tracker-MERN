import React, { useReducer } from 'react';
import uuid from 'uuid';
import BugContext from './bugContext';
import bugReducer from './bugReducer';
import {
  ADD_BUG,
  DELETE_BUG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BUG,
  FILTER_BUGS,
  CLEAR_BUGS,
} from '../types';

const BugState = (props) => {
  const initialState = {
    bugs: [
      {
        id: 1,
        name: 'Coding Issue 1',
        description: 'Ruby language issue',
        status: 'Open',
        priority: 'Low',
      },
      {
        id: 2,
        name: 'Coding Issue 2',
        description: 'Ruby language issue',
        status: 'Open',
        priority: 'Normal',
      },
      {
        id: 3,
        name: 'Coding Issue 3',
        description: 'Ruby language issue',
        status: 'Open',
        priority: 'High',
      },
      {
        id: 4,
        name: 'Coding Issue 4',
        description: 'Ruby language issue',
        status: 'Open',
        priority: 'Normal',
      },
    ],
  };

  const [state, dispatch] = useReducer(bugReducer, initialState);

  // Add Bug

  // Delete Bug

  // Set Current Bug

  // Clear Current Bug

  // Update Bug

  // Filter Bugs

  // Clear Filter

  return (
    <BugContext.Provider
      value={{
        bugs: state.bugs,
      }}
    >
      {props.children}
    </BugContext.Provider>
  );
};

export default BugState;

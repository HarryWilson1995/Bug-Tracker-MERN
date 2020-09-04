import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
  CLEAR_FILTER,
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
        location: 'filename',
      },
      {
        id: 2,
        name: 'Coding Issue 2',
        description: 'Ruby language issue',
        status: 'Open',
        priority: 'Normal',
        location: 'filename',
      },
      {
        id: 3,
        name: 'Coding Issue 3',
        description: 'Ruby language issue',
        status: 'Open',
        priority: 'High',
        location: 'filename',
      },
      {
        id: 4,
        name: 'Coding Issue 4',
        description: 'Ruby language issue',
        status: 'Open',
        priority: 'Normal',
        location: 'filename',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(bugReducer, initialState);

  // Add Bug
  const addBug = (bug) => {
    bug.id = uuidv4();
    dispatch({ type: ADD_BUG, payload: bug });
  };

  // Delete Bug
  const deleteBug = (id) => {
    dispatch({ type: DELETE_BUG, payload: id });
  };

  // Set Current Bug
  const setCurrent = (bug) => {
    dispatch({ type: SET_CURRENT, payload: bug });
  };

  // Clear Current Bug
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Bug
  const updateBug = (bug) => {
    dispatch({ type: UPDATE_BUG, payload: bug });
  };

  // Filter Bugs
  const filterBugs = (text) => {
    dispatch({ type: FILTER_BUGS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <BugContext.Provider
      value={{
        bugs: state.bugs,
        current: state.current,
        filtered: state.filtered,
        addBug,
        deleteBug,
        updateBug,
        setCurrent,
        clearCurrent,
        filterBugs,
        clearFilter,
      }}
    >
      {props.children}
    </BugContext.Provider>
  );
};

export default BugState;

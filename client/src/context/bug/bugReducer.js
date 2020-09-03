import {
  ADD_BUG,
  DELETE_BUG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BUG,
  FILTER_BUGS,
  CLEAR_BUGS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_BUG:
      return {
        ...state,
        bugs: [...state.bugs, action.payload],
      };
    case DELETE_BUG:
      return {
        ...state,
        bugs: state.bugs.filter((bug) => bug.id !== action.payload),
      };
    default:
      return state;
  }
};

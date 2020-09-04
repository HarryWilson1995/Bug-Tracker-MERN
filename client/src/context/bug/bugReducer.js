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
    case UPDATE_BUG:
      return {
        ...state,
        bugs: state.bugs.map((bug) =>
          bug.id === action.payload.id ? action.payload : bug
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_BUGS:
      return {
        ...state,
        filtered: state.bugs.filter((bug) => {
          const regEx = new RegExp(`${action.payload}`, 'gi');
          return bug.name.match(regEx);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

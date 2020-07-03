import { combineReducers } from 'redux';
import mathReducer from './mathReducer';
/* import memoryReducer from './memoryReducer'; */

export default combineReducers({
  math: mathReducer
  /* memory: memoryReducer */
});


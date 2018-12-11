import { combineReducers } from 'redux';
import brickReducer from './bricksReducer';

export default combineReducers({
  bricks: brickReducer
});

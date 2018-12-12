import { combineReducers } from 'redux';
import brickReducer from './bricksReducer';
import questionReducer from './questionsReducer';

export default combineReducers({
  bricks: brickReducer,
  questions: questionReducer
});

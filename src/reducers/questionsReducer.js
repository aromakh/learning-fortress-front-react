import { NEW_QUESTION } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case NEW_QUESTION:
      return {
          ...state,
          item: action.payload
      }
    default:
      return state;
  }
}

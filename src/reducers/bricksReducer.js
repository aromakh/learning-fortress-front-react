import { FETCH_BRICKS, FETCH_BRICK, NEW_BRICK, EDIT_BRICK } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_BRICKS:
      return {
          ...state,
          items: action.payload
      }
    case FETCH_BRICK:
      return {
        ...state,
        item: action.payload
      }
    case NEW_BRICK:
      return {
        ...state,
        item: action.payload
      }
    case EDIT_BRICK:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}

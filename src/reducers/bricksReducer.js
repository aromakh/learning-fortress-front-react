import { FETCH_BRICKS, NEW_BRICK } from '../actions/types';

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
    default:
      return state;
  }
}

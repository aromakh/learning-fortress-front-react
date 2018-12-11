import { FETCH_BRICKS, NEW_BRICK } from './types';

export const fetchBricks = () => dispatch => {
  fetch('http://localhost:3001/brick')
    .then(res => res.json())
    .then(bricks => dispatch({
      type: FETCH_BRICKS,
      payload: bricks
    }));
}

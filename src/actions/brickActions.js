import { FETCH_BRICKS, FETCH_BRICK, NEW_BRICK, EDIT_BRICK } from './types';
const HOST_NAME = 'http://localhost:3001';

export const fetchBricks = () => dispatch => {
  fetch(HOST_NAME + '/brick')
    .then(res => res.json())
    .then(res => dispatch({
      type: FETCH_BRICKS,
      payload: res.data
    }));
}

export const fetchBrick = (brickId) => dispatch => {
  fetch(HOST_NAME + '/brick/' + brickId)
    .then(res => res.json())
    .then(brick => dispatch({
      type: FETCH_BRICK,
      payload: brick
    }));
}

export const createBrick = (brickData) => dispatch => {
  fetch(HOST_NAME + '/brick', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',  
    },
    body: JSON.stringify(brickData)
  })
    .then(res => res.json())
    .then(brick => {
      brick.pallet = '';
      dispatch({
        type: NEW_BRICK,
        payload: brick
      })
    });
}

export const updateBrick = (brickData) => dispatch => {
  fetch(HOST_NAME + '/brick/' + brickData.brickId, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',  
    },
    body: JSON.stringify(brickData)
  })
    .then(res => res.json())
    .then(brick => dispatch({
      type: EDIT_BRICK,
      payload: brick
    }));
}

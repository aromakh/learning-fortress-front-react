import { NEW_QUESTION } from './types';

const HOST_NAME = 'http://localhost:3001';

export const createQuestion = (brickId, questionId, questionData) => dispatch => {
  return new Promise((resolve, reject) => {
    fetch(HOST_NAME + '/brick/' + brickId + '/question/' + questionId, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',  
      },
      body: JSON.stringify(questionData)
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: NEW_QUESTION,
          payload: res
        });
        resolve(res);
      });
  });
}

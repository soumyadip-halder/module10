import axios from 'axios';
import {FETCH_ALL, FETCH_ERROR, FETCH_SUCCESSFUL} from './constant';

export const fetch = () => {
  return {
    type: FETCH_ALL,
  };
};

export const fetchSuccess = course => {
  return {
    type: FETCH_SUCCESSFUL,
    payload: course,
  };
};

export const fetchError = error => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const fetchIt = () => {
  return dispatch => {
    dispatch(fetch());
    axios
      .get('http://localhost:3001/vegan')
      .then(response => dispatch(fetchSuccess(response.data)))
      .catch(error => dispatch(fetchError(error.message)));
  };
};

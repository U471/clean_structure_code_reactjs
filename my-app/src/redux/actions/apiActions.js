// src/redux/actions/apiActions.js
import { API_GET_REQUEST, API_POST_REQUEST } from '../actionTypes';

export const fetchData = () => ({
  type: API_GET_REQUEST,
});

export const postData = (data) => ({
  type: API_POST_REQUEST,
  payload: data,
});
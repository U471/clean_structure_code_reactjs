// src/redux/sagas/apiSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { API_GET_REQUEST, API_GET_SUCCESS, API_POST_REQUEST, API_POST_SUCCESS, API_FAILURE } from '../actionTypes';

// API service calls
const getApiData = () => axios.get('https://jsonplaceholder.typicode.com/posts');
const postApiData = (data) => axios.post('https://jsonplaceholder.typicode.com/posts', data);

// GET saga
function* fetchGetDataSaga() {
  try {
    const response = yield call(getApiData);
    yield put({ type: API_GET_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: API_FAILURE, payload: error.message });
  }
}

// POST saga
function* postApiDataSaga(action) {
  try {
    const response = yield call(postApiData, action.payload);
    yield put({ type: API_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: API_FAILURE, payload: error.message });
  }
}

// Watcher saga
function* apiSaga() {
  yield takeLatest(API_GET_REQUEST, fetchGetDataSaga);
  yield takeLatest(API_POST_REQUEST, postApiDataSaga);
}

export default apiSaga;

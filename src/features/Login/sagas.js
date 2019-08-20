import axios from 'axios';
import { take, call, put, fork } from "redux-saga/effects";
import * as types from './types';
import * as constants from '../../common/constants';
import { storeToken } from '../../common/utils';


export function* loginWatcherSaga() {
  while(true) {
    const { user, history } = yield take(types.LOGIN_API_CALL_REQUEST);
    yield fork(workerSaga, user, history);
  }
}

export function fetchData(user) {
  const url = `${constants.BASEURL}/api/login`;

  return axios.post(url, user)
    .then(val => val)
    .catch(err => console.log('login failed ', err)) 
}

export function* workerSaga(user, history) {
  try {
    const response = yield call(fetchData, user);

    if (response && response.status === 200) {
      yield put({ type: types.LOGIN_API_CALL_SUCCESS, isLoggedIn: true });

      const { token } = response.data;
      yield call(storeToken, token);
      yield call(history.push, '/dashboard');
    } else {
      yield put({ type: types.LOGIN_API_CALL_FAILURE, error: 'error occured during loggin' });
    }
  } catch (error) {
    yield put({ type: types.LOGIN_API_CALL_FAILURE, error });
  }
}
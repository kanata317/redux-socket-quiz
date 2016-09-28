import loginSaga from './login';
import roomSaga from './room';
import quiz from './quiz';
import {fork} from 'redux-saga/effects';
export default function * rootSaga() {
    yield fork(loginSaga);
    yield fork(roomSaga);
    yield fork(quiz);
}

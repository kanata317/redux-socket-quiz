import * as types from '../constants/ActionTypes';
import {call, fork, put, take} from 'redux-saga/effects';
import * as api from '../api/login';
import {succeesLogin, failLogin} from '../actions/todos';

function * handleRequestLogin() {
    while (true) {
        const action = yield take(types.LOGIN);
        const {payload, error} = yield call(api.requestLogin, action.id, action.pass);;
        if (payload && !error) {
            yield put(succeesLogin());
        } else {
            console.error(error);
            yield put(failLogin());
        }
    }
}

export default function * loginSaga() {
    yield fork(handleRequestLogin);
}

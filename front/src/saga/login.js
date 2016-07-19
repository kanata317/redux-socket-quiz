import * as types from '../constants/ActionTypes';
import {call, fork, put, take} from 'redux-saga/effects';
import * as api from '../api/login';
import {succeesLogin, failLogin} from '../actions/actions';

function * handleRequestLogin(id, pass) {
        const {payload, error} = yield call(api.requestLogin, id, pass);;
        if (payload && !error) {
            yield put(succeesLogin());
        } else {
            console.error(error);
            yield put(failLogin());
        }

}

function * listenRequestLogin() {
    while (true) {
        const {id,pass} = yield take(types.LOGIN);
        yield fork(handleRequestLogin, id,pass);
    }
}

export default function * loginSaga() {
    yield fork(listenRequestLogin);
}

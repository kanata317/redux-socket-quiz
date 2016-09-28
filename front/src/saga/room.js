import * as types from '../constants/ActionTypes';
import {call, fork, put, take} from 'redux-saga/effects';
import * as api from '../api/room';
import {putRooms} from '../actions/actions';

function* handleFetchRooms() {
    while (true) {
        const action = yield take(types.FETCH_ROOMS);
        const {payload, error} = yield call(api.fetchRooms);
        if (payload && !error) {
            yield put(putRooms(payload));
        } else {
            console.error(error);
        }
    }
}

export default function* fetchRooms() {
    yield fork(handleFetchRooms);
}

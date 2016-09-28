import * as types from '../constants/ActionTypes';
import { takeLatest, delay } from 'redux-saga';

import {call, fork, put, take} from 'redux-saga/effects';
import * as api from '../api/login';
import * as actions from '../actions/actions';
import * as actionsTypes from '../constants/ActionTypes';

function* handleAnswer(id, pass) {
    yield delay(5000);
    yield put(actions.wait());
    yield delay(5000);
    yield put(actions.checkAnswer('1'));
    yield delay(5000);
    yield put(actions.nextQuiz());
}

export default function* quizSaga() {
    yield takeLatest(actionsTypes.ANSWER,handleAnswer);
}

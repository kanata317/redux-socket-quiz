import {CHANGE_QUIZ_TYPE, INPUT_ROOM_NAME} from '../constants/ActionTypes';

const initialState = {
    quizTypes: [
        {
            quizName: 'program',
            quizNumber: 10,
            quizId: '2'
        }, {
            quizName: 'db',
            quizNumber: 20,
            quizId: '4'
        }
    ],
    roomName: '',
    quizId: ''
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case CHANGE_QUIZ_TYPE:
            return Object.assign({}, state, {quizId: action.quizId});
        case INPUT_ROOM_NAME:
            return Object.assign({}, state, {roomName: action.roomName});
        default:
            return state;
    }
}

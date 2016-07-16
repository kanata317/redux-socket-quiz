import {LOGIN, INPUT_ID, INPUT_PASS, SUCCEES_LOGIN, FAIL_LOGIN} from '../constants/ActionTypes';

const initialState = {
    id: '',
    pass: '',
    succees: false
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case INPUT_ID:
            return Object.assign({}, state, {id: action.id});
        case INPUT_PASS:
            return Object.assign({}, state, {pass: action.pass});
        case SUCCEES_LOGIN:
            return Object.assign({}, state, {succees: true});
        case FAIL_LOGIN:
            return Object.assign({}, state, {succees: false});
        default:
            return state;
    }
}

import {LOGIN, INPUT_ID, INPUT_PASS} from '../constants/ActionTypes';

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
        case LOGIN:
            return Object.assign({}, state, {succees: action.succees});
        default:
            return state;
    }
}

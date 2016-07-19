import * as types from '../constants/ActionTypes';

export function addTodo(text) {
    return {type: types.ADD_TODO, text};
}

export function deleteTodo(id) {
    return {type: types.DELETE_TODO, id};
}

export function editTodo(id, text) {
    return {type: types.EDIT_TODO, id, text};
}

export function completeTodo(id) {
    return {type: types.COMPLETE_TODO, id};
}

export function completeAll() {
    return {type: types.COMPLETE_ALL};
}

export function clearCompleted() {
    return {type: types.CLEAR_COMPLETED};
}

export function login(id, pass) {
    return {type: types.LOGIN, id, pass};
}

export function succeesLogin() {
    return {type: types.SUCCEES_LOGIN};
}
export function failLogin() {
    return {type: types.FAIL_LOGIN};
}

export function inputID(id) {
    return {type: types.INPUT_ID, id};
}

export function inputPass(pass) {
    return {type: types.INPUT_PASS, pass};
}

export function openRoomDialog(roomId) {
    return {type: types.OPEN_ROOM_DIALOG, roomId};
}

export function closeRoomDialog() {
    return {type: types.CLOSE_ROOM_DIALOG};
}
export function fetchRooms() {
    return {type: types.FETCH_ROOMS};
}
export function fetchQuizTypes() {
    return {type: types.FETCH_QUIZ_TYPES};
}
export function changeQuizType(quizId) {
    return {type: types.CHANGE_QUIZ_TYPE, quizId};
}

export function inputRoomName(roomName) {
    return {type: types.INPUT_ROOM_NAME, roomName};
}

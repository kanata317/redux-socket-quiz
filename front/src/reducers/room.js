import {OPEN_ROOM_DIALOG, CLOSE_ROOM_DIALOG, PUT_ROOMS} from '../constants/ActionTypes';

const initialState = {
    roomDaialog: false,
    joinRoomId: '',
    rooms: [{}]
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case OPEN_ROOM_DIALOG:
            return Object.assign({}, state, {
                roomDaialog: true,
                joinRoomId: action.roomId
            });
        case CLOSE_ROOM_DIALOG:
            return Object.assign({}, state, {roomDaialog: false});
        case PUT_ROOMS:
            return Object.assign({}, state, {rooms: action.rooms});
        default:
            return state;
    }
}

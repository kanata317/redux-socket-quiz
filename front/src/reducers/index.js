import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import login from './login';
import room from './room';
import createRoom from './createRoom';

const rootReducer = combineReducers({login, room, createRoom, routing: routerReducer});

export default rootReducer;

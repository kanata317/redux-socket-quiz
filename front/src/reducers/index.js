import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import login from './login';
import room from './room';
import createRoom from './createRoom';
import quiz from './quiz';

const rootReducer = combineReducers({login, room, createRoom, quiz, routing: routerReducer});

export default rootReducer;

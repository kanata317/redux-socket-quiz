import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import todos from './todos';
import login from './login';

const rootReducer = combineReducers({todos, login, routing: routerReducer});

export default rootReducer;

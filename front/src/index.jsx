import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import App from './containers/App'
import Home from './containers/Home'
import Login from './containers/Login'
import configureStore from './store/configureStore';

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
    {/* Tell the Router to use our enhanced history */}
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="login" component={Login}/>
        </Route>
    </Router>
</Provider>, document.getElementById("root"));

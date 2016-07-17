import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware, push} from 'react-router-redux'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import rootReducer from '../reducers';
import loginSaga from '../saga/login';

export default function configureStore(initialState, history) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware, logger(), routerMiddleware(history)];
    const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));
    sagaMiddleware.run(loginSaga);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

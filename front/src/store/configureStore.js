import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware, push} from 'react-router-redux'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import rootReducer from '../reducers';
import rootSaga from '../saga/index';

export default function configureStore(initialState, history) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware, logger(), routerMiddleware(history)];
    const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));
    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

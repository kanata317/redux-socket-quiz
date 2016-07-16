import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import loginSaga from '../saga/login';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware, logger())), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f);
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

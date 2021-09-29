import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

/**
 * @exports
 * @constant store
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configureStore = (preloadedState = {}) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );
    /** run saga watchers */
    sagaMiddleware.run(rootSaga);
    return store;
};

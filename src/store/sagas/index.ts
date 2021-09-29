/** rootSaga.js */
import { all } from 'redux-saga/effects';
import { loginWatcherSaga } from './login.saga';

// import watchers from other files
export default function* rootSaga() {
    yield all([loginWatcherSaga()]);
}

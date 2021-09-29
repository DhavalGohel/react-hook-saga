import { takeLatest, call, put } from 'redux-saga/effects';
import { AppConstant } from '../../constants/app.contant';
import { LOGIN_WATCHER } from '../../constants/login.constant';
import { login } from '../actions/auth.action';
import { BaseAction } from '../actions/base.interface';

/**
 * @fuction loginApi
 * @param {Readonly<any>} payload
 * @returns {Response}
 */
async function loginApi(payload: any) {
    return fetch(`${AppConstant.BASE_URL}/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }).then((r) => r.json().then((res) => ({ status: r.status, data: res })));
}

/**
 * @fuction loginApi
 * @param {BaseAction} action
 */
function* loginEffectSaga(action: BaseAction) {
    try {
        const { data } = yield call(loginApi, action.payload);
        yield put(login(data));
    } catch (e) {
        yield put(login({ token: null }));
    }
}

/**
 * saga watcher that is triggered when dispatching action of type
 * 'LOGIN_WATCHER'
 */
export function* loginWatcherSaga() {
    yield takeLatest(LOGIN_WATCHER, loginEffectSaga);
}

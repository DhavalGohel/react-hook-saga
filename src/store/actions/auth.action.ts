import { LOGIN, LOGIN_WATCHER, LOGOUT } from '../../constants/login.constant';
import { AuthProps } from '../reducers/auth.reducer';
import { BaseAction } from './base.interface';

/**
 * @exports
 * @param {AuthProps} data
 * @returns BaseAction
 */
export const login = (data: AuthProps): BaseAction => ({
    type: LOGIN,
    payload: data,
});

/**
 * @exports
 * @param {AuthProps} data
 * @returns BaseAction
 */
export const logout = (): BaseAction => ({
    type: LOGOUT,
});

/**
 * @exports
 * @param {AuthProps} authParams
 * @returns BaseAction
 */
export function loginWatcher(authParams?: any): BaseAction {
    return { type: LOGIN_WATCHER, payload: authParams };
}

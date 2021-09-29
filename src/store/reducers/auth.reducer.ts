import { LOGIN, LOGOUT } from '../../constants/login.constant';
import { BaseAction } from '../actions/base.interface';
/**
 * @exports
 * @interface AuthProps
 */
export interface AuthProps {
    token: string | null;
}

export const initialState: Readonly<AuthProps> = {
    token: null,
};

export const authReducer = (state = initialState, action: BaseAction): AuthProps => {
    /**
     * @exports
     * @constant authReducer
     * @param {Readonly<AuthProps>} state
     * @param {BaseAction} action
     * @returns {AuthProps}
     */
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.payload,
            };
        case LOGOUT:
            return {
                token: null,
            };
        default:
            return state;
    }
};

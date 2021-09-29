import { combineReducers, Reducer, CombinedState } from 'redux';
import { AppStore } from '../store.interface';
import { authReducer } from './auth.reducer';

/**
 * @exports
 * @constant rootReducer
 * @returns {Reducer<CombinedState<AppStore>>}
 */
export const rootReducer: Reducer<CombinedState<AppStore>> = combineReducers({
    auth: authReducer,
});

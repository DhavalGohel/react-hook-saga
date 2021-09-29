import * as actions from '../src/store/actions/auth.action';

describe('actions', () => {
    it('should create an action to clear user token', () => {
        const expectedAction = {
            type: 'LOGIN',
            payload: { token: '' },
        };
        expect(actions.login({ token: '' })).toEqual(expectedAction);
    });

    it('should create an action to set user token', () => {
        const expectedAction = {
            type: 'LOGIN',
            payload: { token: 'xyz' },
        };
        expect(actions.login({ token: 'xyz' })).toEqual(expectedAction);
    });
});

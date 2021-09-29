import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import { configureStore } from '../src/store/index';
import Login from '../src/pages/auth/login.component';

describe('home-component', () => {
    const store = configureStore();

    it('login component rendered correctly', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>,
        );
    });

    it('login button clicked successfully', async () => {
        const { findByText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>,
        );
        fireEvent.click(await findByText('Submit'));
        const authTokenState = store.getState().auth.token;
        expect(authTokenState).toBeFalsy();
    });
});

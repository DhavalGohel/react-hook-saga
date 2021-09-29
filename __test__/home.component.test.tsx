import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Home from '../src/pages/home/home.component';

import { configureStore } from '../src/store/index';

describe('home-component', () => {
    const store = configureStore();

    it('home component rendered correctly', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </Provider>,
        );
    });
});

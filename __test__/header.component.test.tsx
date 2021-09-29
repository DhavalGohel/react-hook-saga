import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '../src/store/index';
import { Header } from '../src/components';

describe('header-component', () => {
    const store = configureStore();

    it('header component rendered correctly', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>,
        );
    });
});

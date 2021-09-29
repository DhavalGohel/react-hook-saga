import React from 'react';
import { cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../src/App';
import { configureStore } from '../src/store/index';

afterEach(cleanup);

const store = configureStore();
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        div,
    );
});

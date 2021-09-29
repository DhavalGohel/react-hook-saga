import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/index';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const store = configureStore();

/**
 * @exports
 * @class Main
 * @extends {React.Component}
 */
export const Main: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <StrictMode>
                    <Suspense fallback="Loading...">
                        <App />
                    </Suspense>
                </StrictMode>
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

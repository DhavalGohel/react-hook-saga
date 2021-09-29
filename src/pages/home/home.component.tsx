import React from 'react';
import '../../App.css';
import { Header } from '../../components';

/**
 * @exports
 * @class Home
 * @extends {React.Component}
 */
const Home: React.FC = () => {
    return (
        <>
            <Header />
            <div className="App-logo">
                <h1>Welcome to Home</h1>
            </div>
        </>
    );
};

export default Home;

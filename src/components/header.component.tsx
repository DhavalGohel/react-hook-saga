import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { AppStore } from '../store/store.interface';
import { AuthProps } from '../store/reducers/auth.reducer';
import { TestIdConstant } from '../constants/test-id.constant';

import '../App.css';
import { ROUTES } from '../enums/routes.enum';
import { logout } from '../store/actions/auth.action';

/**
 * @exports
 * @class Header
 * @extends {React.Component}
 */
const Header: React.FC = () => {
    const { token }: AuthProps = useSelector((state: AppStore) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Navbar
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    {token ? (
                        <>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    {' '}
                                    {token}{' '}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    type="button"
                                    data-testid={TestIdConstant.BUTTON_DATA_ID}
                                    onClick={() => {
                                        dispatch(logout());
                                        history.replace('/login');
                                    }}
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                {ROUTES.LOGIN}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;

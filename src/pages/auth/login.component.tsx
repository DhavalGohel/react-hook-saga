import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { Field, Form, Formik, FormikValues } from 'formik';
import { AppStore } from '../../store/store.interface';
import { loginWatcher } from '../../store/actions/auth.action';
import { AuthProps } from '../../store/reducers/auth.reducer';
import { FormValues } from './login.interface';
import { Header } from '../../components';
import { validationSchema } from './validation.schema';

const initialValues: FormValues = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
};

/**
 * @exports
 * @class Login
 * @extends {React.Component}
 */
const Login: React.FC = () => {
    const { token }: AuthProps = useSelector((state: AppStore) => state.auth);
    const dispatch = useDispatch();
    const login = bindActionCreators(loginWatcher, dispatch);
    const history = useHistory();
    const handleSubmit = (values: FormikValues) => {
        login(values);
    };

    useEffect(() => {
        if (token) history.replace('/');
    }, [token]);

    return (
        <>
            <Header />
            <div className="form-wrapper">
                <h2>Login</h2>
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting, errors }) => (
                        <Form className="form" noValidate>
                            <div className="form-group">
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    autoComplete="email"
                                />
                            </div>
                            {errors.email ? (
                                <div style={{ color: 'red' }}>{errors.email}</div>
                            ) : null}
                            <div className="form-group">
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    autoComplete="current-password"
                                />
                            </div>
                            {errors.password ? (
                                <div style={{ color: 'red' }}>{errors.password}</div>
                            ) : null}
                            <div style={{ margin: '5px' }}>
                                <button
                                    type="submit"
                                    className="form-button"
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default Login;

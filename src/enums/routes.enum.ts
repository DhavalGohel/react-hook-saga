import Login from '../pages/auth/login.component';
import Home from '../pages/home/home.component';

/**
 * @enum Routes
 */
export enum ROUTES {
    HOME = 'home',
    LOGIN = 'login',
}

/**
 * @constant ROOT_NAMES_AND_SCREEN
 */
export const ROOT_NAMES_AND_SCREEN = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    },
];

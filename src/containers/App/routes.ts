import Home from '../Home';

const appRoutes = {
    home: {
        path: '/',
        requireLogin: false,
        Component: Home,
    },
};
export default appRoutes;

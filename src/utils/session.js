import api from '../services/api';
import history from '../services/history';

const getSessionData = () => {
    return JSON.parse(sessionStorage.getItem('myproducts'));
};

export const eraseSession = () => {
    sessionStorage.removeItem('myproducts');
};

export const isSigned = () => {
    const sessionData = getSessionData();

    if (sessionData && sessionData.signed) {
        return true;
    }

    return false;
};

export const validateSession = async () => {
    const sessionData = getSessionData();

    if (!sessionData || !sessionData.token) {
        return;
    }

    api.defaults.headers.Authorization = `Bearer ${sessionData.token}`;

    try {
        await api.get('/session/validate', {});
    } catch (err) {
        sessionStorage.removeItem('myproducts');

        api.defaults.headers.Authorization = '';

        history.push('/');
    }
};

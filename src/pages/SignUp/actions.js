import api from '../../services/api';
import Notification from '../../components/Notification';
import history from '../../services/history';

export const signUp = async ({ name, email, password }) => {
    try {
        const session = await api.post('/session', {
            name,
            email,
            password,
        });

        api.defaults.headers.Authorization = `Bearer ${session.data.token}`;

        Notification.success('User registered with success');

        history.push('/');
    } catch (err) {
        Notification.error(err.response.data.message);
    }
};

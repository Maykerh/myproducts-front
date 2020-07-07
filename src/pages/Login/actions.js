import api from '../../services/api';
import Notification from '../../components/Notification';
import history from '../../services/history';

export const signIn = async ({ email, password }) => {
    try {
        const session = await api.post('/session', {
            email,
            password,
        });

        api.defaults.headers.Authorization = `Bearer ${session.data.token}`;

        history.push('/products');
    } catch (err) {
        Notification.error(err.response.data.message);
    }
};

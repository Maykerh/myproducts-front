import api from '../../services/api';
import Notification from '../../components/Notification';
import history from '../../services/history';

export const signUp = async ({ name, email, password }) => {
    try {
        await api.post('/users', {
            name,
            email,
            password,
        });

        Notification.success('User registered with success');

        history.push('/');
    } catch (err) {
        Notification.error(err.response.data.message);
    }
};

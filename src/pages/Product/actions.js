import Notification from '../../components/Notification';
import api from '../../services/api';

export const deleteProduct = async id => {
    try {
        await api.delete(`/products/${id}`);

        Notification.success('Product deleted');
    } catch (err) {
        Notification.error(err.response.data.message);
    }
};

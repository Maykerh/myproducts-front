import history from '../../services/history';
import Notification from '../../components/Notification';
import api from '../../services/api';

export const createProduct = async formValues => {
    try {
        await api.post('/products', formValues);

        Notification.success('Product created');

        history.push('/products');
    } catch (err) {
        Notification.error(err.response.data.message);
    }
};

export const loadProductData = async id => {
    try {
        const productData = await api.get(`/products/${id}`);

        return productData;
    } catch (err) {
        Notification.error(err.response.data.message);
    }
};
export const updateProduct = async (id, formValues) => {
    try {
        await api.put(`/products/${id}`, formValues);

        Notification.success('Product updated');

        history.push('/products');
    } catch (err) {
        Notification.error(err.response.data.message);
    }
};

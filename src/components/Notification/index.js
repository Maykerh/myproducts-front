import { notification } from 'antd';

const showNotification = (type, message, description) => {
    notification[type]({
        message,
        description,
    });
};

export default {
    error: (message, description) => showNotification('error', message, description),
    success: (message, description) => showNotification('success', message, description),
    info: (message, description) => showNotification('info', message, description),
    warning: (message, description) => showNotification('warning', message, description),
};

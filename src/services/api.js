import axios from 'axios';

const api = axios.create({
    baseURL: 'http://159.203.88.102',
});

export default api;

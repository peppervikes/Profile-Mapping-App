import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // Base URL of backend
});

export default api;

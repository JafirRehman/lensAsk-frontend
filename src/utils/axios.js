import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_API_BACKEND_BASE_URL;

export const axiosClient = () => {
    let defaultOptions = {
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            accept: 'application/json',
            authorization: `Bearer ${localStorage.getItem('token') ?? localStorage.getItem('temp_token')}`,
        },
    };

    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use((config) => {
        config.headers.common = {};

        return config;
    });

    return instance;
};

export default axiosClient;

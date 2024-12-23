import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8001/api', // Laravel API base URL
});

export default axiosInstance;

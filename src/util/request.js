import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function(response) {
        // Do something with response data
        if (response.status === 200) {
            return response.data;
        }
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    },
);

export default axiosInstance;

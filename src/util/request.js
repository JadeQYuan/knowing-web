import axios from "axios";

const BASE_URL = "http://localhost:9000";
// let BASE_URL = "http://knowing.zicp.vip/knowing-server";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
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

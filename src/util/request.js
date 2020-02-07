import axios from "axios";
import store from "../store";

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        if (store.state.token) {
            config.headers["Token"] = store.state.token;
        }
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function(response) {
        // Do something with response data
        if (response.status === 200) {
            if (response.data.code === 200) {
                return response.data.data;
            } else {
                return Promise.reject(response.data.message);
            }
        } else {
            return Promise.reject(response.status);
        }
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosInstance;

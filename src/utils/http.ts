import axios from "axios";
import storage from './storage'

const instance = axios.create({
    baseURL: 'https://localhost:6754/api/',
    timeout: 1000 * 5,
});

// 请求响应器
instance.interceptors.request.use(config => {
    config.headers = {
        'X-Token': String(storage.getToken()),
        ...config.headers
    }

    return config
}, (error) => {
    return Promise.reject(error)
})

// 请求响应器
instance.interceptors.response.use(response => {

    return response
}, (error) => {
    return Promise.reject(error)
})

export default instance


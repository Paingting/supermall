import axios from 'axios'

export function request(config) {

    const instance = new axios.create({
        baseURL: 'http://127.0.0.1:3000',
        timeout: 10000,
        changeOrigin: true
    });

    // 请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    }
    )
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    }
    )
    // 发送真正的网络请求
    return instance(config)
}


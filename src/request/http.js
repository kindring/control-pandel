import axios from 'axios';
// import QS from 'qs'; //序列化post类型的数据

// import { Toast } from 'vant';

import store from '@/store/index';

if (process.env.NODE_ENV == 'development') {
    // axios.defaults.baseURL = 'http://localhost:'
} else if (process.env.NODE_ENV == 'debug') {
    //
} else if (process.env.NODE_ENV == 'production') {
    //
}
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.error(err);
    }
)


/**
 * get请求器
 * @param {*} url 
 * @param {*} params 
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        }).then(
            resolve
        ).catch(
            reject
        )
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            params
        }).then(
            resolve
        ).catch(
            reject
        )
    })
}
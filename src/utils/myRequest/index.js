import axios from "axios";
import Store from './../../store/state';

function getBaseUrl(apiUrl) {
    // return `${process.env.MY_APP_baseURL}/`.concat(apiUrl);
    return ` https://www.baidu.com`.concat(apiUrl);
}
const axiosObejct = axios.create({
    timeout: 12000,
    responseType: 'json',
    withCredentials: false,
    validateStatus:  (status) => (status >= 100 && status < 600) // status >= 100 && status < 600; 都从 resolve 获取
});

// req拦截器
axiosObejct.interceptors.request.use(function (config) {
    config.headers = Object.assign(config.headers ? config.headers : {}, {
    // 塞一些参数
    // 'app-id': '1314520',
    // 'app-platform': 'H5'
    });
    return config;
});

// res拦截器
axiosObejct.interceptors.response.use( 
    response => response,
    error => Promise.reject(error) // reject这个错误信息 让catch捕获 /
);

const config = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
}

// 获取token
// alert()
let token = Store.token;
if (token) {
  config.headers['Authorization'] = 'Bearer ' + token
}

function myAxios(apiName, data, option){
    let result;
    return new Promise((resolve) => {
        axiosObejct({
          ...config,
          url: getBaseUrl(apiName),
          data,
          ...option
        }).then(
            res=>{
                let data = res.data;
                if (data.success) {
                    let resObj = {
                        success: true,
                        result: data.result,
                        code: 200,
                        message: '请求成功'
                    }
                    
                    resolve({token,resObj});
                } else {
                    return Promise.reject(res)
                }
            }
        ).catch((error)=>{
            var message = '系统异常';
            var code = -1000;
            if (error.message.includes('timeout')) {
                message = '接口请求超时';
                code = -9999;
            }
            if( error.data && error.status){
                message = error.data;
                code = error.status;
            }

            if(error.data.error.code===0){
                message = error.data.message
            }

            result = {
                success: false,
                code: code,
                message: message,
                result: {}
            };
            resolve(result);
        })
    })
}

export default myAxios
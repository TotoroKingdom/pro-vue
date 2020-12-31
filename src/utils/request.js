import axios from "axios";

//创建一个axios对象
const instance = axios.create({
    baseURL:'http://localhost:8088/',
    timeout: 5000
})

export function get(url,params) {
    return instance.get(url,{
        params:{

        }
    });
}

export function post(url,data) {
    return instance.post(url,data);
}

export function del(url) {
    return instance.delete(url);
}

export function put(url,data) {
    return instance.put(url,data);
}


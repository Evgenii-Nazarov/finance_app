import axios from 'axios';
import { get as getl } from 'lodash';
import { notification } from 'antd';

const server = 'http://localhost:5000';
console.log(server);

interface IHttp {
  method?: 'get' | 'post' | 'patch' | 'delete';
  url: string;
  data?: any;
  type?: string;
}

function http({ method, url, data }: IHttp) {
  return axios({
    method,
    url: server + url,
    data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
}

export function get({ url, data }: IHttp) {
  return http({ method: 'get', url, data });
}

export function post({ url, data, type }: IHttp) {
  return http({ method: 'post', url, data, type });
}

export function patch({ url, data, type }: IHttp) {
  return http({ method: 'patch', url, data, type });
}

export function del({ url, data }: IHttp) {
  return http({ method: 'delete', url, data });
}

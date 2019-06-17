import axios from 'axios';
import config from '../../config';
import { delayedPromise, newCancelToken } from './z-util';
import { token } from './fakeData/auth';

export function XXXget(query) {
  return (config.mode === config.MODE.FakeData)
    ? delayedPromise(token)
    : axios.get(`abc?page=${query.page}&limit=${query.limit}`, { cancelToken: newCancelToken() });
}

export function XXXpost(body) {
  return (config.mode === config.MODE.FakeData)
    ? delayedPromise(token)
    : axios.post('abc', body, { cancelToken: newCancelToken() });
}

export function XXXput(id, body) {
  return (config.mode === config.MODE.FakeData)
    ? delayedPromise(null, 'Update successful')
    : axios.put(`abc/${id}`, body, { cancelToken: newCancelToken() });
}

export function XXXdel(id) {
  return (config.mode === config.MODE.FakeData)
    ? delayedPromise()
    : axios.delete(`abc/${id}`, { cancelToken: newCancelToken() });
}

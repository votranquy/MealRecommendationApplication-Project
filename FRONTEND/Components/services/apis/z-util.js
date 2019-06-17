import { CancelToken } from 'axios';
import config from '../config';

export function newCancelToken(timeout = config.connectionTimeout) {
  const source = CancelToken.source();
  setTimeout(() => {
    source.cancel();
  }, timeout);

  return source.token;
}

export function delayedPromise(result, msg = 'Successful', code = 'OK',
  pagination = { page: 0, perPage: 10, total: 100 },
  config = { status: 200, errorString: '', delayMs: 1000 }) {
  const { page, perPage, total } = pagination;
  const temp = Array.isArray(result) ? { page, perPage, total } : null;
  const response = {
    status: config.status,
    data: {
      msg, code, result, ...temp,
    },
  };
  return new Promise((resolve, reject) => {
    if (config && config.errorString) {
      const error = new Error(config.errorString);
      error.response = response;
      reject(error);
    }
    setTimeout(() => resolve(response), config.delayMs);
  });
}

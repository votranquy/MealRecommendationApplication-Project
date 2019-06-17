/* DO NOT MODIFY THIS FILE WITHOUT PERMISSION */
//----------------------------------------------

import AuthService from './Authentication';

export function route(
  response,
  successCallback,
  codeCallback,
  cbPackage,
  otherHttpCallback,
) {
  if (response.status === 200) {
    handleAppLogic(response, successCallback, codeCallback, cbPackage);
  } else if (!otherHttpCallback
      || (otherHttpCallback && !otherHttpCallback(response.status, response.data, cbPackage))) {
    // navigator.alertMessage('HttpError', { msg: `${response.status} ${response.data ? response.data.msg : ''}` });
  }
}

export function routeError(error, errorCallback, cbPackage) {
  if (errorCallback && error.response) {
    errorCallback(error.response.status, error.response.data, cbPackage);
  } else if (!cbPackage || !cbPackage.coverCallback || !cbPackage.coverCallback(error)) {
    handleAxiosError(error, cbPackage);
  }
}

function handleAppLogic(
  response,
  successCallback,
  codeCallback,
  cbPackage,
) {
  if (response.data.code && response.data.code !== 'OK') {
    if (!codeCallback || (codeCallback && !codeCallback(response.data, cbPackage))) {
      // navigator.alertMessage('AppError', { msg: response.data.msg, error: response.data });
    }
  } else {
    successCallback(response.data, cbPackage);
  }
}

function handleAxiosError(error, cbPackage) {
  const msg = error.toString();
  console.log('****Unhandled AxiosError*****\n', error);
  if (msg === 'Error: Request failed with status code 401') {
    // Show token expired error
    // AuthService.logOut();
  } else if (msg === 'Error: Network Error' || msg === 'Cancel') {
    // Show network error popup
    // navigator.alertMessage('NetworkError');
  } else {
    // Show axios error (include internal exception + a part of http error)
    // navigator.alertMessage('AxiosError', { msg });
  }
}


import * as APIs from './apis';
import { route, routeError } from './app-handler';

async function signIn(email, password, handleSuccess, handleSignInCode, handleSignInError) {
  try {
    const response = await APIs.signIn({ email, password });
    route(response,
      handleSuccess,
      handleSignInCode);
  } catch (error) {
    routeError(error, handleSignInError, { coverCallback: error => true });
  }
}

async function signUp(email, password, name,handleSuccess, handleSignInCode, handleSignInError) {
  try {
    const response = await APIs.fetchsignUp({ email, password });
    route(response,
      handleSuccess,
      handleSignInCode);
  } catch (error) {
    routeError(error, handleSignInError, { coverCallback: error => true });
  }
}


export default {
  signIn,
  signUp
};

import axios from 'axios';
import config from '../config';
import { delayedPromise, newCancelToken } from './z-util';
import { token } from './fakeData/auth';

export function signIn(body) {
  return  axios.post('http://192.168.43.103/MealRecommendationApplication-Project/api/login.php', body, { cancelToken: newCancelToken() });
}
export function fetchsignUp(body) {
  return  axios.post('http://192.168.64.2/MealRecommendationApplication-Project/api/register.php', body, { cancelToken: newCancelToken() });
}

import { NavigationActions, DrawerActions } from 'react-navigation';
import { Alert } from 'react-native';
import i18n from './i18n';

let _topNavigator;

function setTopLevelNavigator(navigatorRef) {
  _topNavigator = navigatorRef;
}

function navigate(routeName, params) {
  _topNavigator.dispatch(NavigationActions.navigate({
    routeName,
    params,
  }));
}

function toggleMenu() {
  _topNavigator.dispatch(DrawerActions.toggleDrawer());
}

function alertMessage(name, params) {
  let msg = params ? params.msg : '';
  const error = params && params.error ? JSON.stringify(params.error) : '';

  switch (name) {
    case 'ComingSoon':
      name = '';
      msg = i18n.t('CM.ComingSoon');
      break;
    case 'AppError':
      break;
    case 'NetworkError':
      name = '';
      msg = i18n.t('CM.NetWorkError');
      break;
    case 'AxiosError': msg = msg.split('Error: ')[1];
      break;
    default:
      _topNavigator.dispatch(NavigationActions.navigate({
        name,
        params,
      }));
      return;
  }

  Alert.alert(name, `${msg}\n${error}`);
}

function goBack() {
  _topNavigator.dispatch(NavigationActions.back());
}

export default {
  setTopLevelNavigator,
  toggleMenu,
  navigate,
  alertMessage,
  goBack,
};

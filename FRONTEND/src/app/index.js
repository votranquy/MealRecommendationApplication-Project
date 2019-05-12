import React, { Component } from 'react';
import AppContainer from './app-navigation';
import navigator from '../navigator';

export default class App extends Component {
  render() {
    return (
      <AppContainer
        ref={(navigatorRef) => { navigator.setTopLevelNavigator(navigatorRef); }}
      />
    );
  }
}

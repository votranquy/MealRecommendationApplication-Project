import React, { Component } from 'react';
import { StatusBar, Navigator } from 'react-native';

import Authentication from './Authentication';
import ChangeInfo from './ChangeInfo';
import Main from './Main';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <Navigator 
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return <Main navigator={navigator} />;
                        case 'CHANGE_INFO': return <ChangeInfo navigator={navigator}  />;//user={route.user}
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />; 
                    }
                }}
                configureScene={route => {
                    if (route.name === 'AUTHENTICATION') return Navigator.SceneConfigs.FloatFromRight;
                    return Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        );
    }
}

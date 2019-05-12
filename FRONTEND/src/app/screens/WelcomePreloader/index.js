/*
  This is template for creating new component, please clone from here for coding easier
*/
// Import external libs
import React, { Component } from 'react';
// Import UI
import { ImageBackground } from 'react-native';
import styles from './styles';
import navigator from '../../../navigator';
import theme from '../../../theme';
// Import internal logics

class WelcomePreloader extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    setTimeout(() => {
      navigator.navigate('Welcome');
    }, 1000);
  }

  render() {
    return (
      <ImageBackground source={theme.Image.Bg.Welcome} style={styles.imgBackground} />
    );
  }
}

export default WelcomePreloader;

// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text } from '../../components';
import styles from './styles';
// Import internal logics
import navigator from '../../navigator';

class WelcomePreloader extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {

    };

    setTimeout(() => {
      navigator.navigate('WelcomeSignedOutUser');
    }, 1000);
  }

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text>Preloader</Text>
      </View>
    );
  }
}

export default WelcomePreloader;

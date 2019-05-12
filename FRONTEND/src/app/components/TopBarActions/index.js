// Import external libs
import React, { Component } from 'react';
// Import UI
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity } from '../../../components';
import styles from './styles';
import theme from '../../../theme';
// Import internal logics
import navigator from '../../../navigator';

class TopBarActions extends Component {
  static propsType = {
  }

  static defaultProps = {
    iconColor: theme.Color.White,
  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { style, iconColor } = this.props;
    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={navigator.navigate('Profile')}
        >
          <Icon name="user-circle" size={20} color={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={navigator.toggleMenu}
        >
          <Icon name="bars" size={20} color={iconColor} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TopBarActions;

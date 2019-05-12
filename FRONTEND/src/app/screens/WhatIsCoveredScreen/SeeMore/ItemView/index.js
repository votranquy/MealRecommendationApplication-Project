// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text } from '../../../../../components';
import styles from './styles';
// Import internal logics

class ItemView extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { style, item } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.txtLeft}>
          {item.info}
        </Text>
        <Text style={styles.txtRight}>
          {item.value}
        </Text>
      </View>
    );
  }
}

export default ItemView;

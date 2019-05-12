/*
  This is template for creating new component, please clone from here for coding easier
*/
// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text } from '../../../../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../../i18n';
import ItemView from './ItemView';

class SeeMore extends Component {
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
    const { style, items, ...more } = this.props;
    return (
      <View style={[styles.container, style]} {...more}>
        {
          items.map(item => <ItemView item={item} />)
        }
      </View>
    );
  }
}

export default SeeMore;

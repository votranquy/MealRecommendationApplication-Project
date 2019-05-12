/*
  This is template for creating new component, please clone from here for coding easier
*/
// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text } from '../../../../../../components';
import styles from './styles';
// Import internal logics

class TemplateComponent extends Component {
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
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text>Template</Text>
      </View>
    );
  }
}

export default TemplateComponent;

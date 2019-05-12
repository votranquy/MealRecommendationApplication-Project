/*
  This is template for creating new component, please clone from here for coding easier
*/
// Import external libs
import React, { Component } from 'react';
// Import UI
import { MainFrame } from '../../../../components';
import { View, Text } from '../../../../../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../../../i18n';
import theme from '../../../../../theme';


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
    const { style, claim } = this.props;
    return (
      <View>
        <Text>{claim.type}</Text>
      </View>
    );
  }
}

export default TemplateComponent;

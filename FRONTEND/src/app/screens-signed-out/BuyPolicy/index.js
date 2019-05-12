// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text } from '../../../components';
import styles from './styles';
import { MainFrame } from '../../components';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';

class BuyPolicy extends Component {
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
      <MainFrame
        style={styles.container}
        titleImage={theme.Image.Ic.BuyPolicy}
        title={i18n.t('SOBP.Title')}
        message={i18n.t('SOBP.PolicyQuestion')}
      >
        <Text>BuyPolicy</Text>
      </MainFrame>
    );
  }
}

export default BuyPolicy;

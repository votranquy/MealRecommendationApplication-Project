// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text } from '../../../components';
import { MainFrame } from '../../components';
import { ClaimOverView, ClaimDetail } from '../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';
// TODO: wil be remove
import claimData from './fakeData';

class MyClaimDetail extends Component {
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
    const { style, navigation } = this.props;
    const index = navigation.getParam('key');
    return (
      <MainFrame
        style={styles.container}
        titleImage={theme.Image.Ic.MyClaim}
        title={i18n.t('MC.Title')}
        headerColor={theme.Color.MainFrameHeaderYellow}
      >
        <View style={styles.container}>
          <ClaimOverView claim={claimData[index]} />
          <ClaimDetail claim={claimData[index]} />
        </View>
      </MainFrame>
    );
  }
}

export default MyClaimDetail;

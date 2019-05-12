// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, FlatList,
} from '../../../components';
import { MainFrame } from '../../components';
import theme from '../../../theme';
import styles from './styles';
// Import internal logics
import i18n from '../../../i18n';
import fakeDataPolicy from './fakeData';

class PrivacyPolicy extends Component {
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
        style={[styles.container, style]}
        titleImage={theme.Image.Ic.PrivacyPolicy}
        headerColor={theme.Color.MainFrameHeaderBlue}
        title={i18n.t('PrP.Title')}
      >
        <FlatList
          data={fakeDataPolicy}
          extraData={this.state}
          renderItem={({ item }) => (
            <View style={[styles.containerForm]}>
              <Text style={styles.textTitlePolicy}>{item.title}</Text>
              <Text style={styles.textBodyPolicy}>{item.body}</Text>
            </View>
          )}
        />
      </MainFrame>
    );
  }
}

export default PrivacyPolicy;

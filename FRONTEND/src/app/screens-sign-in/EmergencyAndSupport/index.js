// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, FlatList, TextButton, Linking,
} from '../../../components';
import { MainFrame } from '../../components';
import theme from '../../../theme';
import styles from './styles';
// Import internal logics
import i18n from '../../../i18n';
import fakeDataSupport from './fakeData';

class EmergencyAndSupport extends Component {
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
        titleImage={theme.Image.Ic.Emergency}
        headerColor={theme.Color.MainFrameHeaderBlueFAQ}
        title={i18n.t('EAS.Title')}
      >
        <View style={[styles.container]}>
          <FlatList
            data={fakeDataSupport}
            extraData={this.state}
            renderItem={({ item }) => (
              <View style={[styles.containerForm]}>
                <Text style={styles.textTitleSupport}>{item.title}</Text>
                <Text style={styles.textBodySupport}>{item.body}</Text>
                <TextButton
                  textStyle={styles.textNumberPhone}
                  onPress={() => { Linking.openURL(`tel:${item.numberPhone}`); }}
                  text={item.numberPhone}
                />
              </View>
            )}
          />
        </View>
      </MainFrame>
    );
  }
}

export default EmergencyAndSupport;

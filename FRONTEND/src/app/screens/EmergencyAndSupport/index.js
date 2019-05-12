// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, Button, Image,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';

export default class EmergencyAndSupport extends Component {
    static navigationOptions = {
      title: i18n.t('CM.MSIG'),
      headerBackground: (
        <Image
          style={styles.iconMSIG}
          source={theme.Image.Si.iconMSIG}
        />
      ),
      headerRight: <TopBarActions />,
    };

    render() {
      const phoneEmergency = {
        number: '(65) 6323 8288',
        prompt: false,
      };
      const phoneEnquiries = {
        number: '(65) 6827 7602',
        prompt: false,
      };
      return (
        <View style={styles.container}>
          <View style={styles.ctnHeader}>
            <Image style={styles.icoExclamation} source={theme.Image.emergency.iconEmergency} />
            <Text style={styles.txtEmerTitle}>{i18n.t('EAS.Title')}</Text>
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.txtTitleItem}>{i18n.t('EAS.TitleEmergencies')}</Text>
            <Text style={styles.txtGuide}>{i18n.t('EAS.EmergencyGuide')}</Text>
            <Button
              style={styles.btnPhone}
              text={i18n.t('EAS.PhoneEmergency')}
              textStyle={styles.txtBtnPhone}
              onPress={() => {}}
            />
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.txtTitleItem}>{i18n.t('EAS.TitleEnquiries')}</Text>
            <Text style={styles.txtGuide}>{i18n.t('EAS.EnquiryGuide')}</Text>
            <Button
              style={styles.btnPhone}
              text={i18n.t('EAS.PhoneEnquiries')}
              textStyle={styles.txtBtnPhone}
              onPress={() => {}}
            />
          </View>
        </View>
      );
    }
}

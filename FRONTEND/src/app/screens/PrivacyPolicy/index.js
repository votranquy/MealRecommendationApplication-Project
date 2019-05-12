// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, Image, ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';


export default class PrivacyPolicy extends Component {
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
      return (
        <ScrollView style={styles.container}>
          <View style={styles.ctnLoginHeader}>
            <Image style={styles.iconLock} source={theme.Image.privacy.iconPrivacy} />
            <Text style={styles.txtPrivacyTitle}>{i18n.t('PrP.Title')}</Text>
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.txtTitle}>{i18n.t('PrP.ProtectData')}</Text>
            <Text style={styles.txtDetail}>{i18n.t('PrP.ProtectDataDetail')}</Text>
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.txtTitle}>{i18n.t('PrP.Title')}</Text>
            <Text style={styles.txtDetail}>{i18n.t('PrP.PrivacyDetail')}</Text>
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.txtDetail}>{i18n.t('PrP.WeTake')}</Text>
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.txtDetail}>{i18n.t('PrP.MSIGCollect')}</Text>
          </View>
        </ScrollView>
      );
    }
}

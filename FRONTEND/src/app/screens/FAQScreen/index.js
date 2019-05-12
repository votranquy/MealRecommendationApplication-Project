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
import navigator from '../../../navigator';
import theme from '../../../theme';
import ExpandableView from '../../components/ExpandableView';

const labels = [];


class FAQScreen extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  static navigationOptions = {
    title: 'MSIG',
    headerRight: <TopBarActions />,
  };


  constructor(props) {
    super(props);

    this.state = {
      currentPosition: 2,
      status: false,
      checked: false,
      activeSwitch: 1,
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  _openTapConfirm() {
    navigator.navigate('CSBankAccSetup');
  }

  _openTapEdit() {

  }

  render() {
    const {
      currentPosition, status, data, title, checked, activeSwitch,
    } = this.state;

    return (
      // wrap content
      <ScrollView>
        <View style={[styles.container]}>
          <View style={styles.ctnSubmitClaimHeader}>
            <Image style={styles.iconBuySubmitClaim} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtSubmitClaimText}>{i18n.t('FAQ.FAQTitle')}</Text>
          </View>
          <View style={styles.container}>
            <View style={[styles.containerForm]}>
              <ExpandableView
                title={<Text style={styles.txtLabelQuestion}>{i18n.t('FAQ.LBLFAQQuestion')}</Text>}
              >
                <Text style={styles.txtLabelAnswer}>{i18n.t('FAQ.LBLFAQAnswer')}</Text>
              </ExpandableView>


              <ExpandableView
                title={<Text style={styles.txtLabelQuestion}>{i18n.t('FAQ.LBLFAQQuestion')}</Text>}
              >
                <Text style={styles.txtLabelAnswer}>{i18n.t('FAQ.LBLFAQAnswer')}</Text>
              </ExpandableView>


              <ExpandableView
                title={<Text style={styles.txtLabelQuestion}>{i18n.t('FAQ.LBLFAQQuestion')}</Text>}
              >
                <Text style={styles.txtLabelAnswer}>{i18n.t('FAQ.LBLFAQAnswer')}</Text>
              </ExpandableView>


              <ExpandableView
                title={<Text style={styles.txtLabelQuestion}>{i18n.t('FAQ.LBLFAQQuestion')}</Text>}
              >
                <Text style={styles.txtLabelAnswer}>{i18n.t('FAQ.LBLFAQAnswer')}</Text>
              </ExpandableView>

              <View style={styles.groupItemsForm} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default FAQScreen;

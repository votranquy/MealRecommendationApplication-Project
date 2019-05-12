// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, Image, ScrollView, Button, TextInput,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';
import ExpandableView from '../../components/ExpandableView';

const labels = [];


class MyProfileScreen extends Component {
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
    this.state = { textLastName: '', TextInputDisableStatus: true };
  }

  onPageChange(position) {
  }

  _openTapConfirm() {
    navigator.navigate('CSBankAccSetup');
  }

  _openTapEditPersonal() {
    this.setState({ TextInputDisableStatus: false });
  }

  _openTapEditContact() {

  }

  _openTapEditBankAcc() {

  }

  _openTapEditPolicy() {

  }

  render() {
    const {
      textLastName, TextInputDisableStatus,
    } = this.state;

    return (
      // wrap content
      <ScrollView>
        <View style={[styles.container]}>
          <View style={styles.ctnMyProfileHeader}>
            <Image style={styles.iconMyProfile} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtMyProfileText}>{i18n.t('MP.MyProfileTitle')}</Text>
          </View>
          <View style={styles.container}>
            <View style={[styles.containerForm]}>
              <View style={[styles.containerExpense]}>
                <ExpandableView
                  title={<Text style={styles.txtLabelTitle}>{i18n.t('MP.LBLPersonal')}</Text>}
                >
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLPersonalQuestion1')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLPersonalAnswer1')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLPersonalQuestion2')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLPersonalAnswer2')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLPersonalQuestion3')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLPersonalAnswer3')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLPersonalQuestion4')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLPersonalAnswer4')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLPersonalQuestion5')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLPersonalAnswer5')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLPersonalQuestion6')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLPersonalAnswer6')}</Text>
                  </View>
                  <Button style={styles.buttonEdit} onPress={this._openTapEditPersonal} text={i18n.t('MP.BtnEdit')} />
                </ExpandableView>
              </View>

              <View style={[styles.containerExpense]}>
                <ExpandableView
                  title={<Text style={styles.txtLabelTitle}>{i18n.t('MP.LBLContact')}</Text>}
                >
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLContactQuestion1')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLContactAnswer1')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLContactQuestion2')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLContactAnswer2')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLContactQuestion3')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLContactAnswer3')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLContactQuestion4')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLContactAnswer4')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLContactQuestion5')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLContactAnswer5')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLContactQuestion6')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLContactAnswer6')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLContactQuestion7')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLContactAnswer7')}</Text>
                  </View>
                  <Button style={styles.buttonEdit} onPress={this._openTapEditContact} text={i18n.t('MP.BtnEdit')} />
                </ExpandableView>
              </View>

              <View style={[styles.containerExpense]}>
                <ExpandableView
                  title={<Text style={styles.txtLabelTitle}>{i18n.t('MP.LBLBankAccount')}</Text>}
                >
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLBankAccQuestion1')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLBankAccAnswer1')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLBankAccQuestion2')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLBankAccAnswer2')}</Text>
                  </View>
                  <Button style={styles.buttonEdit} onPress={this._openTapEditBankAcc} text={i18n.t('MP.BtnEdit')} />
                </ExpandableView>
              </View>

              <View style={[styles.containerExpense]}>
                <ExpandableView
                  title={<Text style={styles.txtLabelTitle}>{i18n.t('MP.LBLPolicyPeriod')}</Text>}
                >
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLPolicyQuestion1')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLPolicyAnswer1')}</Text>
                  </View>
                  <View style={styles.groupItemsForm}>
                    <Text style={styles.txtLabelQuestion}>{i18n.t('MP.LBLPolicyQuestion2')}</Text>
                    <Text style={styles.txtLabelAnswer}>{i18n.t('MP.LBLPolicyAnswer2')}</Text>
                  </View>
                  <Button style={styles.buttonEdit} onPress={this._openTapEditPolicy} text={i18n.t('MP.BtnEdit')} />
                </ExpandableView>
              </View>


              <View style={styles.groupItemsForm} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default MyProfileScreen;

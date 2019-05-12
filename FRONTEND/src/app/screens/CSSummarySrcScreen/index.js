// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
// Import UI
import { Animated, TouchableHighlight } from 'react-native';
// TODO: 
// import SwitchButton from 'switch-button-react-native';
import {
  View, Text, TextInput, Button, Image, ScrollView, CheckBox,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';
import ExpandableView from '../../components/ExpandableView';

const labels = [];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#8bc35c',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#8bc35c',
  stepStrokeUnFinishedColor: theme.Color.Gray,
  separatorFinishedColor: '#8bc35c',
  separatorUnFinishedColor: theme.Color.Gray,
  stepIndicatorFinishedColor: theme.Color.White,
  stepIndicatorUnFinishedColor: theme.Color.White,
  stepIndicatorCurrentColor: theme.Color.White,
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: theme.Color.Black,
  stepIndicatorLabelFinishedColor: theme.Color.Black,
  stepIndicatorLabelUnFinishedColor: theme.Color.MediumGray,
  labelColor: theme.Color.MediumGray,
  labelSize: 11,
  currentStepLabelColor: theme.Color.DarkestGray,
};


class CSSummarySrcScreen extends Component {
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
            <Text style={styles.txtSubmitClaimText}>{i18n.t('CSS.PPTxtSubmitClaim')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepSubmitClaim}>
              <StepIndicator
                customStyles={customStyles}
                stepCount={4}
                currentPosition={currentPosition}
              />
            </View>
            <View style={[styles.containerForm]}>
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelSubmitTitle}>{i18n.t('CSS.METxtMedicalTitle')}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLQuestion1')}</Text>
                <Text style={styles.txtLabelAnswer}>{i18n.t('CSS.LBLAnswer1')}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLQuestion2')}</Text>
                <Text style={styles.txtLabelAnswer}>{i18n.t('CSS.LBLAnswer2')}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLQuestion3')}</Text>
                <Text style={styles.txtLabelAnswer}>{i18n.t('CSS.LBLAnswer3')}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLQuestion4')}</Text>
                <Text style={styles.txtLabelAnswer}>{i18n.t('CSS.LBLAnswer4')}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLQuestion5')}</Text>
                <Text style={styles.txtLabelAnswer}>{i18n.t('CSS.LBLAnswer5')}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLQuestion6')}</Text>
                <Text style={styles.txtLabelAnswer}>{i18n.t('CSS.LBLAnswer6')}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLQuestion7')}</Text>
                <Text style={styles.txtLabelAnswer}>{i18n.t('CSS.LBLAnswer7')}</Text>
              </View>

              <View style={styles.groupItemsViewToggle}>
                <ExpandableView
                  title={<Text style={styles.txtLabelExpense}>{i18n.t('CSS.LBLExpense1')}</Text>}
                >
                  <Text style={styles.txtLabelAnswer}>{i18n.t('CSS.LBLExpense1')}</Text>
                </ExpandableView>
              </View>

              <View style={styles.groupItemsViewToggle}>
                <ExpandableView
                  title={<Text style={styles.txtLabelExpense}>{i18n.t('CSS.LBLExpense1')}</Text>}
                >
                  <Text style={styles.txtLabelAnswer}>{i18n.t('CSS.LBLExpense2')}</Text>
                </ExpandableView>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLQuestion8')}</Text>
                <Text style={styles.txtLabelAnswer}>{i18n.t('CSS.LBLAnswer8')}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLImageMedicalBill')}</Text>
                <View style={styles.ImageCapture}>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                </View>
                <View style={styles.ImageCapture}>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                </View>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLImageMedicalReport')}</Text>
                <View style={styles.ImageCapture}>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                </View>
                <View style={styles.ImageCapture}>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Image
                      style={styles.button}
                      source={theme.Image.kpmg.ImgCapture}
                    />
                  </TouchableHighlight>
                </View>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelSubmitTitle}>{i18n.t('CSS.OITxtMedicalTitle')}</Text>
              </View>

              <View style={styles.switchContain}>
                <Text style={styles.txtLabelSwitch}>{i18n.t('CSS.LBLSwitchName1')}</Text>
                <View>
                  {/* <SwitchButton
                    onValueChange={val => this.setState({ activeSwitch: val })}
                    text1="YES" // optional: first text in switch button --- default ON
                    text2="NO" // optional: second text in switch button --- default OFF
                    switchWidth={85} // optional: switch width
                    switchHeight={35} // optional: switch height
                    switchdirection="ltr" // optional: switch button
                    switchBorderRadius={100} // optional: switch border radius
                    switchSpeedChange={1000} // optional: button change speed
                    switchBorderColor="#d4d4d4" // optional: switch border color
                    switchBackgroundColor="#fff" // optional: switch background color
                    btnBorderColor="#e53030" // optional: button border color
                    btnBackgroundColor="#e53030" // optional: button background color
                    fontColor="#b1b1b1" // optional: text font color
                    activeFontColor="#e53030"
                    circleSize={30}
                  /> */}
                  { this.activeSwitch === 1 ? console.log('view1') : console.log('view2') }
                </View>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLInputName1')}</Text>
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Type something"
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline
                />
              </View>

              <View style={styles.switchContain}>
                <Text style={styles.txtLabelSwitch}>{i18n.t('CSS.LBLSwitchName2')}</Text>
                <View>
                  {/* <SwitchButton
                    onValueChange={val => this.setState({ activeSwitch: val })}
                    text1="YES" // optional: first text in switch button --- default ON
                    text2="NO" // optional: second text in switch button --- default OFF
                    switchWidth={85} // optional: switch width --- default 44
                    switchHeight={35} // optional: switch height --- default 100
                    switchdirection="ltr" // optional: switch button direction ( ltr and rtl ) --- default ltr
                    switchBorderRadius={100} // optional: switch border radius --- default oval
                    switchSpeedChange={1000} // optional: button change speed --- default 100
                    switchBorderColor="#d4d4d4" // optional: switch border color --- default #d4d4d4
                    switchBackgroundColor="#fff" // optional: switch background color --- default #fff
                    btnBorderColor="#e53030" // optional: button border color --- default #00a4b9
                    btnBackgroundColor="#e53030" // optional: button background color --- default #00bcd4
                    fontColor="#b1b1b1" // optional: text font color --- default #b1b1b1
                    activeFontColor="#e53030"
                    circleSize={30}
                  /> */}
                  { this.activeSwitch === 1 ? console.log('view1') : console.log('view2') }
                </View>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelQuestion}>{i18n.t('CSS.LBLInputName2')}</Text>
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Type something"
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline
                />
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelSubmitTitle}>{i18n.t('CSS.LBLDeclarations')}</Text>
                <View style={styles.checkBoxContain}>
                  <CheckBox
                    title={i18n.t('CSS.LBLContentDeclarations')}
                    checked={this.checked}
                    containerStyle={styles.isCheckBox}
                    fontFamily={theme.Font.Regular}
                    onPress={() => this.setState({ checked: !this.checked })}
                  />
                </View>
              </View>

              <Button style={styles.buttonConfirm} onPress={this._openTapConfirm} text={i18n.t('CSS.BtnConfirm')} />
              <Button style={styles.buttonEdit} onPress={this._openTapEdit} text={i18n.t('CSS.BtnEditClaim')} />
              <View style={styles.groupItemsForm} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default CSSummarySrcScreen;

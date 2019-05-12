// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { CheckBox } from 'react-native-elements';

// Import UI
import {
  View,
  Text,
  Button,
  TextButton,
  Image,
  ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';

// Import internal logics
import i18n from '../../../i18n';

// import navigator from '../../../navigator';
import theme from '../../../theme';

const labels = i18n.t('SOSUD.LblStepIndicator', { returnObjects: true });
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#8bc35c',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#8bc35c',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#aaaaaa',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#ffffff',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#ffffff',
  labelColor: '#999999',
  labelSize: 11,
  currentStepLabelColor: '#353535',
};

class SignUpDeclarationScreen extends Component {
  static propsType = {};

  static defaultProps = {};

  static navigationOptions = {
    title: 'MSIG',
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);

    this.state = {
      startDate: '02/03/2017',
      endDate: '02/03/2018',
      firstName: 'Li An',
      lastName: 'Tan',
      nationality: 'Singaporean',
      nric: 'S8812345x',
      dob: '01/01/1988',
      mobileNumber: '+65 91234567',
      email: 'tan@email.com',
      portalCode: '888888',
      blockNumber: 'Blk888',
      street: 'Eight Ave',
      buildingName: 'The Eight',
      unitNumber: '#08-888',
      termChecked: true,
      additionChecked: true,
      currentPosition: 3,
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  _openTapNext() {}

  _openTapLearnMore() {}

  render() {
    const { style } = this.props;
    const {
      startDate,
      endDate,
      firstName,
      lastName,
      nationality,
      nric,
      dob,
      mobileNumber,
      email,
      portalCode,
      blockNumber,
      street,
      buildingName,
      unitNumber,
      termChecked,
      additionChecked,
      currentPosition,
    } = this.state;
    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ctnPolicyHeader}>
            <Image
              style={styles.iconBuyPolicy}
              source={theme.Image.kpmg.buyPolicy}
            />
            <Text style={styles.txtHeaderTitle}>
              {i18n.t('SOSUD.TxtHeaderTitle')}
            </Text>
            <Text style={styles.txtHeaderDescription}>
              {i18n.t('SOSUD.TxtHeaderDescription')}
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepPolicy}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
              />
            </View>
            <View style={[styles.containerForm]}>
              {/* Policy Section */}
              <View style={styles.sectionTitle}>
                <Text style={styles.txtTitle}>
                  {i18n.t('SOSUD.TxtPolicySection')}
                </Text>
                <Image style={styles.iconEdit} source={theme.Image.Ic.Edit} />
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SOSUD.LblPolicyStartDate')}
                </Text>
                <Text style={styles.edtInput}>{startDate}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SOSUD.LblPolicyEndDate')}
                </Text>
                <Text style={styles.edtInput}>{endDate}</Text>
              </View>

              {/* Personal Section */}
              <View style={styles.sectionTitle}>
                <Text style={styles.txtTitle}>
                  {i18n.t('SOSUD.TxtPersonalSection')}
                </Text>
                <Image style={styles.iconEdit} source={theme.Image.Ic.Edit} />
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOSUD.LblFirstName')}</Text>
                <Text style={styles.edtInput}>{firstName}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOSUD.LblLastName')}</Text>
                <Text style={styles.edtInput}>{lastName}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SOSUD.LblNationality')}
                </Text>
                <Text style={styles.edtInput}>{nationality}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOSUD.LblNRIC')}</Text>
                <Text style={styles.edtInput}>{nric}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOSUD.LblDOB')}</Text>
                <Text style={styles.edtInput}>{dob}</Text>
              </View>

              {/* Contact Section */}
              <View style={styles.sectionTitle}>
                <Text style={styles.txtTitle}>
                  {i18n.t('SOSUD.TxtContactSection')}
                </Text>
                <Image style={styles.iconEdit} source={theme.Image.Ic.Edit} />
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SOSUD.LblMobileNumber')}
                </Text>
                <Text style={styles.edtInput}>{mobileNumber}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOSUD.LblEmail')}</Text>
                <Text style={styles.edtInput}>{email}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SOSUD.LblPortalCode')}
                </Text>
                <Text style={styles.edtInput}>{portalCode}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SOSUD.LblBlockNumber')}
                </Text>
                <Text style={styles.edtInput}>{blockNumber}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SOSUD.LblStreetName')}
                </Text>
                <Text style={styles.edtInput}>{street}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SOSUD.LblBuildingName')}
                </Text>
                <Text style={styles.edtInput}>{buildingName}</Text>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOSUD.LblUnitNo')}</Text>
                <Text style={styles.edtInput}>{unitNumber}</Text>
              </View>

              {/* Declaration Section */}
              <View style={styles.sectionTitle}>
                <Text style={styles.txtTitle}>
                  {i18n.t('SOSUD.TxtDeclarationSection')}
                </Text>
                <Image style={styles.iconEdit} source={theme.Image.Ic.Edit} />
              </View>

              <View style={styles.groupItemsForm}>
                <ScrollView>
                  <Text style={styles.txtStatement}>
                    {i18n.t('SOSUD.TxtTerm')}
                  </Text>
                </ScrollView>
              </View>

              <CheckBox
                title={i18n.t('SOSUD.CbTerm')}
                checkedIcon={<Image source={theme.Image.Ic.Checked} />}
                uncheckedIcon={<Image source={theme.Image.Ic.Unchecked} />}
                checked={termChecked}
                onPress={() => this.setState({ termChecked: !termChecked })}
              />

              <CheckBox
                title={i18n.t('SOSUD.CbAddition')}
                checkedIcon={<Image source={theme.Image.Ic.Checked} />}
                uncheckedIcon={<Image source={theme.Image.Ic.Unchecked} />}
                checked={additionChecked}
                onPress={() => this.setState({ additionChecked: !additionChecked })}
              />

              <View style={styles.groupItemsForm}>
                <ScrollView>
                  <Text style={styles.txtStatement}>
                    {i18n.t('SOSUD.TxtAddition')}
                  </Text>
                </ScrollView>
              </View>

              {/* Button Section */}
              <View style={styles.groupItemsForm}>
                <Button
                  style={styles.buttonNext}
                  onPress={this._openTapNext}
                  text={i18n.t('SOSUD.BtnNext')}
                />
                <TextButton
                  textStyle={styles.learnMoreButton}
                  onPress={this._openTapLearnMore}
                  text={i18n.t('SOSUD.BtnLearnMore')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SignUpDeclarationScreen;

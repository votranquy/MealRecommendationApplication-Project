/*
  This is template for creating new component, please clone from here for coding easier
*/
// Import external libs
import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
// Import UI
import {
  View, Text, Image, TextInput,
} from '../../../../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../../i18n';
import theme from '../../../../theme';

const data = [{
  value: 'DEC TRIP 1',
}, {
  value: 'DEC TRIP 2',
}, {
  value: 'DEC TRIP 3',
}];
const dataMoney = [{
  value: '5$',
}, {
  value: '10$',
}, {
  value: '100$',
}];
class ThirdLiabilityComponent extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {
      dateOfInci: '',
    };
  }

  render() {
    const { dateOfInci } = this.state;
    return (
      <View style={styles.contentDetailSoD}>
        <Text style={styles.txtTitle}>{i18n.t('TPLD.Title')}</Text>
        <Text style={styles.txtDetail}>{i18n.t('TPLD.Detail')}</Text>
        <Text style={styles.txtQuestionClaim}>{i18n.t('TPLD.QuestionClaim')}</Text>
        <View style={styles.ctnItem}>
          <Text style={styles.txtItem}>{i18n.t('TPLD.SelectTrip')}</Text>
          <View style={styles.ddTrip}>
            <Dropdown
              containerStyle={styles.ctnDD}
              inputContainerStyle={styles.InputDD}
              data={data}
            />
          </View>
        </View>
        <View style={styles.ctnItem}>
          <Text style={styles.txtItem}>{i18n.t('TPLD.PoI')}</Text>
          <View style={styles.ddTrip}>
            <Dropdown
              containerStyle={styles.ctnDD}
              inputContainerStyle={styles.InputDD}
              data={data}
            />
          </View>
        </View>
        <View style={styles.ctnItem}>
          <Text style={styles.txtItem}>{i18n.t('TPLD.DoI')}</Text>
          <DatePicker
            style={styles.datepickerContainer}
            date={dateOfInci}
            mode="date"
            placeholder="DD/MM/YYYY"
            format="DD/MM/YYYY"
            minDate="01/01/2019"
            maxDate="31/12/2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                display: 'none',
              },
              dateInput: {
                borderRadius: 3,
                borderWidth: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              },
            }}
            onDateChange={(date) => { this.setState({ dateOfInci: date }); }}
          />
        </View>
        <View style={styles.ctnItem}>
          <Text style={styles.txtItem}>{i18n.t('TPLD.DetailIncident')}</Text>
          <TextInput
            style={styles.textareaContainer}
            multiline
            placeholder={i18n.t('TPLD.phIncident')}
          />
        </View>
        <View style={styles.ctnPhotoText}>
          <Image source={theme.Image.claim.iconPhoto} />
          <Text style={styles.txtPhoto}>
            {i18n.t('TPLD.PoliceReport')}
          </Text>
        </View>
        <View style={styles.ctnItem}>
          <Text style={styles.txtItem}>{i18n.t('TPLD.Value')}</Text>
          <View style={styles.ctnDDMoney}>
            <View style={styles.ddMoneyClaim}>
              <Dropdown
                inputContainerStyle={styles.InputDD}
                containerStyle={styles.ddMoney}
                data={dataMoney}
              />
            </View>
            <TextInput
              style={styles.TxInputMoney}
              placeholder={i18n.t('TPLD.placeHolderMoney')}
            />
          </View>
        </View>
        <View style={styles.ctnPhotoText}>
          <Image source={theme.Image.claim.iconPhoto} />
          <Text style={styles.txtPhoto}>
            {i18n.t('TPLD.DocumentReport')}
          </Text>
        </View>
        <View style={styles.ctnPhotoText}>
          <Image source={theme.Image.claim.iconPhoto} />
          <Text style={styles.txtPhoto}>
            {i18n.t('TPLD.DamageReport')}
          </Text>
        </View>
      </View>
    );
  }
}

export default ThirdLiabilityComponent;

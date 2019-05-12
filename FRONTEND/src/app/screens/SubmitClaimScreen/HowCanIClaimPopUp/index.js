// Import external libs
import React, { Component } from 'react';
import { Modal } from 'react-native';
import { SafeAreaView } from 'react-navigation';

// Import UI
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from '../../../../components';
import styles from './styles';

// Import internal logics
import i18n from '../../../../i18n';
import theme from '../../../../theme';
import ExpandableView from '../../../components/ExpandableView';

class HowCanIClaimPopUp extends Component {
  state = {
    modalVisible: false,
  };

  /* Change state of modal */
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const {
      modalVisible,
    } = this.state;

    return (
      <View style={styles.container}>

        {/* Modal how can i claim */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
          }}
        >
          <ScrollView>

            {/* Cover size for Devices */}
            <SafeAreaView>
              <View style={styles.ctnHeader}>
                <Text style={styles.txtHeader}>
                  {i18n.t('HMP.Title')}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Image
                    style={[styles.imgHeader]}
                    source={theme.Image.Ic.ClosePopUp}
                  />
                </TouchableOpacity>
              </View>

              {/* Toggle of Medical ExpandableView */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  titleContainerStyle={styles.ctnTitleExpand}
                  title={i18n.t('HMP.MedicalExpense')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.ContentMedical1')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim500k')}
                    </Text>
                  </View>

                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeftGray}>
                      {i18n.t('HMP.ContentMedical2')}
                    </Text>
                    <Text style={styles.txtContentRightGray}>
                      {i18n.t('HMP.Claim500k')}
                    </Text>
                  </View>

                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeftGray}>
                      {i18n.t('HMP.ContentMedical3')}
                    </Text>
                    <Text style={styles.txtContentRightGray}>
                      {i18n.t('HMP.Claim100k')}
                    </Text>
                  </View>
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.ContentMedical4')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim25k')}
                    </Text>
                  </View>
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.ContentMedical7')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim500')}
                    </Text>
                  </View>
                </ExpandableView>
              </View>

              {/* Toggle of Hospital daily benefit */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  title={i18n.t('HMP.ContentHospitalDailyBenefit')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.ContentHospitalDailyBenefit')}
                    </Text>
                    <Text style={styles.txtContentRightText}>
                      {i18n.t('HMP.ClaimMaxPerDay')}
                    </Text>
                  </View>
                </ExpandableView>
              </View>

              {/* Toggle of Permanent disability */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  title={i18n.t('HMP.ContentPermanentDisability')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.ContentPermanentDisability1')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim200k')}
                    </Text>
                  </View>
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.ContentPermanentDisability2')}
                    </Text>
                    <Text style={styles.txtContentRightGray}>
                      {i18n.t('HMP.Claim200k')}
                    </Text>
                  </View>
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.ContentPermanentDisability3')}
                    </Text>
                    <Text style={styles.txtContentRightGray}>
                      {i18n.t('HMP.Claim100k')}
                    </Text>
                  </View>
                </ExpandableView>
              </View>

              {/* Toggle of Damage belong */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  title={i18n.t('HMP.DamageBelong')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.DamageBelong')}
                    </Text>
                    <View style={styles.ctnContentRight}>
                      <Text style={styles.txtContentRightInView}>
                        {i18n.t('HMP.Claim5k')}
                      </Text>
                      <Text style={styles.txtContentRightTextInView}>
                        {i18n.t('HMP.ClaimMaxPerItem')}
                      </Text>
                    </View>
                  </View>
                </ExpandableView>
              </View>

              {/* Toggle of Pass Document */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  title={i18n.t('HMP.PassportDocument')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.PassportDocument')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim5k')}
                    </Text>
                  </View>
                </ExpandableView>
              </View>

              {/* Toggle of Delayed baggage  */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  title={i18n.t('HMP.DelayedBaggage')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.DelayedBaggage1')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim200')}
                    </Text>
                  </View>
                </ExpandableView>
              </View>

              {/* Toggle of Flight delay cancellation */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  title={i18n.t('HMP.FlightDelayCancellation')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.FlightDelayCancellation1')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim200')}
                    </Text>
                  </View>
                </ExpandableView>
              </View>

              {/* Toggle of Flight diversion over booking */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  title={i18n.t('HMP.FlightDiversionOverbooking')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.FlightDiversionOverbooking1')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim200')}
                    </Text>
                  </View>
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.FlightDiversionOverbooking2')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim200')}
                    </Text>
                  </View>
                </ExpandableView>
              </View>

              {/* Toggle of Missed connecting Flight */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  title={i18n.t('HMP.MissedConnectingFlight')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.MissedConnectingFlight1')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim200')}
                    </Text>
                  </View>
                </ExpandableView>
              </View>

              {/* Toggle of Shortened or disrupted trip */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  title={i18n.t('HMP.ShortenedOrDisruptedTrip')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.ShortenedOrDisruptedTrip1')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim10k')}
                    </Text>
                  </View>
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.ShortenedOrDisruptedTrip2')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim2k')}
                    </Text>
                  </View>
                </ExpandableView>
              </View>

              {/* Toggle of Third party liability */}
              <View style={styles.groupItemsForm}>
                <ExpandableView
                  titleStyle={styles.togHeader}
                  title={i18n.t('HMP.ThirdPartyLiability')}
                >
                  <View style={styles.ctnContent}>
                    <Text style={styles.txtContentLeft}>
                      {i18n.t('HMP.ThirdPartyLiability1')}
                    </Text>
                    <Text style={styles.txtContentRight}>
                      {i18n.t('HMP.Claim1000k')}
                    </Text>
                  </View>
                </ExpandableView>
              </View>
            </SafeAreaView>


          </ScrollView>

          {/* Close button to back screen's before */}
          <View style={styles.btnGroupItemsBot}>
            <TouchableOpacity
              style={styles.btnBorderBlue}
              onPress={() => {
                this.setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.buttonHowMuchText}>
                {i18n.t('HMP.Close')}
              </Text>
            </TouchableOpacity>
          </View>

        </Modal>

        {/* Button to call this modal */}
        <TouchableOpacity
          style={styles.btnBorderBlue}
          onPress={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.buttonHowMuchText}>
            {i18n.t('HMP.BTHowMuch')}
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
export default HowCanIClaimPopUp;

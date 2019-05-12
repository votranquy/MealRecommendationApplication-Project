// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text, Image } from '../../../../../../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../../../../i18n';
import theme from '../../../../../../theme';


class DTHospitalDailyBenefit extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {

    };
    this._renderImage = this._renderImage.bind(this);
  }

  _renderImage(expenseImg, count) {
    const contentImg = [];

    let j = 0;
    for (let i = 0; i < count; i++) {
      const childrenArr = [];
      for (let k = 0; k < 4; k++) {
        if (j < expenseImg.length) {
          const source = require('../../../../../../assets/images/background/AirPlane.png');
          childrenArr.push(
            <View style={styles.ctnImage}>
              <Image
                style={styles.imgContent}
                source={source}
              />
            </View>,
          );
        } else {
          childrenArr.push(
            <View style={[styles.ctnImage, styles.ctnDashedBorder]}>
              <Image
                style={styles.imgContent}
              />
            </View>,
          );
        }
        j++;
      }
      contentImg.push(
        <View style={styles.ctnImageItem}>
          {childrenArr}
        </View>,
      );
    }
    return contentImg;
  }

  render() {
    const { claim } = this.props;


    return (
      <View style={styles.container}>

        {/* Incident Details */}
        <Text style={styles.txtTitleItem}>
          {i18n.t('CMMC.HospitalDetail')}
        </Text>
        <Text style={styles.txtContent}>
          {claim.incidentDetail}
        </Text>

        {/* Date and time of hospitalisation admission */}
        <Text style={styles.txtTitleItem}>
          {i18n.t('CMMC.AdmissionDateTime')}
        </Text>
        <Text style={styles.txtContent}>
          {`${claim.admissionDate} ${claim.admissionTime}`}
        </Text>

        {/* Date and time of hospitalisation discharge */}
        <Text style={styles.txtTitleItem}>
          {i18n.t('CMMC.DischargeDateTime')}
        </Text>
        <Text style={styles.txtContent}>
          {`${claim.dischargeDate} ${claim.dischargeTime}`}
        </Text>

        {/* Render image */}
        <Text style={styles.txtTitleItem}>
          {i18n.t('CMMC.HospitalBillsImage')}
        </Text>
        {this._renderImage(claim.hospitalBillsImage, 2)}
        <Text style={styles.txtTitleItem}>
          {i18n.t('CMMC.HospitalDischargeImage')}
        </Text>
        {this._renderImage(claim.hospitalDischargeImage, 2)}

      </View>
    );
  }
}

export default DTHospitalDailyBenefit;

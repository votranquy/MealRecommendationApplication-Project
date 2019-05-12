// Import external libs
import React, { Component } from 'react';
// Import UI
import { Image, ScrollView, Text, View } from '../../../components';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';
import styles from './styles';


class LearnMore extends Component {
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
      <View style={[styles.container, style]}>
        <ScrollView>
          {/* Page 1 */}
          <View style={styles.ctnPageOne}>
            <Image source={theme.Image.Lm.LearnMoreCloud} />
            <Image style={styles.imgAirPlane} source={theme.Image.Lm.AirPlane} />
            <Text style={styles.txtAutomaticCoverage}>
              {i18n.t('LM.LearnMorePage1AutomaticCoverage')}
            </Text>
            <Text style={styles.txtAutomaticCoverageDetail}>
              {i18n.t('LM.LearnMorePage1AutomaticCoverageDetail')}
            </Text>
            <Text style={styles.txtAutomaticCoverage}>
              {i18n.t('LM.LearnMorePage1SnapClaim')}
            </Text>
            <Text style={styles.txtAutomaticCoverageDetail}>
              {i18n.t('LM.LearnMorePage1SnapClaimDetail')}
            </Text>
            <Image style={styles.imgMoneyCloud} source={theme.Image.Lm.MoneyCloud} />
          </View>
          {/* Page 2 */}
          <View style={styles.ctnPageTwo}>
            <Text style={styles.txtAutomaticCoverage}>
              {i18n.t('LM.LearnMorePage2HowDoes')}
            </Text>
            <Text style={styles.txtAutomaticCoverageDetail}>
              {i18n.t('LM.LearnMorePage2AutomaticCoverage')}
            </Text>
            <View style={styles.ctnHowDoes}>
              <View style={styles.ctnStep}>
                <Image style={styles.imgStep} source={theme.Image.Lm.BuyPolicy} />
                <Text style={styles.txtStep}>
                  {i18n.t('LM.LearnMorePage2AutomaticCoverageStep1')}
                </Text>
              </View>
              <Image style={styles.imgThreeDot} source={theme.Image.Lm.ThreeDot} />
              <View style={styles.ctnStep}>
                <Image style={styles.imgStep} source={theme.Image.Lm.FlyFrom} />
                <Text style={styles.txtStep}>
                  {i18n.t('LM.LearnMorePage2AutomaticCoverageStep2')}
                </Text>
              </View>
              <Image style={styles.imgThreeDot} source={theme.Image.Lm.ThreeDot} />
              <View style={styles.ctnStep}>
                <Image style={styles.imgStep} source={theme.Image.Lm.GPS} />
                <Text style={styles.txtStep}>
                  {i18n.t('LM.LearnMorePage2AutomaticCoverageStep3')}
                </Text>
              </View>
              <Image style={styles.imgThreeDot} source={theme.Image.Lm.ThreeDot} />
              <View style={styles.ctnStep}>
                <Image style={styles.imgStep} source={theme.Image.Lm.TakeTrain} />
                <Text style={styles.txtStep}>
                  {i18n.t('LM.LearnMorePage2AutomaticCoverageStep4')}
                </Text>
              </View>
              <Image style={styles.imgThreeDot} source={theme.Image.Lm.ThreeDot} />
              <View style={styles.ctnStep}>
                <Image style={styles.imgStep} source={theme.Image.Lm.Premiums} />
                <Text style={styles.txtStep}>
                  {i18n.t('LM.LearnMorePage2AutomaticCoverageStep5')}
                </Text>
              </View>
            </View>
            <View style={styles.ctnSimpleClaims}>
              <Text style={styles.txtAutomaticCoverage}>
                {i18n.t('LM.LearnMorePage2SimpleClaims')}
              </Text>
              <View style={styles.ctnStep}>
                <Image style={styles.imgStep} source={theme.Image.Lm.Snow} />
                <Text style={styles.txtStep}>
                  {i18n.t('LM.LearnMorePage2SimpleClaimsStep1')}
                </Text>
              </View>
              <Image style={styles.imgThreeDot} source={theme.Image.Lm.ThreeDot} />
              <View style={styles.ctnStep}>
                <Image style={styles.imgStep} source={theme.Image.Lm.Photo} />
                <Text style={styles.txtStep}>
                  {i18n.t('LM.LearnMorePage2SimpleClaimsStep2')}
                </Text>
              </View>
              <Image style={styles.imgThreeDot} source={theme.Image.Lm.ThreeDot} />
              <View style={styles.ctnStep}>
                <Image style={styles.imgStep} source={theme.Image.Lm.Claim} />
                <Text style={styles.txtStep}>
                  {i18n.t('LM.LearnMorePage2SimpleClaimsStep3')}
                </Text>
              </View>
            </View>
          </View>
          {/* Page 3 */}
          <View style={styles.ctnPageThree}>
            <Text style={styles.txtAutomaticCoverage}>
              {i18n.t('LM.LearnMorePag3WhatIsCovered')}
            </Text>
            <View style={styles.ctnCoverdDetailTable}>
              <View style={styles.ctnCoverdDetailRow}>
                <Text style={styles.txtDescription}>
                  {i18n.t('LM.LearnMorePag3WhatIsCoveredTip1')}
                </Text>
                <Text style={styles.txtPrice}>
                  {i18n.t('LM.Money500k')}
                </Text>
              </View>
              <View style={styles.ctnCoverdDetailRow}>
                <Text style={styles.txtDescription}>
                  {i18n.t('LM.LearnMorePag3WhatIsCoveredTip2')}
                </Text>
                <Text style={styles.txtPrice}>
                  {i18n.t('LM.Money5k')}
                </Text>
              </View>
              <View style={styles.ctnCoverdDetailRow}>
                <Text style={styles.txtDescription}>
                  {i18n.t('LM.LearnMorePag3WhatIsCoveredTip3')}
                </Text>
                <Text style={styles.txtPrice}>
                  {i18n.t('LM.Money200')}
                </Text>
              </View>
              <View style={styles.ctnCoverdDetailRow}>
                <Text style={styles.txtDescription}>
                  {i18n.t('LM.LearnMorePag3WhatIsCoveredTip4')}
                </Text>
                <Text style={styles.txtPrice}>
                  {i18n.t('LM.Money200')}
                </Text>
              </View>
              <View style={styles.ctnCoverdDetailRow}>
                <Text style={styles.txtDescription}>
                  {i18n.t('LM.LearnMorePag3WhatIsCoveredTip5')}
                </Text>
                <Text style={styles.txtPrice}>
                  {i18n.t('LM.Money1000k')}
                </Text>
              </View>
              <View style={styles.ctnCoverdDetailRow}>
                <Text style={styles.txtDescription}>
                  {i18n.t('LM.LearnMorePag3WhatIsCoveredTip6')}
                </Text>
                <Text style={styles.txtPrice}>
                  {i18n.t('LM.Money200k')}
                </Text>
              </View>
              <View style={styles.ctnCoverdDetailRow}>
                <Text style={styles.txtDescription}>
                  {i18n.t('LM.LearnMorePag3WhatIsCoveredTip7')}
                </Text>
                <Text style={styles.txtPrice}>
                  {i18n.t('LM.MoneyAvailable')}
                </Text>
              </View>
            </View>
            <View style={styles.ctnCoverageMore}>
              <Text style={styles.txtCoverageMore}>{i18n.t('LM.LearnMorePag3LearnMoreLink1')}</Text>
              <Text style={styles.txtCoverageMoreLink}>{i18n.t('LM.LearnMorePag3LearnMoreLink2')}</Text>
              <Text style={styles.txtCoverageMore}>{i18n.t('LM.LearnMorePag3LearnMoreLink3')}</Text>
            </View>
          </View>
          <View style={styles.ctnHowBeCharge}>
            <Text style={styles.txtHowBeCharge}>{i18n.t('LM.LearnMorePage3HowBeCharge')}</Text>
            <Text style={styles.txtHowBeChargeDetail}>{i18n.t('LM.LearnMorePage3HowBeChargeDetail')}</Text>
            <View style={styles.ctnChargeOption}>
              <View style={styles.ctnChargeImage}>
                <Image style={styles.imgChargeOption} source={theme.Image.Lm.Claim} />

              </View>
              <View style={styles.ctnOptionDetail}>
                <Text style={styles.txtOptionDetail1}>AAA</Text>
                <Text style={styles.txtOptionDetail2}>BBB</Text>
              </View>
              <View style={styles.ctnCharge}>
                <Text style={styles.txtCharge}>{i18n.t('LM.Money20')}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default LearnMore;

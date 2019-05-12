// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, Image, ScrollView, TouchableOpacity,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';
import ExpandableView from '../../components/ExpandableView';

class BuyPolicyScreen extends Component {
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
      isActionButtonVisible: false,
    };

    this._onScroll = this._onScroll.bind(this);
  }

  _goToTop = () => {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true });
  }

  _openTapNext() {
    navigator.navigate('MyClaim');
  }


  _openTapLearnMore() {

  }

  _onScroll(event) {
    const offset = event.nativeEvent.contentOffset.y;
    this.setState({
      isActionButtonVisible: offset > 200,
    });
  }

  render() {
    const { isActionButtonVisible } = this.state;
    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView
          ref={(c) => { this.scroll = c; }}
          onScroll={this._onScroll}
        >

          <View style={styles.ctnBGLightBlue}>
            <View>
              <Image
                style={styles.imageIconCloud}
                source={theme.Image.Lm.LearnMoreCloud}
              />
            </View>
            <View style={styles.ctnItemsMiddle}>
              <Image
                source={theme.Image.Lm.AirPlane}
              />
            </View>
            <View style={styles.ctnItemsMiddle}>
              <Text style={styles.txtTitle}>{i18n.t('LM.Coverage')}</Text>
              <Text style={styles.txtWhiteCenterNormal}>{i18n.t('LM.AutomaticInsurance')}</Text>
            </View>
            <View style={[styles.ctnItemsMiddle, styles.ctnMarginTop20]}>
              <Text style={styles.txtTitle}>{i18n.t('LM.SimplySnap')}</Text>
              <Text style={styles.txtWhiteCenterNormal}>{i18n.t('LM.NoMoreComplicated')}</Text>
            </View>
            <View style={[styles.ctnItemsMiddle, styles.ctnMarginTop30]}>
              <Image
                source={theme.Image.Lm.MoneyCloud}
              />
            </View>
          </View>

          <View style={styles.ctnBGMoreLightBlue}>
            <View style={styles.ctnItemsMiddle}>
              <Text style={styles.txtTitle}>{i18n.t('LM.HowDoes')}</Text>
              <Text style={styles.txtWhiteCenterNormal}>{i18n.t('LM.AutomaticCoverage')}</Text>
            </View>

            <View style={styles.ctnMarginTop30}>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.BuyPolicy}
                  />
                  <Image
                    style={styles.imgDotted}
                    source={theme.Image.Ic.moveVert}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.BuyPolicy')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.FlyFrom}
                  />
                  <Image
                    style={styles.imgDotted}
                    source={theme.Image.Ic.moveVert}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.FlyFrom')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.GPS}
                  />
                  <Image
                    style={styles.imgDotted}
                    source={theme.Image.Ic.moveVert}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.AutomaticDaily')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.TakeTrain}
                  />
                  <Image
                    style={styles.imgDotted}
                    source={theme.Image.Ic.moveVert}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.TakeTrain')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.Covered}
                  />
                  <Image
                    style={styles.imgDotted}
                    source={theme.Image.Ic.moveVert}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.ContinueCovered')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.Premiums}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.PremiumsAuto')}</Text>
                </View>
              </View>

            </View>

          </View>

          <View style={[styles.ctnBGLightBlue, styles.ctnPaddingBottom10]}>
            <View style={styles.ctnItemsMiddle}>
              <Text style={styles.txtTitle}>{i18n.t('LM.Simple')}</Text>
            </View>

            <View style={styles.ctnMarginTop30}>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.Snow}
                  />
                  <Image
                    style={styles.imgDotted}
                    source={theme.Image.Ic.moveVert}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Snow')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.Photo}
                  />
                  <Image
                    style={styles.imgDotted}
                    source={theme.Image.Ic.moveVert}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Photo')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.Claim}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Claim')}</Text>
                </View>
              </View>

            </View>
          </View>

          <View style={styles.ctnBGBlue}>
            <View style={styles.ctnItemsMiddle}>
              <Text style={styles.txtTitle}>{i18n.t('LM.Covered')}</Text>
            </View>
            <View style={styles.ctnMarginTop20}>

              <View style={[styles.ctnItemsRowGroup, styles.ctnMarginHorizontal20]}>
                <View style={styles.ctnLeftContentCovered}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Covered1')}</Text>
                </View>
                <View style={styles.ctnRightContentCovered}>
                  <Text style={styles.txtWhiteRightBoldNormal}>{i18n.t('LM.Money500k')}</Text>
                </View>
              </View>

              <View style={[styles.ctnItemsRowGroup, styles.ctnMarginHorizontal20]}>
                <View style={styles.ctnLeftContentCovered}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Covered2')}</Text>
                </View>
                <View style={styles.ctnRightContentCovered}>
                  <Text style={styles.txtWhiteRightBoldNormal}>{i18n.t('LM.Money5k')}</Text>
                </View>
              </View>

              <View style={[styles.ctnItemsRowGroup, styles.ctnMarginHorizontal20]}>
                <View style={styles.ctnLeftContentCovered}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Covered3')}</Text>
                </View>
                <View style={styles.ctnRightContentCovered}>
                  <Text style={styles.txtWhiteRightBoldNormal}>{i18n.t('LM.Money200')}</Text>
                </View>
              </View>

              <View style={[styles.ctnItemsRowGroup, styles.ctnMarginHorizontal20]}>
                <View style={styles.ctnLeftContentCovered}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Covered4')}</Text>
                </View>
                <View style={styles.ctnRightContentCovered}>
                  <Text style={styles.txtWhiteRightBoldNormal}>{i18n.t('LM.Money200')}</Text>
                </View>
              </View>

              <View style={[styles.ctnItemsRowGroup, styles.ctnMarginHorizontal20]}>
                <View style={styles.ctnLeftContentCovered}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Covered5')}</Text>
                </View>
                <View style={styles.ctnRightContentCovered}>
                  <Text style={styles.txtWhiteRightBoldNormal}>{i18n.t('LM.Money1000k')}</Text>
                </View>
              </View>

              <View style={[styles.ctnItemsRowGroup, styles.ctnMarginHorizontal20]}>
                <View style={styles.ctnLeftContentCovered}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Covered6')}</Text>
                </View>
                <View style={styles.ctnRightContentCovered}>
                  <Text style={styles.txtWhiteRightBoldNormal}>{i18n.t('LM.Money200k')}</Text>
                </View>
              </View>

              <View style={[styles.ctnItemsRowGroup, styles.ctnMarginHorizontal20]}>
                <View style={styles.ctnLeftContentCovered}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Covered7')}</Text>
                </View>
                <View style={styles.ctnRightContentCovered}>
                  <Text style={styles.txtWhiteRightBoldNormal}>{i18n.t('LM.MoneyAvailable')}</Text>
                </View>
              </View>

              <View style={styles.ctnMarginTop10}>
                <Text style={styles.txtWhiteMiddleBoldNormal}>
                  {i18n.t('LM.LearnMoreCovered')}
                  <Text style={styles.txtWhiteMiddleBoldUnderline}>
                    {i18n.t('LM.LearnMoreCovered1')}
                  </Text>
                  <Text style={styles.txtWhiteMiddleBoldNormal}>
                    {i18n.t('LM.LearnMoreCovered2')}
                  </Text>
                </Text>
              </View>

            </View>
          </View>

          <View style={styles.ctnBGLightBlue}>
            <View style={styles.ctnItemsMiddle}>
              <Text style={styles.txtTitle}>{i18n.t('LM.Charged')}</Text>
              <Text style={styles.txtWhiteCenterNormal}>{i18n.t('LM.Charged1')}</Text>
            </View>
            <View style={styles.ctnItemsGroupCharged}>
              <View style={styles.ctnLeftCharged}>
                <Text>1</Text>
              </View>
              <View style={styles.ctnMiddleCharged}>
                <Text style={styles.txtWhiteBoldNormal}>{i18n.t('LM.Charged2')}</Text>
                <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Charged3')}</Text>
              </View>
              <View style={[styles.ctnRightCharged]}>
                <Text style={styles.txtWhiteLeftHuge}>{i18n.t('LM.Money20')}</Text>
              </View>
            </View>

            <View style={styles.ctnItemsGroupCharged}>
              <View style={styles.ctnLeftCharged}>
                <Text>1</Text>
              </View>
              <View style={styles.ctnMiddleCharged}>
                <Text style={styles.txtWhiteBoldNormal}>{i18n.t('LM.Charged4')}</Text>
                <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.Charged5')}</Text>
              </View>
              <View style={styles.ctnRightCharged}>
                <Text style={styles.txtWhiteLeftHuge}>{i18n.t('LM.Money10')}</Text>
                <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.DailyPremium')}</Text>
              </View>
            </View>


            <ExpandableView
              title={i18n.t('LM.Premium')}
              titleContainerStyle={styles.ctnBGDarkYellow}
              titleStyle={styles.txtWhiteLeftNormal}
              imgStyle={styles.imgExpandableView}
            >

              <View style={styles.ctnContentPremium}>
                <View style={styles.ctnLeftPremium}>
                  <Text style={styles.txtWhiteLeftHuge}>Area</Text>
                </View>
                <View style={styles.ctnMiddlePremium} />
                <View style={styles.ctnRightPremium}>
                  <Text style={styles.txtRightTitlePremium}>{i18n.t('LM.Premium')}</Text>
                </View>
              </View>
              <View style={styles.ctnContentPremium}>
                <View style={styles.ctnLeftPremium}>
                  <Text style={styles.txtWhiteLeftHugest}>A</Text>
                </View>
                <View style={styles.ctnMiddlePremium}>
                  <Text style={styles.txtWhiteLeftSmaller}>{i18n.t('LM.Premium1')}</Text>
                </View>
                <View style={styles.ctnRightPremium}>
                  <Text style={styles.txtWhiteLeftBoldBig}>{i18n.t('LM.MoneyPremium35')}</Text>
                </View>
              </View>

              <View style={styles.ctnContentPremium}>
                <View style={styles.ctnLeftPremium}>
                  <Text style={styles.txtWhiteLeftHugest}>B</Text>
                </View>
                <View style={styles.ctnMiddlePremium}>
                  <Text style={styles.txtWhiteLeftSmaller}>{i18n.t('LM.Premium2')}</Text>
                </View>
                <View style={styles.ctnRightPremium}>
                  <Text style={styles.txtWhiteLeftBoldBig}>{i18n.t('LM.MoneyPremium45')}</Text>
                </View>
              </View>

              <View style={styles.ctnContentPremium}>
                <View style={styles.ctnLeftPremium}>
                  <Text style={styles.txtWhiteLeftHugest}>C</Text>
                </View>
                <View style={styles.ctnMiddlePremium}>
                  <Text style={styles.txtWhiteLeftSmaller}>{i18n.t('LM.Premium3')}</Text>
                </View>
                <View style={styles.ctnRightPremium}>
                  <Text style={styles.txtWhiteLeftBoldBig}>{i18n.t('LM.MoneyPremium7')}</Text>
                </View>
              </View>

            </ExpandableView>

            <View style={styles.ctnMarginTop10}>
              <Text style={styles.txtWhiteMiddleBoldNormal}>
                {i18n.t('LM.Premium4')}
                <Text style={styles.txtWhiteMiddleBoldUnderline}>
                  {i18n.t('LM.Premium5')}
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.ctnBGMoreLightBlue}>
            <View style={styles.ctnItemsMiddle}>
              <Text style={styles.txtTitle}>{i18n.t('LM.WhatItForMe')}</Text>
            </View>

            <View style={styles.ctnMarginVertical20}>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.Clock}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.WhatItForMe1')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.GreenCheck}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.WhatItForMe2')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.Automatic}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.WhatItForMe3')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.Calendar}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.WhatItForMe4')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.People}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.WhatItForMe5')}</Text>
                </View>
              </View>

              <View style={styles.ctnItemsRowGroup}>
                <View style={styles.ctnItemsImage}>
                  <Image
                    source={theme.Image.Lm.Battery}
                  />
                </View>
                <View style={styles.ctnItemsText}>
                  <Text style={styles.txtWhiteLeftNormal}>{i18n.t('LM.WhatItForMe6')}</Text>
                </View>
              </View>

              <View style={styles.ctnMarginTop20}>
                <Text style={styles.txtWhiteMiddleBoldNormal}>
                  {i18n.t('LM.WhatItForMe7')}
                  <Text style={styles.txtWhiteMiddleBoldUnderline}>
                    {i18n.t('LM.WhatItForMe8')}
                  </Text>
                  {i18n.t('LM.WhatItForMe9')}
                  <Text style={styles.txtWhiteMiddleBoldUnderline}>
                    {i18n.t('LM.WhatItForMe10')}
                  </Text>
                  {i18n.t('LM.WhatItForMe11')}
                </Text>
              </View>

            </View>

          </View>

          <TouchableOpacity>
            <View style={styles.ctnButtonFooter}>
              <Text style={[styles.txtWhiteBoldNormal, styles.ctnPaddingHorizontal5]}>
                {i18n.t('LM.SignMe')}
              </Text>
              <Image
                style={styles.imgIconWhite}
                source={theme.Image.Ic.ArrowForward}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
        {isActionButtonVisible
          && (
          <TouchableOpacity
            style={styles.ctnAutoTop}
            onPress={this._goToTop}
          >
            <Image
              source={theme.Image.Lm.AutoTop}
            />
          </TouchableOpacity>
          )
        }


      </View>
    );
  }
}

export default BuyPolicyScreen;

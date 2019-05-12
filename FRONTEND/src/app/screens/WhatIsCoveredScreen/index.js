// Import external libs
import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
// Import UI
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextButton,
} from '../../../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';
import Expense from '../SubmitClaimScreen/Expense';
import TopBarActions from '../../components/TopBarActions';
// Import internal folder
import data from './data';
import SeeMore from './SeeMore';

class WhatIsCoveredScreen extends Component {
  static navigationOptions = {
    title: i18n.t('SITxtTitle'),
    headerTitleStyle: styles.headerTitleStyle,
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);

    this.state = {
      isShowAll: [false, false, false, false, false],
    };

    this._handleShowMore = this._handleShowMore.bind(this);
  }

  _handleShowMore(index) {
    const { isShowAll } = this.state;
    isShowAll[index] = !isShowAll[index];
    this.setState({
      isShowAll,
    });
  }

  render() {
    const { isShowAll } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.ctnHeader}>
          <Image
            style={styles.icoWhatIsCovered}
            source={theme.Image.kpmg.whatIsCovered}
          />
          <Text style={styles.txtTitle}>{i18n.t('WIC.Title')}</Text>
        </View>
        <ScrollView>
          <SafeAreaView>
            <View style={styles.groupItemsForm}>
              <Expense
                ref={(el) => { this._firstItem = el; }}
                titleHeight={40}
                titleStyle={styles.expHeader}
                title={i18n.t('WIC.PAC.Title')}
              >
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.Item1')}</Text>
                </View>
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.ItemLeft2')}</Text>
                  <Text style={styles.txtContentRight}>{i18n.t('WIC.PAC.Items.ItemRight2')}</Text>
                </View>
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.ItemLeft3')}</Text>
                  <Text style={styles.txtContentRight}>{i18n.t('WIC.PAC.Items.ItemRight3')}</Text>
                </View>
                <View style={styles.showMoreButtonTextContainer}>
                  <TextButton textStyle={styles.showMoreButtonText} onPress={() => this._handleShowMore(0)} text={isShowAll[0] ? i18n.t('WIC.SeeLess') : i18n.t('WIC.SeeMore')} />
                </View>
                {isShowAll[0] && <SeeMore style={styles.seeMoreContainer} items={data.dataInfo1} />}
              </Expense>
            </View>

            <View style={styles.groupItemsForm}>
              <Expense
                titleHeight={40}
                titleStyle={styles.expHeader}
                title={i18n.t('WIC.MARBC.Title')}
              >
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.Item1')}</Text>
                </View>
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.ItemLeft2')}</Text>
                  <Text style={styles.txtContentRight}>{i18n.t('WIC.PAC.Items.ItemRight2')}</Text>
                </View>
                <View style={styles.showMoreButtonTextContainer}>
                  <TextButton textStyle={styles.showMoreButtonText} onPress={() => this._handleShowMore(1)} text={isShowAll[1] ? i18n.t('WIC.SeeLess') : i18n.t('WIC.SeeMore')} />
                </View>
                {isShowAll[1] && <SeeMore style={styles.seeMoreContainer} items={data.dataInfo1} />}
              </Expense>
            </View>

            <View style={styles.groupItemsForm}>
              <Expense
                titleHeight={40}
                titleStyle={styles.expHeader}
                title={i18n.t('WIC.TVIC.Title')}
              >
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.Item1')}</Text>
                </View>
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.ItemLeft2')}</Text>
                  <Text style={styles.txtContentRight}>{i18n.t('WIC.PAC.Items.ItemRight2')}</Text>
                </View>
                <View style={styles.showMoreButtonTextContainer}>
                  <TextButton textStyle={styles.showMoreButtonText} onPress={() => this._handleShowMore(2)} text={isShowAll[2] ? i18n.t('WIC.SeeLess') : i18n.t('WIC.SeeMore')} />
                </View>
                {isShowAll[2] && <SeeMore style={styles.seeMoreContainer} items={data.dataInfo1} />}
              </Expense>
            </View>

            <View style={styles.groupItemsForm}>
              <Expense
                titleHeight={40}
                titleStyle={styles.expHeader}
                title={i18n.t('WIC.PLC.Title')}
              >
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.Item1')}</Text>
                </View>
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.ItemLeft2')}</Text>
                  <Text style={styles.txtContentRight}>{i18n.t('WIC.PAC.Items.ItemRight2')}</Text>
                </View>
                <View style={styles.showMoreButtonTextContainer}>
                  <TextButton textStyle={styles.showMoreButtonText} onPress={() => this._handleShowMore(3)} text={isShowAll[3] ? i18n.t('WIC.SeeLess') : i18n.t('WIC.SeeMore')} />
                </View>
                {isShowAll[3] && <SeeMore style={styles.seeMoreContainer} items={data.dataInfo1} />}
              </Expense>
            </View>

            <View style={styles.groupItemsForm}>
              <Expense
                titleHeight={40}
                titleStyle={styles.expHeader}
                title={i18n.t('WIC.TC.Title')}
              >
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.Item1')}</Text>
                </View>
                <View style={styles.expContent}>
                  <Text style={styles.txtContentLeft}>{i18n.t('WIC.PAC.Items.ItemLeft2')}</Text>
                  <Text style={styles.txtContentRight}>{i18n.t('WIC.PAC.Items.ItemRight2')}</Text>
                </View>
                <View style={styles.showMoreButtonTextContainer}>
                  <TextButton textStyle={styles.showMoreButtonText} onPress={() => this._handleShowMore(4)} text={isShowAll[4] ? i18n.t('WIC.SeeLess') : i18n.t('WIC.SeeMore')} />
                </View>
                {isShowAll[4] && <SeeMore style={styles.seeMoreContainer} items={data.dataInfo1} />}
              </Expense>
            </View>

          </SafeAreaView>
        </ScrollView>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnBorder}>
            <Text style={styles.btnHowMuchText}>{i18n.t('WIC.DownloadFullPolicyTerms')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default WhatIsCoveredScreen;

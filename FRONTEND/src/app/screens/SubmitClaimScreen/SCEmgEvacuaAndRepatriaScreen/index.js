// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
// Import UI
import {
  View, Text, TouchableOpacity, Image, ScrollView,
} from '../../../../components';
import styles from './styles';
import TopBarActions from '../../../components/TopBarActions';
// Import internal logics
import i18n from '../../../../i18n';
import navigator from '../../../../navigator';
import theme from '../../../../theme';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 3,
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
  stepIndicatorLabelCurrentColor: '#353535',
  stepIndicatorLabelFinishedColor: '#353535',
  stepIndicatorLabelUnFinishedColor: '#999999',
  labelColor: '#999999',
  labelSize: 11,
  currentStepLabelColor: '#353535',
};

class SCEmgEvacuaAndRepatriaScreen extends Component {
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
      currentPosition: 1,
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }


  _openTapNext() {
  }

  _openTapLearnMore(nameNavigate) {
    navigator.navigate(nameNavigate);
  }

  render() {
    const {
      currentPosition,
    } = this.state;
    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ctnEmgEvacuaAndRepatriaHeader}>
            <Image style={styles.iconBuyEmgEvacuaAndRepatria} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtEmgEvacuaAndRepatriaText1}>{i18n.t('SCEEAR.Title')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepEmgEvacuaAndRepatria}>
              <StepIndicator
                customStyles={customStyles}
                stepCount={4}
                currentPosition={currentPosition}
              />
            </View>
            <View style={[styles.containerForm]}>
              <Text style={styles.textTitle}>{i18n.t('SCEEAR.EmgEvacuaAndRepatria')}</Text>
              <Text style={styles.textDescription}>{i18n.t('SCEEAR.DescriptionTitle')}</Text>
              <TouchableOpacity style={styles.btnBorderBlue}>
                <Text style={styles.buttonHowMuchText}>
                  {i18n.t('SCEEAR.BTNNumber')}
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SCEmgEvacuaAndRepatriaScreen;

// Import external libs
import React, { Component } from 'react';
import { Animated } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Dropdown } from 'react-native-material-dropdown';
// Import UI
import {
  View, Text, TextInput, Button, TextButton, Image, FlatList, ScrollView,
  TouchableOpacity,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';

const customStyles = {
  stepIndicatorSize: 25,
  stepStrokeCurrentColor: '#fe7013',
};

class SubmitClaimScreen extends Component {

  static navigationOptions = {
    title: 'MSIG',
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);

    this.icons = {
      collapse: theme.Image.Ic.Collapse,
      expand: theme.Image.Ic.Expand,
    };

    this.state = {
      title: props.title,
      expanded: false,
      animation: new Animated.Value(30),
    };
  }

  //T Toggle button
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  toggle() {
    const {
      expanded,
      maxHeight,
      minHeight,
      animation,
    } = this.state;
    const initialValue = expanded ? maxHeight + minHeight : minHeight;
    const finalValue = expanded ? minHeight : maxHeight + minHeight;

    this.setState({
      expanded: !expanded,
    });

    animation.setValue(initialValue);
    Animated.spring(
      animation,
      {
        toValue: finalValue,
      },
    ).start();
  }

  render() {
    const {
        title,
        expanded,
        animation,
      } = this.state;
  
      const { children } = this.props
      
    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView scrollEnabled={false}>
        <View style={styles.submitClaim}>
          <Image style={styles.iconClaim} source={theme.Image.iclaim.SubmitClaim} />
          <View>
          <Text style={styles.titleText}>
            {i18n.t('TitleSubmitClaim')}
          </Text>
          </View>
        </View>
        </ScrollView>
     
        {/**Text Show success */}
        <ScrollView style={styles.txtScroll} scrollEnabled={false}>

        <Text style={styles.txtSuccess}>
                  {i18n.t('TSuccess')}
          </Text>
          <Text style={styles.txtSubmited}>
                  {i18n.t('TinfoSubmitClaim')}
          </Text>
          <Text style={styles.txtCheck}>
                  {i18n.t('TinfoCheckSubmitClaim')}
          </Text>
        </ScrollView>

        {/** Text Show info expense */}
        <Text style={styles.infoText}>
          </Text>

          {/** Button */}
        <TouchableOpacity style={styles.buttonBackClaim}
                onPress={this.toggle.bind(this)}
                underlayColor="#f1f1f1"
            >
            <Text style={styles.titleClaimButton}>
                  {i18n.t('TButtonBackMyClaims')}
            </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default SubmitClaimScreen;

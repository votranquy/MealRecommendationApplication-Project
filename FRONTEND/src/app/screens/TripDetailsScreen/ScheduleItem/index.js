/*
  This is template for creating new component, please clone from here for coding easier
*/
// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text, Image } from '../../../../components';
import styles from './styles';
import theme from '../../../../theme';
// Import internal logics

class ScheduleItem extends Component {
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
    const { style, item } = this.props;
    return (
      <View>
        <View style={styles.address1Container}>
          <View style={styles.iconBlankContainer}>
            <Image
              style={styles.iconBlank}
              source={theme.Image.Si.iconBlankCircle}
            />
          </View>
          <View style={styles.nameAddressContainer}>
            <Text style={styles.nameAddress}>{item.name}</Text>
          </View>
          <View style={styles.dateAddressContainer}>
            <Text style={styles.dateAddress}>{item.date}</Text>
          </View>
        </View>
        <View style={[item.last ? styles.clearBoxContainer : styles.inactive]}>
          <View style={[item.last ? styles.clearBox : styles.inactive]} />
        </View>
      </View>
    );
  }
}

export default ScheduleItem;

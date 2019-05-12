// Import external libs
import React, { Component } from 'react';
import { Modal } from 'react-native';
// Import UI
import {
  View, Text, Image, Button,
} from '../../../components';
import styles from './styles';
import theme from '../../../theme';

// TODO: Will be refactored
export default class ModalConfirm extends Component {
  render() {
    const { navigation } = this.props;
    const btn = navigation.getParam('txtBtn', 'NO-Button');
    const text = navigation.getParam('txtNoti', 'NO-Text');
    return (
      <View style={styles.container}>
        <Modal isVisible transparent>
          <View style={styles.contentContainer}>
            <Image source={theme.Image.popupConfirm.iconSuccess} style={styles.imgSuccess} />
            <Text style={styles.txtNoti}>{text}</Text>
            <Button
              text={btn}
              style={styles.btnBackHome}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

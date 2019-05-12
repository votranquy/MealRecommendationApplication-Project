/*
  This is template for creating new component, please clone from here for coding easier
*/
// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, TextButton, Image,
} from '../../../../components';
import styles from './styles';
import i18n from '../../../../i18n';
import theme from '../../../../theme';
// Import internal logics

class List3rdComponent extends Component {
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
        <View style={styles.content3rd}>
          <Text style={styles.txt3rdQuestion}>{i18n.t('TPL.Question')}</Text>
          <View style={styles.contentProblem}>
            <Text
              style={styles.txtProblem}
            >{i18n.t('TPL.Problem')}
              <Image source={theme.Image.claim.iconCheck} />
            </Text>
          </View>
        </View>
        <TextButton
          textStyle={styles.txStybtnChange}
          style={styles.txbtnChange}
          text={i18n.t('TPL.Change')}
        />
      </View>
    );
  }
}

export default List3rdComponent;

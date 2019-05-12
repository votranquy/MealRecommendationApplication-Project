import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import TouchableOpacity from './base/CTouchableOpacity';
import theme from '../theme';

export default class CAlphaButton extends PureComponent {
  render() {
    const {
      style, textStyle, text, ...more
    } = this.props;
    return (
      <TouchableOpacity
        style={[theme.Style.DefaultButton,
          { backgroundColor: theme.Color.ButtonBackground }, style]}
        {...more}
      >
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    ...theme.Style.DefaultText,
    textAlign: 'center',
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontSmall,
    color: theme.Color.White,
  },
});

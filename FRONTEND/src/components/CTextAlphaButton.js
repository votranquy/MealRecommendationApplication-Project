import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import TouchableOpacity from './base/CTouchableOpacity';
import theme from '../theme';
import Color from '../theme/Color';

export default class CTextAlphaButton extends PureComponent {
  render() {
    const {
      style, textStyle, text, leftIcon: LIcon, rightIcon: RIcon, ...more
    } = this.props;
    return (
      <TouchableOpacity
        style={[theme.Style.DefaultButton, styles.container, style]}
        {...more}
      >
        {LIcon}
        <Text style={[styles.text, textStyle]}>{text}</Text>
        {RIcon}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: -1,
    marginHorizontal: theme.Size.LayoutMedium,
    flexDirection: 'row',
  },
  text: {
    ...theme.Style.DefaultText,
    textAlign: 'center',
    color: Color.Blue,
  },
});

import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';
import theme from '../theme';

export default class CTextInput extends PureComponent {
  static defaultProps = {
    placeholderTextColor: theme.Color.Gray,
    underlineColorAndroid: 'transparent',
    autoCorrect: false,
  };

  render() {
    const {
      style, ...more
    } = this.props;
    return (
      <TextInput
        style={[theme.Style.DefaultTextInput, style]}
        {...more}
      />
    );
  }
}

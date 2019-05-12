import React from 'react';
import { Text } from 'react-native';
import theme from '../theme';

export default (props) => {
  const { style, ...more } = props;
  return <Text style={[theme.Style.DefaultText, style]} {...more} />;
};

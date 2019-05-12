import React from 'react';
import { Image } from 'react-native';
import theme from '../theme';

export default (props) => {
  const { style, ...more } = props;
  return <Image style={[theme.Style.DefaultImage, style]} {...more} />;
};

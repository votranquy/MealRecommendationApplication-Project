import React, { PureComponent } from 'react';
import _ from 'lodash';
import { Image } from 'react-native';
import TouchableOpacity from './base/CTouchableOpacity';
import theme from '../theme';
import { ImageUtil } from '../utils';

export default class CTouchableImage extends PureComponent {
  render() {
    const {
      source, sourceUrl, imageStyle, ...more
    } = this.props;
    const imageSource = source || ImageUtil.correct(sourceUrl);
    return (
      <TouchableOpacity {...more}>
        <Image
          style={[theme.Style.DefaultImage, imageStyle]}
          source={imageSource}
        />
      </TouchableOpacity>
    );
  }
}

import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import config from '../../config';

export default class CTouchableOpacity extends PureComponent {
  static propsType = {
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
    this._onLongPress = this._onLongPress.bind(this);
  }

  _onPress() {
    const { onPress, disabled } = this.props;
    if (onPress && !disabled) {
      onPress();
    }
  }

  _onLongPress() {
    const { onLongPress, disabled } = this.props;
    if (onLongPress && !disabled) {
      onLongPress();
    }
  }

  render() {
    const {
      onPress, onLongPress, ...more
    } = this.props;
    return (
      <TouchableOpacity
        onPress={_.throttle(this._onPress, config.throttleInterval)}
        onLongPress={_.throttle(this._onLongPress, config.throttleInterval)}
        {...more}
      />
    );
  }
}

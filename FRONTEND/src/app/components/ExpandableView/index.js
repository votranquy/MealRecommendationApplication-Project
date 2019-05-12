// Import external libs
import React, { Component } from 'react';
// Import UI
import { Animated } from 'react-native';
import {
  View, Text, TouchableOpacity, Image, TextButton,
} from '../../../components';
import styles from './styles';
// Import internal logics
import theme from '../../../theme';
import i18n from '../../../i18n';

class ExpandableView extends Component {
  static defaultProps = {
    icons: {
      collapse: theme.Image.Ic.Collapse,
      expand: theme.Image.Ic.Expand,
    },
  }

  constructor(props) {
    super(props);

    this._toggle = this._toggle.bind(this);
    this._update = this._update.bind(this);

    this._titleHeightChanged = this._titleHeightChanged.bind(this);
    this._contentHeightChanged = this._contentHeightChanged.bind(this);

    this.state = {
      expanded: false,
      contentHeight: 0,
    };

    this._minHeight = -1;
    this._animation = new Animated.Value(this._minHeight);
    this._preContentHeight = 0;
  }

  _toggle() {
    const { expanded, contentHeight } = this.state;

    this._animate(
      expanded ? contentHeight + this._minHeight : this._minHeight,
      expanded ? this._minHeight : contentHeight + this._minHeight,
    );

    this.setState({
      expanded: !expanded,
    });
  }

  _update() {
    const { expanded, contentHeight } = this.state;
    if (!expanded) return;

    this._animate(
      this._preContentHeight + this._minHeight,
      contentHeight + this._minHeight,
    );

    this._preContentHeight = contentHeight;
  }

  _animate(fromValue, toValue) {
    this._animation.setValue(fromValue);
    Animated.spring(
      this._animation,
      {
        toValue,
        overshootClamping: true,
      },
    ).start();
  }

  _titleHeightChanged(event) {
    const newHeight = event.nativeEvent.layout.height;
    this._animation.setValue(newHeight);
    this._minHeight = newHeight;
  }

  _contentHeightChanged(event) {
    this.setState({
      contentHeight: event.nativeEvent.layout.height,
    }, this._update);
  }

  render() {
    const {
      style, titleContainerStyle, titleStyle, bodyStyle, iconTintColor: tintColor,
      title, removable, onRemovePress, icons, children,
    } = this.props;

    const { expanded } = this.state;

    return (
      <Animated.View
        style={[styles.container, style, { height: this._animation }]}
      >
        <TouchableOpacity
          style={[styles.titleContainer, titleContainerStyle]}
          onLayout={this._titleHeightChanged}
          onPress={this._toggle}
        >
          <Text style={[styles.title, titleStyle]}>{title}</Text>

          {removable && (
          <TextButton
            style={styles.txtButtonRemove}
            onPress={onRemovePress}
            text={i18n.t('CM.Remove')}
          />
          ) }

          <Image
            style={styles.btnImage}
            imageStyle={{ tintColor }}
            source={expanded ? icons.collapse : icons.expand}
          />
        </TouchableOpacity>

        <View style={[styles.body, bodyStyle]} onLayout={this._contentHeightChanged}>
          {children}
        </View>

      </Animated.View>
    );
  }
}

export default ExpandableView;

// Import external libs
import React, { Component } from 'react';
import { Animated } from 'react-native';

// Import UI
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from '../../../components';
import styles from './styles';

// Import internal logics
import theme from '../../../theme';
import i18n from '../../../i18n';

class Expense extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      collapse: theme.Image.Ic.Collapse,
      expand: theme.Image.Ic.Expand,
    };

    this._setMinHeight = this._setMinHeight.bind(this);
    this._setMaxHeight = this._setMaxHeight.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      title: props.title || '',
      removable: props.removable || false,
      expanded: false,
      animation: new Animated.Value(30),
    };
  }

  toggle(skip = false) {
    const {
      expanded,
      maxHeight,
      minHeight,
      animation,
    } = this.state;

    const initialValue = expanded ? maxHeight + minHeight : minHeight;
    const finalValue = expanded ? minHeight : maxHeight + minHeight;

    if (!skip) {
      this.setState({
        expanded: !expanded,
      });
    }

    animation.setValue(initialValue);
    Animated.spring(
      animation,
      {
        toValue: finalValue,
      },
    ).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    });
  }

  render() {
    const {
      title,
      removable,
      expanded,
      animation,
    } = this.state;

    const { children, onRemove, style } = this.props;

    let icon = this.icons.collapse;

    if (expanded) {
      icon = this.icons.expand;
    }

    return (
      <Animated.View
        style={[styles.container, style, { height: animation }]}
      >
        <View style={styles.titleContainer} onLayout={this._setMinHeight}>
          <View style={styles.leftTitleContainer}>
            <Text style={styles.title}>{title}</Text>
            {removable && (
            <TouchableOpacity
              style={styles.button}
              onPress={onRemove}
            >
              <Text style={styles.txtButtonRemove}>
                {i18n.t('Expense.BtnRemove')}
              </Text>
            </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.toggle}
            underlayColor="#f1f1f1"
          >
            <Image
              style={styles.buttonImage}
              source={icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight}>
          {children}
        </View>

      </Animated.View>
    );
  }
}

export default Expense;

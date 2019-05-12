// Import external libs
import React, { Component } from 'react';
import { Animated } from 'react-native';

// Import UI
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from '../../../../components';
import styles from './styles';

// Import internal logics
import theme from '../../../../theme';

class Expense extends Component {
  static defaultProps = {
    titleHeight: 30,
  }

  constructor(props) {
    super(props);

    this.icons = {
      collapse: theme.Image.Ic.Collapse,
      expand: theme.Image.Ic.Expand,
    };

    this.setMinHeight = this._setMinHeight.bind(this);
    this.setMaxHeight = this._setMaxHeight.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      title: props.title,
      titleStyle: props.titleStyle,
      headerStyle: props.headerStyle,
      removable: props.removable || false,
      expanded: false,
      titleHeight: props.titleHeight,
      animation: new Animated.Value(props.titleHeight),
    };

    this.update = this.update.bind(this);
  }

  update() {
    const {
      expanded,
      maxHeight,
      minHeight,
      animation,
    } = this.state;

    const finalValue = !expanded ? minHeight : maxHeight + minHeight;

    Animated.spring(
      animation,
      {
        toValue: finalValue,
      },
    ).start();
  }

  toggle() {
    const {
      expanded,
      maxHeight,
      minHeight,
      animation,
    } = this.state;

    const initialValue = expanded ? maxHeight + minHeight : minHeight;
    const finalValue = expanded ? minHeight : maxHeight + minHeight;

    this.setState({
      expanded: !expanded,
    });

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
    }, this.update);
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
      titleHeight,
      titleStyle,
      headerStyle,
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
        <View style={[styles.titleContainer, headerStyle]} onLayout={this.setMinHeight}>
          <View style={[styles.leftTitleContainer]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            {removable && (
            <TouchableOpacity
              style={styles.button}
              onPress={onRemove}
            >
              <Text style={styles.txtButtonRemove}>
                Remove
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

        <View style={styles.body} onLayout={this.setMaxHeight}>
          {children}
        </View>

      </Animated.View>
    );
  }
}

export default Expense;

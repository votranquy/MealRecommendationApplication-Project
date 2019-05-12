// Import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Import UI
import {
  ParallaxScrollView, View, Image,
} from '../../../components';
import styles from './styles';
import theme from '../../../theme';
// Import internal logics
import Foreground from './Foreground';

class MainFrame extends Component {
  static propsType = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    headerColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    titleImage: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    renderIndicator: PropTypes.func,
    renderFooter: PropTypes.func,
    editable: PropTypes.bool,
    onEdit: PropTypes.func,
  }

  static defaultProps = {
    headerColor: theme.Color.MainFrameHeaderLightBlue,
  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      style, headerColor: backgroundColor, backgroundImage, titleImage, title, message,
      renderIndicator, renderFooter, editable, onEdit,
      children,
    } = this.props;

    const stickyHeaderIndices = [];
    if (renderIndicator) stickyHeaderIndices.push(2);

    return (
      <ParallaxScrollView
        style={[styles.container, style]}
        parallaxHeight={theme.Size.MainFrameHeaderHeight}
        stickyHeaderIndices={stickyHeaderIndices}
        renderParallaxBackground={({ animatedValue }) => (
          <View style={{ flex: 1, backgroundColor, alignItems: 'center' }}>
            <Image source={backgroundImage} />
          </View>
        )}
        renderParallaxForeground={({ animatedValue }) => (
          <Foreground
            animatedValue={animatedValue}
            titleImage={titleImage}
            title={title}
            message={message}
            editable={editable}
            onEdit={onEdit}
          />
        )}
        renderIndicator={renderIndicator}
        renderFooter={renderFooter}
      >
        {children}
      </ParallaxScrollView>
    );
  }
}

export default MainFrame;

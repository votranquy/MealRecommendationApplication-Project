import React, { Component } from 'react';
import {
  View, Animated, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const window = Dimensions.get('window');

const RATIO = 9 / 16;

export default class ParallaxScroll extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    width: PropTypes.number,
    innerRef: PropTypes.func,
    onScroll: PropTypes.func,
    scrollStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    headerHeight: PropTypes.number,
    renderHeader: PropTypes.func,
    renderIndicator: PropTypes.func,
    renderFooter: PropTypes.func,
    isHeaderFixed: PropTypes.bool,
    onHeaderFixed: PropTypes.func,
    parallaxHeight: PropTypes.number,
    useNativeDriver: PropTypes.bool,
    backgroundScale: PropTypes.number,
    scrollableComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    isBackgroundScalable: PropTypes.bool,
    backgroundScaleOrigin: PropTypes.oneOf(['top', 'center']),
    headerFixedTransformY: PropTypes.number,
    headerBackgroundColor: PropTypes.string,
    contentContainerStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.object,
    ]),
    onChangeHeaderVisibility: PropTypes.func,
    renderParallaxBackground: PropTypes.func,
    renderParallaxForeground: PropTypes.func,
    fadeOutParallaxForeground: PropTypes.bool,
    fadeOutParallaxBackground: PropTypes.bool,
    headerFixedBackgroundColor: PropTypes.string,
    renderBackgroundPlaceholder: PropTypes.func,
    parallaxBackgroundScrollSpeed: PropTypes.number,
    parallaxForegroundScrollSpeed: PropTypes.number,
  };

  static defaultProps = {
    style: {},
    width: window.width,
    innerRef: null,
    onScroll: null,
    scrollStyle: {},
    headerHeight: 45,
    renderHeader: null,
    renderIndicator: null,
    renderFooter: null,
    isHeaderFixed: false,
    onHeaderFixed: () => {},
    parallaxHeight: window.width * RATIO,
    backgroundScale: 3,
    useNativeDriver: false,
    scrollableComponent: Animated.ScrollView,
    isBackgroundScalable: true,
    backgroundScaleOrigin: 'center',
    headerFixedTransformY: 0,
    headerBackgroundColor: 'rgba(0, 0, 0, 0)',
    contentContainerStyle: {},
    onChangeHeaderVisibility: () => {},
    renderParallaxBackground: null,
    renderParallaxForeground: null,
    fadeOutParallaxForeground: false,
    fadeOutParallaxBackground: false,
    headerFixedBackgroundColor: 'rgba(0, 0, 0, 1)',
    renderBackgroundPlaceholder: null,
    parallaxBackgroundScrollSpeed: 5,
    parallaxForegroundScrollSpeed: 5,
  };

  scrollY = new Animated.Value(0);

  isHeaderFixed = false;

  isHeaderVisible = true;

  constructor(props) {
    super(props);

    this.scrollableComponent = props.scrollableComponent;

    if (Animated.ScrollView !== props.scrollableComponent) {
      this.scrollableComponent = Animated.createAnimatedComponent(props.scrollableComponent);
    }

    this._onAnimatedScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
      {
        listener: this._onScroll,
        useNativeDriver: props.useNativeDriver,
      },
    );
  }

  _onScroll = (e) => {
    const contentOffsetY = e.nativeEvent.contentOffset.y;
    const {
      onScroll,
      renderHeader,
      headerHeight,
      isHeaderFixed,
      onHeaderFixed,
      parallaxHeight,
      headerFixedTransformY,
      onChangeHeaderVisibility,
    } = this.props;

    const isHeaderFixedAfterScroll = contentOffsetY > parallaxHeight
    - headerHeight + headerFixedTransformY;
    const isHeaderVisibleAfterScroll = contentOffsetY < parallaxHeight;

    if (onScroll) {
      onScroll(e);
    }

    if (renderHeader && isHeaderFixed && this.isHeaderFixed !== isHeaderFixedAfterScroll) {
      this.isHeaderFixed = isHeaderFixedAfterScroll;
      onHeaderFixed(isHeaderFixedAfterScroll);
    }

    if (renderHeader && !isHeaderFixed && this.isHeaderVisible !== isHeaderVisibleAfterScroll) {
      this.isHeaderVisible = isHeaderVisibleAfterScroll;
      onChangeHeaderVisibility(isHeaderVisibleAfterScroll);
    }
  };

  _renderBackgroundPlaceholder = () => {
    const { parallaxHeight, renderBackgroundPlaceholder } = this.props;

    if (renderBackgroundPlaceholder) {
      return renderBackgroundPlaceholder({
        animatedValue: this.scrollY,
        height: parallaxHeight,
      });
    }

    return <View style={{ height: parallaxHeight }} />;
  };

  _ref = (ref) => {
    const { innerRef } = this.props;

    if (typeof innerRef === 'function' && ref && ref._component) {
      innerRef(ref._component);
    }
  };

  _renderParallaxBackground() {
    const {
      width,
      parallaxHeight: height,
      isBackgroundScalable,
      renderParallaxBackground,
      fadeOutParallaxBackground,
      parallaxBackgroundScrollSpeed,
      backgroundScale,
      backgroundScaleOrigin,
    } = this.props;

    const topOrigin = backgroundScaleOrigin === 'top';

    const translateY = !height
      ? 0
      : this.scrollY.interpolate({
        inputRange: [...(topOrigin ? [-height, 0] : [0]), height],
        outputRange: [
          ...(topOrigin ? [-(height / backgroundScale) + height, 0] : [0]),
          -(height / parallaxBackgroundScrollSpeed),
        ],
        extrapolateLeft: 'extend',
        extrapolateRight: 'extend',
      });

    const scale = !isBackgroundScalable || !height
      ? 1
      : this.scrollY.interpolate({
        inputRange: [-height, 0],
        outputRange: [backgroundScale, 1],
        extrapolateLeft: 'extend',
        extrapolateRight: 'clamp',
      });

    const opacity = !fadeOutParallaxBackground || !height
      ? 1
      : this.scrollY.interpolate({
        inputRange: [0, height],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      });

    return (
      <Animated.View
        style={{
          position: 'absolute',
          width,
          height,
          opacity,
          transform: [{ translateY }, { scale }],
        }}
        pointerEvents="box-none"
      >
        {renderParallaxBackground({ width, height, animatedValue: this.scrollY })}
      </Animated.View>
    );
  }

  _renderParallaxForeground() {
    const {
      width,
      parallaxHeight: height,
      renderParallaxForeground,
      fadeOutParallaxForeground,
      parallaxForegroundScrollSpeed,
    } = this.props;

    /* eslint-disable indent */
    const translateY = !height
      ? 1
      : this.scrollY.interpolate({
          inputRange: [0, height],
          outputRange: [0, -(height / parallaxForegroundScrollSpeed)],
          extrapolateRight: 'extend',
          extrapolateLeft: 'clamp',
        });

    const opacity = !fadeOutParallaxForeground || !height
        ? 1
        : this.scrollY.interpolate({
            inputRange: [0, height],
            outputRange: [1, 0],
            extrapolateRight: 'extend',
            extrapolateLeft: 'clamp',
          });
    /* eslint-disable indent */

    return (
      <Animated.View
        style={{
            position: 'absolute',
            top: 0,
            width,
            height,
            opacity,
            zIndex: 1,
            transform: [{ translateY }],
          }}
        pointerEvents="box-none"
      >
        {renderParallaxForeground({ width, height, animatedValue: this.scrollY })}
      </Animated.View>
    );
  }

  _renderHeader() {
    const {
      width,
      headerHeight: height,
      renderHeader,
      isHeaderFixed,
      parallaxHeight,
      useNativeDriver,
      headerFixedTransformY,
      headerBackgroundColor,
      headerFixedBackgroundColor,
    } = this.props;

    const style = {
      position: 'absolute',
      top: 0,
      zIndex: 2,
      flex: 1,
      width,
      height,
    };

    if (!isHeaderFixed) {
      const parallaxHeightWithoutHeader = parallaxHeight - height;

      style.transform = [
        {
          translateY: this.scrollY.interpolate({
            inputRange: parallaxHeightWithoutHeader
              ? [0, parallaxHeight - height, parallaxHeight]
              : [0, parallaxHeight],
            outputRange: parallaxHeightWithoutHeader ? [0, 0, -height] : [0, -height],
            extrapolate: 'clamp',
          }),
        },
      ];
    } else if (headerFixedTransformY) {
      style.transform = [
        {
          translateY: this.scrollY.interpolate({
            inputRange: [0, headerFixedTransformY],
            outputRange: [0, -headerFixedTransformY],
            extrapolate: 'clamp',
          }),
        },
      ];
    }

    if (!useNativeDriver && headerBackgroundColor) {
      style.backgroundColor = this.scrollY.interpolate({
        inputRange: [0, parallaxHeight - height],
        outputRange: [headerBackgroundColor, headerFixedBackgroundColor],
        extrapolate: 'clamp',
      });
    } else if (useNativeDriver && headerBackgroundColor) {
      style.backgroundColor = headerBackgroundColor;
    }

    return (
      <Animated.View style={style} pointerEvents="box-none">
        {renderHeader({ width, height, animatedValue: this.scrollY })}
      </Animated.View>
    );
  }

  render() {
    const {
      style: wrapperStyle,
      children,
      scrollStyle,
      renderHeader,
      renderIndicator,
      renderFooter,
      useNativeDriver,
      scrollableComponent: ScrollableComponent,
      contentContainerStyle,
      renderParallaxBackground,
      renderParallaxForeground,
      ...scrollViewProps
    } = this.props;

    return (
      <View style={wrapperStyle} onLayout={this._onLayout}>
        {renderParallaxBackground && this._renderParallaxBackground(!!renderHeader)}

        <ScrollableComponent
          {...scrollViewProps}
          ref={this._ref}
          style={scrollStyle}
          throttle={16}
          onScroll={this._onAnimatedScroll}
          scrollEventThrottle={16}
          contentContainerStyle={contentContainerStyle}
          stickySectionHeadersEnabled
          onMoveShouldSetResponder={() => false}
          onStartShouldSetResponderCapture={() => false}
        >
          {renderParallaxForeground && this._renderParallaxForeground()}
          {this._renderBackgroundPlaceholder()}
          {renderIndicator && renderIndicator()}
          {children}
        </ScrollableComponent>
        {renderHeader && this._renderHeader()}
        {renderFooter && renderFooter()}
      </View>
    );
  }
}

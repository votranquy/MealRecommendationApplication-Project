import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View, TextButton,
} from '../../components';
import theme from '../../theme';

export default (props) => {
  const {
    style, leftText, onFooterLeft, rightText, onFooterRight,
  } = props;
  return (
    <View style={[styles.container, style]}>
      {leftText && (
      <TextButton
        textStyle={styles.footerText}
        leftIcon={<Icon style={{ marginRight: theme.Size.LayoutMedium }} name="arrow-left" size={12} color={theme.Color.White} />}
        text={leftText}
        onPress={onFooterLeft}
      />
      )}
      {rightText && (
      <TextButton
        textStyle={styles.footerText}
        rightIcon={<Icon style={{ marginLeft: theme.Size.LayoutMedium }} name="arrow-right" size={12} color={theme.Color.White} />}
        text={rightText}
        onPress={onFooterRight}
      />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: theme.Color.Blue,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.Size.LayoutMedium,
  },

  footerText: {
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontBig,
    color: theme.Color.White,
  },
});

// Import external libs
import React from 'react';
// Import UI
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from '../../../../components';
// Import internal logics
import theme from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Color.LightBlue,
    height: 14,
    width: 14,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default (props) => {
  const { showMark } = props;
  return (
    <View style={styles.container}>
      {showMark && <Icon name="check" size={10} color="white" regular />}
    </View>
  );
};

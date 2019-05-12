// Import external libs
import React from 'react';
// Import UI
import { StyleSheet } from 'react-native';
import { Text } from '../../../components';
// Import internal logics
import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    height: theme.Size.LayoutHugest,
    color: theme.Color.White,
    backgroundColor: theme.Color.Blue,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default (props) => {
  const { message } = props;
  return (
    <Text style={styles.container}>
      {message}
    </Text>
  );
};

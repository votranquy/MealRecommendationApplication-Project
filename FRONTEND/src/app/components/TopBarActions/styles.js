import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  iconButton: {
    height: theme.Size.ButtonActionSize,
    width: theme.Size.ButtonActionSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

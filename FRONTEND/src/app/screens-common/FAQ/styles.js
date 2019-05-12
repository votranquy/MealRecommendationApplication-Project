import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  containerForm: {
    flex: 1,
    marginTop: theme.Size.LayoutBig,
    backgroundColor: theme.Color.White,
  },

  titleQuestion: {
    padding: theme.Size.LayoutBig,
  },

  title: {
    color: theme.Color.MainFrameHeaderBlue,
  },

  bodyAnswer: {
    padding: theme.Size.LayoutBig,
  },
});

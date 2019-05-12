import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  containerForm: {
    flex: 1,
    padding: theme.Size.LayoutBig,
    backgroundColor: theme.Color.White,
  },

  textTitlePolicy: {
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontMedium,
    color: theme.Color.NiceBlack,
    alignSelf: 'flex-start',
  },

  textBodyPolicy: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.DarkestGray,
    alignSelf: 'flex-start',
  },
});

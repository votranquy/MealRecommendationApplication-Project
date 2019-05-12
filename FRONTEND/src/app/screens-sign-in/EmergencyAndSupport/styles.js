import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  containerForm: {
    flex: 1,
    marginTop: theme.Size.LayoutMedium,
    marginLeft: theme.Size.LayoutBiggest,
    marginRight: theme.Size.LayoutBiggest,
  },

  textTitleSupport: {
    marginTop: theme.Size.LayoutMedium,
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontBigger,
    color: theme.Color.EmergencyAndSupportTitle,
    alignSelf: 'flex-start',
  },

  textBodySupport: {
    marginTop: theme.Size.LayoutMedium,
    marginBottom: theme.Size.LayoutMedium,
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Black,
    alignSelf: 'flex-start',
  },

  textNumberPhone: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: -theme.Size.LayoutMedium,
  },

});

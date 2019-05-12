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

  txtNewPass: {
    marginTop: theme.Size.LayoutMedium,
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Black,
    alignSelf: 'flex-start',
  },

  txtInputNewPass: {
    marginTop: theme.Size.LayoutMedium,
    marginBottom: theme.Size.LayoutMedium,
    width: '100%',
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Black,
    alignSelf: 'flex-start',
  },

  txtConfirmPass: {
    marginTop: theme.Size.LayoutMedium,
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Black,
    alignSelf: 'flex-start',
  },

  txtInputConfirmPass: {
    marginTop: theme.Size.LayoutMedium,
    marginBottom: theme.Size.LayoutMedium,
    width: '100%',
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Black,
    alignSelf: 'flex-start',
  },

  btnSubmit: {
    ...theme.Style.DefaultButton,
    marginTop: theme.Size.LayoutMedium,
    width: '100%',
  },

});

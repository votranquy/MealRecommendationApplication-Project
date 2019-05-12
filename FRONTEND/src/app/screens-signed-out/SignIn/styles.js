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

  txtEmail: {
    marginTop: theme.Size.LayoutMedium,
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Black,
    alignSelf: 'flex-start',
  },

  txtInputEmail: {
    marginTop: theme.Size.LayoutMedium,
    marginBottom: theme.Size.LayoutMedium,
    width: '100%',
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Black,
    alignSelf: 'flex-start',
  },

  txtPassWord: {
    marginTop: theme.Size.LayoutMedium,
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Black,
    alignSelf: 'flex-start',
  },

  txtInputPassWord: {
    marginTop: theme.Size.LayoutMedium,
    marginBottom: theme.Size.LayoutMedium,
    width: '100%',
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Black,
    alignSelf: 'flex-start',
  },

  btnLogin: {
    ...theme.Style.DefaultButton,
    marginTop: theme.Size.LayoutMedium,
    width: '100%',
  },

  btnForgotPassword: {
    ...theme.Style.DefaultButton,
    marginTop: theme.Size.LayoutMedium,
    width: '100%',
  },

});

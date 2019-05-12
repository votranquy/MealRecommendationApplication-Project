import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  ctnLoginHeader: {
    height: 200,
    backgroundColor: theme.Color.LightBlue,
  },
  icoLock: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
  txtSILogIn: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  txtSIWelBack: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  tiSIEmail: {
    width: 240,
    height: 40,
    borderWidth: 1,
    marginTop: 5,
  },
  tiSIPass: {
    width: 240,
    height: 40,
    borderWidth: 1,
    marginTop: 5,
  },
  txtSIEmail: {
    marginRight: 200,
    marginTop: 10,
    fontSize: 10,
    fontFamily: theme.Font.Bold,
  },
  txtSIPass: {
    marginRight: 180,
    marginTop: 20,
    fontSize: 10,
    fontFamily: theme.Font.Bold,
  },
  btnSILogin: {
    marginTop: 15,
    height: 40,
    width: 240,
  },
  btnForgotPass: {
    width: 160,
    color: theme.Color.Blue,
    fontSize: theme.Size.FontSmall,
  },
  icoMSIG: {
    position: 'relative',
    alignSelf: 'center',
    top: 10,
    right: 40,
  },
});

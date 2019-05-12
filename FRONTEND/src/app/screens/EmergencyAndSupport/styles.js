import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },
  ctnHeader: {
    height: 200,
    backgroundColor: '#0291DF',
  },
  icoExclamation: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
  txtEmerTitle: {
    fontFamily: theme.Font.Bold,
    fontSize: 30,
    color: theme.Color.White,
    alignSelf: 'center',
    marginTop: 20,
  },
  iconMSIG: {
    position: 'relative',
    alignSelf: 'center',
    top: 10,
    right: 40,
  },
  containerItem: {
    width: 280,
    marginTop: 20,
    marginLeft: 20,
  },
  txtGuide: {
    fontFamily: theme.Font.Regular,
    fontSize: theme.Size.FontSmallest,
    color: theme.Color.Black,
    marginTop: 10,
  },
  txtBtnPhone: {
    color: theme.Color.Blue,
    fontSize: theme.Size.FontSmallest,
  },
  txtTitleItem: {
    color: '#1D164A',
    fontSize: theme.Size.FontBiggest,
  },
  btnPhone: {
    backgroundColor: theme.Color.White,
  },
});

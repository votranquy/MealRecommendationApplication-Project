import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },
  ctnLoginHeader: {
    height: 200,
    backgroundColor: '#0291DF',
  },
  iconLock: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
  txtPrivacyTitle: {
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
    width: 300,
    marginTop: 10,
    marginLeft: 20,
  },
  txtTitle: {
    fontFamily: theme.Font.SemiBold,
    fontSize: theme.Size.FontSmallest,
    color: theme.Color.Black,
    marginTop: 10,
  },
  txtDetail: {
    fontSize: theme.Size.FontSmallest,
  },
});

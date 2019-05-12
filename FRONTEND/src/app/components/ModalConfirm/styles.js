import { StyleSheet } from 'react-native';
import theme from '../../../theme';

// TODO: Will be refactored
export default StyleSheet.create({
  container: {
    backgroundColor: '#43BCDB',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    backgroundColor: '#FFFF',
    width: '70%',
    height: '40%',
    marginTop: '50%',
    borderRadius: 6,
    alignSelf: 'center',
    alignItems: 'center',
  },
  imgSuccess: {
    marginTop: 10,
  },
  txtNoti: {
    textAlign: 'center',
    marginTop: 20,
  },
  btnBackHome: {
    backgroundColor: '#8CC35D',
    width: 220,
    height: 40,
    borderRadius: 6,
    marginTop: 20,
  },
});

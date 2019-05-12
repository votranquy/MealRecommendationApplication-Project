import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    borderBottomColor: theme.Color.Gray,
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingBottom: 10,
    color: '#2a2f43',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {

  },
  buttonImage: {
    width: 30,
    height: 25,
    tintColor: '#aaaaaa',
  },
  txtButtonRemove: {
    paddingLeft: 10,
    color: '#4184ff',
    fontSize: 14,
  },
  body: {

  },
});

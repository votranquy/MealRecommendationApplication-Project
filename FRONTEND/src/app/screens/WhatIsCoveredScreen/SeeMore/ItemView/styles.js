import { StyleSheet } from 'react-native';
import theme from '../../../../../theme';

export default StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.Color.Gray,
  },

  txtLeft: {
    flex: 7,
    fontFamily: theme.Font.Bold,
    color: theme.Color.Gray,
    paddingRight: 30,
  },

  txtRight: {
    flex: 3,
    color: theme.Color.Gray,
  },
});

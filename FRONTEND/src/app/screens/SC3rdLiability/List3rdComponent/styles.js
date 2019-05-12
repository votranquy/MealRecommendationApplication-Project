import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  content3rd: {
    marginTop: 20,
    marginLeft: 30,
  },
  txt3rdQuestion: {
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontBiggest,
    color: theme.Color.Black,
  },
  contentProblem: {
    marginTop: 30,
  },
  txtProblem: {
    color: '#9ECD78',
  },
  txStybtnChange: {
    color: theme.Color.Blue,
    fontSize: theme.Size.FontSmall,
  },
  txbtnChange: {
    marginLeft: 30,
  },
});

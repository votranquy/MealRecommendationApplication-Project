import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  ctnHeader: {
    height: 200,
    backgroundColor: theme.Color.LightBlue,
  },

  txtHeaderTitle: {
    fontSize: theme.Size.FontHuger,
    color: '#fafafa',
    alignSelf: 'center',
  },

  containerClaim: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  containerGroupItems: {
    flex: 1,
    backgroundColor: '#fafafa',
    flexDirection: 'column',
    marginLeft: 40,
    marginRight: 40,
  },

  containerExpense: {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },

  expenseItems: {
    marginTop: 5,
  },

  lblGroupItems: {
    backgroundColor: '#fafafa',
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 10,
  },

  txtGroupItems: {
    backgroundColor: '#fafafa',
    fontSize: 15,
    color: 'black',
  },

  containerNavigator: {
    height: 50,
    backgroundColor: '#4083ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonImage: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: 20,
    marginRight: 20,
  },

  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
  },

  buttonIcon: {
    alignSelf: 'center',
  },

  iconBuyPolicy: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
});

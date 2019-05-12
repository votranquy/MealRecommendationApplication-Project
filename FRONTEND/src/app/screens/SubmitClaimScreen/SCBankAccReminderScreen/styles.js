import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
    marginBottom: 20,
  },

  ctnBankAccReminderHeader: {
    height: 200,
    backgroundColor: '#ffb100',
    justifyContent: 'center',
  },

  txtBankAccReminderText1: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },

  containerForm: {
    flex: 1,
    backgroundColor: theme.Color.White,
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },

  inStepBankAccReminder: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },

  textTitle: {
    fontSize: theme.Size.FontHuge,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  iconBuyBankAccReminder: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  textDescription: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontSmaller,
  },

  buttonHowMuchText: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontSmaller,
    color: '#4184ff',
  },

  ctnItemForm: {
    marginTop: 20,
  },

  buttonSubmit: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },

});

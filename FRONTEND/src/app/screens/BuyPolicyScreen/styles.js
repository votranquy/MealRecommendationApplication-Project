import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  ctnPolicyHeader: {
    height: 200,
    backgroundColor: theme.Color.LightBlue,
  },

  txtPolicyText1: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  txtPolicyText2: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.White,
    alignSelf: 'center',
  },

  containerForm: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: theme.Color.White,
    flexDirection: 'column',
  },

  inStepPolicy: {
    marginTop: 20,
  },

  groupItemsForm: {
    flex: 1,
    marginTop: 20,
    alignSelf: 'center',

  },

  introduceText1: {
    marginTop: 20,
    fontSize: theme.Size.FontSmaller,
  },

  txtLabel: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 20,
  },
  edtInput: {
    marginTop: 10,
    marginRight: 20,
  },

  btnNext: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '100%',
    height: 50,
    alignSelf: 'center',
  },

  icoBuyPolicy: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
  progressCurrent: {
    color: '#000000',
    borderColor: '#8BC35C',
  },

  btnLearnMore: {
    width: 300,
    color: theme.Color.DarkBlue,
    justifyContent: 'flex-start',
  },

  datepickerContainer: {
    width: 300,
    height: 40,
    marginTop: 10,
  },

  viewTextEndDate: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 300,
    borderRadius: 3,
    borderWidth: 1,
    height: 40,
    borderColor: '#AAAAAA',
  },

  txtEndDate: {
    fontSize: 14,
    color: '#333333',
  },
});

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
  groupItemsForm: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },

  inStepPolicy: {
    marginTop: 20,
  },
  introduceText1: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: theme.Size.FontSmaller,
  },
  txtLabel: {
    fontSize: theme.Size.FontSmaller,
    color: 'black',
    fontWeight: 'bold',
  },
  txtCalendar: {
    fontSize: theme.Size.FontSmaller,
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
  },

  txtNationality: {
    fontSize: theme.Size.FontSmaller,
    color: 'black',
    marginLeft: 10,
    marginTop: -7,
    marginRight: 10,
  },

  edtInput: {
    width: '100%',
    marginTop: 10,
  },
  buttonNext: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '100%',
    height: 50,
    alignSelf: 'center',

  },
  iconBuyPolicy: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
  learnMoreButton: {
    marginTop: 20,
    width: '100%',
    height: 50,
    color: theme.Color.DarkBlue,
    textAlign: 'center',
    alignSelf: 'center',

  },
  viewDropDownNationality: {
    width: '100%',
    height: 50,
    marginTop: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: theme.Color.Gray,
  },
  containerDD: {
    marginTop: -20,
    marginLeft: 10,
  },
  InputDD: {
    borderBottomColor: theme.Color.White,
  },
  datePickerBox: {
    marginTop: 10,
    marginLeft: 36,
    marginRight: 20,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 49,
    justifyContent: 'center',
  },

});

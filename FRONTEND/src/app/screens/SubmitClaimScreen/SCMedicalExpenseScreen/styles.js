import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
    marginBottom: 20,
  },

  ctnMedicalExpenseHeader: {
    height: 200,
    backgroundColor: '#ffb100',
    justifyContent: 'center',
  },

  txtMedicalExpenseText1: {
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

  inStepMedicalExpense: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },

  textTitle: {
    fontSize: theme.Size.FontHuger,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  iconBuyMedicalExpense: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  textDescription: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontSmaller,
  },

  btnBorderBlue: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: theme.Color.White,
    color: theme.Color.White,
    borderWidth: 1,
    borderColor: '#4184ff',
  },

  txtLabel: {
    fontSize: theme.Size.FontSmaller,
    color: 'black',
    fontWeight: 'bold',
  },

  edtInput: {
    marginTop: 10,
    fontSize: theme.Size.FontSmaller,
  },

  edtInputDetail: {
    marginTop: 10,
    fontSize: theme.Size.FontSmaller,
    height: 60,
  },

  groupItemsForm: {
    marginTop: 20,
  },

  edtGroupDropdown: {
    marginTop: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 5,
    height: 50,
  },

  edtDropdown: {
    marginLeft: 10,
  },

  editContainerDropdown: {
    position: 'absolute',
    top: -20,
    width: '100%',
  },

  containerExpense: {
    marginTop: 10,
  },

  containerTotalExpense: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  edtGroupDropdownExpense: {
    marginTop: 10,
    marginRight: 10,
    width: 70,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 5,
    height: 50,
  },

  buttonHowMuchText: {
    fontWeight: 'bold',
    color: '#4184ff',
  },

  edtInputExpense: {
    flex: 1,
  },

  ctnImageButtonExpense: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ctnAddPhoto: {
    paddingLeft: 5,
    flex: 1,
  },

  img_addPhoto: {
    width: 30,
    height: 30,
    tintColor: '#4888ff',
  },

  txtAddPhoto: {
    color: '#4888ff',
    paddingLeft: 5,
  },

  ctnConfirm: {
    flexDirection: 'row',
  },

  txtConfirm: {
    width: '65%',
  },

  ctnToggleConfirm: {
    flex: 1,
    alignItems: 'center',
  },

  ctnToggle: {
    width: 50,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    alignItems: 'center',
    borderRadius: 20,
  },

  swtContainer: {
    padding: 5,
    width: 105,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#aaaaaa',
  },

  swtCircle: {
    width: 33,
    height: 33,
    borderRadius: 19,
    backgroundColor: 'white',
  },

  swtButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    margin: 5,
  },

  swtRightContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  swtLeftContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  btnNext: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
  },
});

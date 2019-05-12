import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  containerHeader: {
    height: 200,
    backgroundColor: '#ffb100',
    justifyContent: 'center',
  },

  iconHeader: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  LblHeaderTitle: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },

  inStepIndicator: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },

  containerBody: {
    flex: 1,
    backgroundColor: theme.Color.White,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  groupItems: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  txtTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  txtDecs: {
    fontSize: 16,
    color: 'black',
  },

  btnHowMuch: {
    ...theme.Style.DefaultButton,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: theme.Color.White,
    color: theme.Color.White,
    borderWidth: 1,
    borderColor: '#4184ff',
    marginTop: 15,
  },

  txtHowMuch: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontSmaller,
    color: '#4184ff',
  },

  lblInput: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  dropdownItems: {
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 5,
    height: 50,
  },

  dropdownContainer: {
    top: -20,
    width: '100%',
  },

  dropdownInput: {
    borderBottomColor: 'transparent',
    marginLeft: 10,
  },

  txtExpenseDecs: {
    fontWeight: 'bold',
  },

  addPhotoContainer: {
    flexDirection: 'row',
  },

  photoIcon: {
    marginRight: 10,
    tintColor: '#4184ff',
  },

  txtAddPhoto: {
    fontSize: 16,
    color: '#4184ff',
    fontWeight: 'bold',
  },

  marginTop: {
    marginTop: 10,
  },

  marginBottom: {
    marginBottom: 10,
  },

  txtInputContainer: {
    height: 60,
    textAlignVertical: 'top', // Android only
  },

  groupAmount: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inpAmount: {
    flex: 1,
  },

  inpCurrency: {
    marginRight: 10,
    width: 80,
  },

  btnAddMore: {
    ...theme.Style.DefaultButton,
    width: '100%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: theme.Color.White,
    color: theme.Color.White,
    borderWidth: 1,
    borderColor: '#4184ff',
    marginBottom: 10,
  },

  txtAddMore: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4184ff',
  },

  btnNext: {
    ...theme.Style.DefaultButton,
    width: '100%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: theme.Color.Red,
    color: theme.Color.Red,
    borderWidth: 1,
    borderColor: theme.Color.Red,
    marginBottom: 20,
  },

  txtNext: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.Color.White,
  },
});

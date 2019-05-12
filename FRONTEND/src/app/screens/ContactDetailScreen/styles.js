import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  ctnContactHeader: {
    height: 200,
    backgroundColor: theme.Color.LightBlue,
  },

  txtContactText1: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  txtContactText2: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.White,
    alignSelf: 'center',
  },

  containerForm: {
    flex: 1,
    backgroundColor: theme.Color.White,
    flexDirection: 'column',
  },

  inStepContact: {
    marginTop: 20,
  },
  groupItemsForm: {
    marginTop: 20,
  },

  txtLabel: {
    fontSize: theme.Size.FontSmaller,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
  },
  edtInput: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  buttonNext: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },

  iconBuyContact: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  learnMoreButton: {
    color: '#4888ff',
    textAlign: 'center',
    alignSelf: 'center',
  },

  groupInput: {
    flex: 1,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  edtGroupInput: {
    marginRight: 20,
    marginLeft: 0,
    width: '75%',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  edtGroupDropdown: {
    marginLeft: 20,
    marginRight: 0,
    width: '25%',
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: '#aaaaaa',
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingBottom: -20,
  },

  edtDropdown: {
    marginLeft: 10,
  },

  editContainerDropdown: {
    position: 'absolute',
    top: -20,
    width: '100%',
  },

});

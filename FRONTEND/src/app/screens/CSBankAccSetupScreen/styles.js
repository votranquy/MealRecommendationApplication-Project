import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  titleContainer: {
    flexDirection: 'row',
    borderBottomColor: theme.Color.Gray,
    borderBottomWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
  },

  ctnSubmitClaimHeader: {
    height: 200,
    backgroundColor: theme.Color.Orange,
    justifyContent: 'center',
  },

  txtSubmitClaimText: {
    fontSize: theme.Size.FontHuger,
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
  inStepSubmitClaim: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },
  txtLabel: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.NiceBlack,
    fontWeight: 'bold',
  },

  edtInput: {
    fontSize: theme.Size.FontMedium,
    width: '100%',
    marginTop: 10,
  },

  txtLabelContent: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.NiceBlack,
  },

  buttonConfirm: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '100%',
    height: 50,
    alignSelf: 'center',

  },
  iconBuySubmitClaim: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  viewDropDownBank: {
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

  txtNationality: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Black,
    marginLeft: 10,
    marginTop: -7,
    marginRight: 10,
  },


});

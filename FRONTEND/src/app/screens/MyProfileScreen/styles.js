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

  ctnMyProfileHeader: {
    height: 200,
    backgroundColor: theme.Color.MediumGreen,
    justifyContent: 'center',
  },

  txtMyProfileText: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  textArea: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 100,
    justifyContent: 'flex-start',
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
    marginTop: 10,
    marginBottom: 10,
  },

  containerExpense: {
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  inStepSubmitClaim: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },
  groupItemsViewToggle: {
    // marginBottom: 10,
    // borderBottomColor: theme.Color.LightGray,
    // borderBottomWidth: 0.5,
  },
  switchContain: {
    flexDirection: 'row',
    marginRight: 20,
  },

  checkBoxContain: {
    marginRight: 20,
    marginLeft: 20,
  },

  txtLabelSubmitTitle: {
    fontSize: theme.Size.FontBigger,
    color: theme.Color.NiceBlack,
    marginLeft: 20,
    marginRight: 20,
  },

  buttonConfirm: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',

  },

  edtInput: {
    marginTop: 10,
    width: '100%',
  },

  buttonEdit: {
    marginTop: 20,
    width: '100%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: theme.Color.LightBlue,
    marginBottom: 20,
    borderColor: theme.Color.LightBlue,
  },

  switchContainer: {
    flex: 1,
    backgroundColor: theme.Color.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLabelTitle: {
    fontSize: theme.Size.FontBigger,
    color: theme.Color.NiceBlack,
    marginLeft: 20,
    marginRight: 20,
  },
  txtLabelQuestion: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.NiceBlack,
    fontWeight: 'bold',
  },
  txtLabelAnswer: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.NiceBlack,
  },
  txtLabelSwitch: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.NiceBlack,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 20,
    marginRight: 20,
  },
  iconMyProfile: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
  learnMoreButton: {
    width: 300,
    color: theme.Color.DarkBlue,
    marginLeft: 250,
    textAlign: 'center',
    alignSelf: 'center',

  },

});

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
  textArea: {
    marginTop: 10,
    width: '100%',
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
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },

  inStepSubmitClaim: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },
  groupItemsViewToggle: {
    marginTop: 10,
    marginBottom: 10,
    height: 60,
  },

  txtLabelExpense: {
    fontSize: theme.Size.FontBigger,
    color: theme.Color.NiceBlack,
  },

  ImageCapture: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    flex: 4,
    justifyContent: 'center',
    alignContent: 'center',
  },

  button: {
    alignItems: 'center',
  },

  switchContain: {
    flexDirection: 'row',
  },

  checkBoxContain: {
    justifyContent: 'center',
    width: '100%',
    marginLeft: -5,
  },
  isCheckBox: {
    justifyContent: 'center',
    width: '100%',
    alignContent: 'center',
  },
  txtLabelSubmitTitle: {
    fontSize: theme.Size.FontBigger,
    color: theme.Color.NiceBlack,
  },

  buttonConfirm: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '100%',
    height: 50,
    alignSelf: 'center',

  },

  buttonEdit: {
    marginTop: 20,
    width: '100%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: theme.Color.LightBlue,
    borderColor: theme.Color.LightBlue,
  },

  switchContainer: {
    flex: 1,
    backgroundColor: theme.Color.White,
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  iconBuySubmitClaim: {
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

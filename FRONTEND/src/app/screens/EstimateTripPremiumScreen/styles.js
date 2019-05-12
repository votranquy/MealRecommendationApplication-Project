import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.LightBlue,
  },
  titleContainer: {
    flexDirection: 'row',
    borderBottomColor: theme.Color.Gray,
    borderBottomWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
  },

  ctnEstimateTripHeader: {
    height: 200,
    justifyContent: 'center',
  },

  txtMyEstimateTripText: {
    fontSize: theme.Size.FontHuger,
    alignSelf: 'center',
    color: theme.Color.White,
  },
  textArea: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 100,
    justifyContent: 'flex-start',
  },

  containerForm: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: theme.Color.LightBlue,
    flexDirection: 'column',
  },

  divider: {
    borderBottomColor: theme.Color.Divider,
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  groupItemsTitle: {
    flex: 1,
    marginTop: 10,
    backgroundColor: theme.Color.LightBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  groupItemsForm: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-evenly',
  },
  groupFormExpense: {
    flexDirection: 'row',
  },
  itemExpense: {
    width: '100%',
    height: 50,
    backgroundColor: theme.Color.DarkYellow,
    borderColor: theme.Color.DarkYellow,
  },

  groupItemsFormEnd: {
    flexDirection: 'row',
  },
  iconBlankContainer: {
    flex: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 3,
    justifyContent: 'flex-end',
  },
  iconBlankContainerEnd: {
    flex: 0.5,
    marginLeft: 10,
    flexDirection: 'row',
    paddingHorizontal: 3,
    justifyContent: 'flex-end',
  },
  iconBlank: {
    marginTop: 2,
  },
  iconStepContainer: {
    flex: 0.5,
    flexDirection: 'row',
    marginLeft: 10,
    paddingHorizontal: 1,
    justifyContent: 'flex-end',
  },
  iconStep: {
    marginTop: 2,
  },
  nameAddressContainer: {
    flex: 5,
    flexDirection: 'row',
  },
  nameViewContainer: {
    flex: 5,
    flexDirection: 'row',
  },
  stepViewContainer: {
    flex: 6,
    flexDirection: 'row',
  },
  nameCountry: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.White,
    marginLeft: 10,
  },
  nameDestination: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.DarkYellow,
    marginLeft: 10,
  },
  clearBoxContainer: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  clearBox: {
    width: 1,
    height: 30,
    marginLeft: 24,
    backgroundColor: theme.Color.White,
  },

  viewDropDownBank: {
    width: 180,
    height: 50,
    marginTop: -15,
    marginLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: theme.Color.White,
    borderColor: theme.Color.White,
  },

  viewStep: {
    width: 90,
    height: 45,
    borderRadius: 0,
    borderWidth: 1,
    marginRight: 5,
    justifyContent: 'space-between',
    backgroundColor: theme.Color.DarkBlue,
    borderColor: theme.Color.DarkBlue,
  },
  viewEndEstimate: {
    width: '100%',
    height: 45,
    borderRadius: 0,
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.Color.DarkYellow,
    borderColor: theme.Color.DarkYellow,
  },
  viewEndDestination: {
    width: '100%',
    height: 50,
    borderRadius: 0,
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.Color.DarkBlue,
    borderColor: theme.Color.DarkBlue,
  },
  viewDateTimePicker: {
    marginTop: -15,
    marginLeft: 10,
  },
  viewDateTimePickerEnd: {
    marginTop: -15,
    marginRight: 25,
  },
  containerDD: {
    marginTop: -20,
    marginLeft: 10,
  },
  InputDD: {
    borderBottomColor: theme.Color.White,
  },
  viewBodyExpense: {
  },

  inStepSubmitClaim: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
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
  txtLabelTitle: {
    fontSize: theme.Size.FontBig,
    color: theme.Color.White,
    alignSelf: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  txtLabelStep: {
    flex: 1,
    fontSize: theme.Size.FontMedium,
    color: theme.Color.White,
    alignSelf: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  txtLabelDollar: {
    fontSize: theme.Size.FontSmallest,
    color: theme.Color.White,
    justifyContent: 'space-evenly',
    textAlign: 'center',
    marginTop: 10,
  },
  txtTestText: {
    fontSize: theme.Size.FontBig,
    color: theme.Color.White,
    paddingLeft: 20,
    textAlign: 'left',
  },
  txtDailyPremium: {
    fontSize: theme.Size.FontBig,
    color: theme.Color.White,
  },
  txtTitleDailyPremium: {
    paddingLeft: 20,
  },
  txtLabelPremiumEstimate: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.White,
    alignContent: 'flex-end',
    marginRight: 20,
    marginTop: 10,
  },
  ctnContentPremium: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#21a7dc',
  },
  ctnLeftPremium: {
    width: '15%',
    alignItems: 'center',
  },
  txtWhiteLeftHuge: {
    fontSize: theme.Size.FontHuge,
    color: theme.Color.White,
  },
  txtRightTitlePremium: {
    fontSize: theme.Size.FontSmall,
    color: theme.Color.White,
    fontWeight: 'bold',
  },
  txtWhiteLeftHugest: {
    fontSize: theme.Size.FontHugest,
    color: theme.Color.White,
  },
  txtWhiteLeftSmaller: {
    fontSize: theme.Size.FontSmaller,
    color: theme.Color.White,
  },
  txtWhiteLeftBoldBig: {
    fontSize: theme.Size.FontBig,
    color: theme.Color.White,
    fontWeight: 'bold',
  },
  txtLabelDestination: {
    fontSize: theme.Size.FontSmall,
    color: theme.Color.White,
    alignContent: 'flex-start',
    marginTop: 10,
  },
  ctnMiddlePremium: {
    width: '60%',
    marginHorizontal: 10,
  },

  iconEstimateAdd: {
    alignContent: 'flex-end',
    justifyContent: 'space-evenly',
    marginRight: 20,
    marginTop: 10,
  },
  iconDestination: {
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',
    marginLeft: 20,
    marginTop: 10,
  },
  viewItemQuestion: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txtLabelQuestion: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.DarkBlue,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  txtLabelAnswer: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.NiceBlack,
  },

  iconEstimateTrip: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

});

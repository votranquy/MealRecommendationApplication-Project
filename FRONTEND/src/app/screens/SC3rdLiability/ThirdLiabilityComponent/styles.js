import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.Test1,
  },
  contentDetailSoD: {
    marginLeft: 50,
    marginTop: 20,
  },
  txtTitle: {
    fontFamily: theme.Font.SemiBold,
    fontSize: theme.Size.FontBiggest,
    color: theme.Color.Black,
  },
  txtDetail: {
    fontFamily: theme.Font.Regular,
    fontSize: theme.Size.FontSmallest,
    color: theme.Color.Black,
    marginTop: 10,
  },
  txtQuestionClaim: {
    fontFamily: theme.Font.Regular,
    fontSize: theme.Size.FontBig,
    color: '#1883D7',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#1883D7',
    width: 280,
    marginTop: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctnItem: {
    marginTop: 15,
  },
  txtItem: {
    fontFamily: theme.Font.SemiBold,
    fontSize: theme.Size.FontSmallest,
    color: theme.Color.Black,
  },
  ddTrip: {
    width: 280,
    height: 40,
    marginTop: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: theme.Color.Gray,
  },
  ddMoneyClaim: {
    width: 70,
    height: 40,
    marginTop: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: theme.Color.Gray,
  },
  ctnPhotoText: {
    marginTop: 10,
    width: 250,
    flex: 1,
    flexDirection: 'row',
  },
  txtPhoto: {
    color: '#1883D7',
    fontSize: theme.Size.FontSmallest,
    justifyContent: 'flex-start',
  },
  btnNextSoD: {
    marginTop: 10,
    height: 30,
    width: 280,
  },
  ctnScrollView: {
    marginTop: 10,
  },
  ctnDD: {
    marginTop: -25,
    marginLeft: 10,
  },
  btnGroup: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#1883D7',
    width: 120,
  },
  ctnBtnGroup: {
    height: 30,
    borderColor: theme.Color.White,
  },
  txtBtnGroup: {
    color: '#1883D7',
  },
  ctnDDMoney: {
    flex: 1,
    flexDirection: 'row',
  },
  ddMoney: {
    marginTop: -25,
    marginLeft: 10,
    width: 50,
  },
  TxInputMoney: {
    height: 40,
    width: 190,
    marginLeft: 20,
    marginTop: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: theme.Color.Gray,
  },
  InputDD: {
    borderBottomColor: theme.Color.White,
  },
  datepickerContainer: {
    width: 280,
    height: 40,
    marginTop: 10,
  },
  textareaContainer: {
    marginTop: 10,
    fontSize: 10,
    width: 280,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: theme.Color.Gray,
    height: 60,
    padding: 5,
  },
});

import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  ctnMyTripHeader: {
    height: 200,
    backgroundColor: theme.Color.LightBlue,
  },
  iconEarth: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
  iconMSIG: {
    position: 'relative',
    alignSelf: 'center',
    top: 10,
    right: 40,
  },
  txtTitleScreen: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
    marginTop: 5,
  },

  txtJanTrip: {
    fontSize: theme.Size.FontBigger,
    color: theme.Color.Black,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },

  txtPastTrip: {
    fontSize: theme.Size.FontBigger,
    color: theme.Color.Black,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  txtPolicyText2: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.White,
    alignSelf: 'center',
  },

  iconTitleScreen: {
    height: 25,
    width: 25,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  txtDateFrom: {
    color: theme.Color.DarkGray,
    fontSize: theme.Size.FontMedium,
  },
  txtDateTo: {
    color: theme.Color.Black,
    fontSize: theme.Size.FontMedium,
  },
  iconArrowRight: {
    marginTop: 5,
    height: 10,
    width: 20,
  },

  address0Container: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  address1Container: {
    flexDirection: 'row',
  },
  iconAddressContainer: {
    height: 100,
  },
  iconAddress: {
    height: 100,
    marginBottom: 10,
  },
  iconBlankContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconBlank: {
    marginTop: 2,
  },
  nameAddressContainer: {
    flex: 5,
  },
  nameAddress: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontMedium,
    color: theme.Color.DarkGray,
    marginLeft: 10,
  },
  nameAddressLightBlue: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontMedium,
    color: theme.Color.LightBlue,
    marginLeft: 10,
  },
  dateAddressContainer: {
    flex: 3.5,
  },
  dateAddress: {
    fontSize: theme.Size.FontBig,
  },
  iconPowerOn: {
    height: 30,
    width: 30,
    marginTop: 2,
  },
  clearBoxContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  clearBox: {
    width: 2,
    height: 25,
    marginLeft: 49,
    backgroundColor: theme.Color.LightBlue,
  },

  totalPaidContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
  totalItemPastTrip: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  paidTitle: {
    flex: 8,
    marginLeft: 30,
    fontSize: theme.Size.FontBigger,
    fontWeight: 'bold',
  },
  txtContent: {
    fontSize: theme.Size.FontSmaller,
    color: theme.Color.Black,
    fontWeight: 'bold',
    flex: 8,
  },
  txtYourTrip: {
    fontSize: theme.Size.FontSmaller,
    color: theme.Color.Black,
    fontWeight: 'bold',
    flex: 8,
    marginLeft: 25,
  },
  paidValue: {
    flex: 2,
    fontSize: theme.Size.FontBigger,
    fontWeight: 'bold',
  },
  paidValueList: {
    flex: 2,
    fontSize: theme.Size.FontBigger,
    color: theme.Color.DarkGray,
    fontWeight: 'bold',
  },
  terminated: {
    flexDirection: 'row',
  },
  terminatedText: {
    fontSize: theme.Size.FontMedium,
    textAlign: 'right',
    marginLeft: 20,
    marginRight: 20,
    fontWeight: 'bold',
    flex: 0.95,
  },
  txtEndCoverage: {
    fontSize: theme.Size.FontMedium,
    textAlign: 'right',
    marginLeft: 20,
    marginRight: 20,
    color: theme.Color.LightBlue,
    flex: 0.95,
  },
  btnClaimMain: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
  btnClaimStyle: {
    color: theme.Color.Blue,
    backgroundColor: theme.Color.White,
    borderWidth: 1,
    borderColor: theme.Color.Blue,
    borderRadius: 2,
    paddingLeft: 10,
    width: 200,
    height: 50,
    textAlign: 'center',
    paddingRight: 10,
  },
  btnClaimText: {
    flexDirection: 'row',
  },
  btnNaviga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  newerContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: theme.Color.FooterButtonNaviga,
  },
  olderContain: {
    flex: 0.5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: theme.Color.FooterButtonNaviga,
  },
  newer: {
    color: theme.Color.White,
  },
  older: {
    textAlign: 'right',
    color: theme.Color.White,
  },
  iconNavFooter: {
    height: 10,
  },

  buttonCoverage: {
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: theme.Color.White,
    borderColor: theme.Color.LightBlue,
    color: theme.Color.LightBlue,
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    fontSize: theme.Size.FontSmall,
  },

  textStyleButton: {
    color: theme.Color.LightBlue,
  },

  borderPastTrip: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'center',
  },

});

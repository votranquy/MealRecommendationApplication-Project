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
  ctnLoginHeader: {
    height: 200,
    backgroundColor: theme.Color.LightBlue,
  },
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1,
    fontSize: 9,
    letterSpacing: 2,
  },
  iconLock: {
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
    flex: 0.5,
    textAlign: 'right',
    color: theme.Color.White,
    fontSize: theme.Size.FontBig,
  },
  txtDateTo: {
    flex: 0.5,
    color: theme.Color.White,
    fontSize: theme.Size.FontBig,
    textAlign: 'left',
  },
  iconArrowRight: {
    marginTop: 10,
    height: 10,
    width: 30,
  },

  scheduleItemCOntainer: {
    marginTop: 30,
  },
  address0Container: {
    flexDirection: 'row',
    paddingTop: 30,
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
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontBig,
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
  paidTitle: {
    flex: 8,
    marginLeft: 30,
    fontSize: theme.Size.FontBigger,
    fontFamily: theme.Font.Bold,
  },
  paidValue: {
    flex: 2,
    fontSize: theme.Size.FontBigger,
    fontFamily: theme.Font.Bold,
  },
  terminated: {
    flexDirection: 'row',
  },
  terminatedText: {
    fontSize: theme.Size.FontMedium,
    textAlign: 'right',
    fontFamily: theme.Font.Bold,
    flex: 0.95,
  },
  btnClaimMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnClaimStyle: {
    paddingLeft: 60,
    paddingRight: 60,
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
});

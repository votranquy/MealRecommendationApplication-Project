import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../theme';

const maxHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  ctnPageOne: {
    backgroundColor: theme.Color.LightBlue,
  },
  ctnPageTwo: {
    backgroundColor: theme.Color.Test7,
  },
  imgAirPlane: {
    padding: theme.Size.LayoutBig,
    alignSelf: 'center',
  },
  txtAutomaticCoverage: {
    padding: theme.Size.LayoutBig,
    fontSize: theme.Size.FontBiggest,
    textAlign: 'center',
    color: theme.Color.Test6,
  },
  txtAutomaticCoverageDetail: {
    padding: theme.Size.LayoutBig,
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.Color.White,
    fontSize: theme.Size.FontMedium,
  },
  imgMoneyCloud: {
    padding: theme.Size.LayoutBig,
    alignSelf: 'center',
  },


  ctnHowDoes: {
    padding: theme.Size.LayoutBiggest,
    flex: 1,
  },
  ctnStep: {
    flexDirection: 'row',
    padding: theme.Size.LayoutSmallest,
  },
  imgStep: {
    width: 60,
    height: 60,
    alignItems: 'flex-end',
  },
  imgThreeDot: {
    marginLeft: 15,
    width: 30,
    height: 30,
    alignItems: 'flex-end',
  },
  txtStep: {
    flex: 1,
    paddingLeft: theme.Size.LayoutBig,
    textAlignVertical: 'center',
    color: theme.Color.White,
    fontSize: theme.Size.FontMedium,
  },


  ctnSimpleClaims: {
    padding: theme.Size.LayoutBiggest,
    flex: 1,
    backgroundColor: theme.Color.LightBlue,
  },

  ctnPageThree: {
    flex: 1,
    backgroundColor: theme.Color.Blue,
  },
  ctnCoverdDetailTable: {
    flex: 1,
    padding: theme.Size.LayoutBigger,
  },
  ctnCoverdDetailRow: {
    flexDirection: 'row',
  },
  txtDescription: {
    flex: 2,
    borderWidth: 1,
    color: theme.Color.White,
    borderColor: theme.Color.White,
    textAlignVertical: 'center',
    padding: theme.Size.LayoutMedium,
  },
  txtPrice: {
    flex: 1,
    borderWidth: 1,
    color: theme.Color.White,
    borderColor: theme.Color.White,
    textAlign: 'right',
    textAlignVertical: 'center',
    padding: theme.Size.LayoutMedium,
  },
  ctnCoverageMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.Size.LayoutBiggest,
  },

  txtCoverageMore: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.White,
  },

  txtCoverageMoreLink: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Test8,
    textDecorationLine: 'underline',
  },

  ctnHowBeCharge: {
    flex: 1,
    backgroundColor: theme.Color.LightBlue,
  },
  txtHowBeCharge: {
    padding: theme.Size.LayoutBig,
    fontSize: theme.Size.FontBiggest,
    textAlign: 'center',
    color: theme.Color.Test6,
  },
  txtHowBeChargeDetail: {
    padding: theme.Size.LayoutBig,
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.Color.White,
    fontSize: theme.Size.FontMedium,
  },

  ctnChargeOption: {
    flex: 1,
    padding: theme.Size.FontBig,
    flexDirection: 'row',
  },
  ctnChargeImage: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imgChargeOption: {
    flex: 1,

  },
  ctnOptionDetail: {
    flex: 2,
    textAlignVertical: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  txtOptionDetail1: {
    color: theme.Color.Red,
  },
  txtOptionDetail2: {

  },

  ctnCharge: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.Size.LayoutMedium,
  },

  txtCharge: {
    height: 40,
    textAlignVertical: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: theme.Color.Blue,

  },

});

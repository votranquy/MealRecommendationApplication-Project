import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1,
    fontSize: 9,
    letterSpacing: 2,
  },
  iconMSIG: {
    position: 'relative',
    alignSelf: 'center',
    top: 10,
    right: 40,
  },
  ctnMyClaimHeader: {
    height: 200,
    backgroundColor: '#ffb100',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },
  txtMyClaimText1: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  iconBuyMyClaim: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
  stepIndicatorMain: {
    marginTop: -14,
  },
  contentContainer: {
    paddingLeft: 30,
    paddingRight: 10,
  },
  titleQuestion: {
    fontSize: theme.Size.FontHuge,
    fontWeight: '400',
    marginTop: 10,
    color: theme.Color.Black,
  },
  titleFlight: {
    fontSize: theme.Size.FontBig,
    color: theme.Color.Green,
    marginTop: 25,
  },
  textChange: {
    fontSize: theme.Size.FontSmaller,
    color: theme.Color.Blue,
  },
  titleQsHappen: {
    fontSize: theme.Size.FontBigger,
    marginTop: 20,
    color: theme.Color.Black,
    fontWeight: '400',
  },
  itemReason: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: theme.Size.FontBig,
  },
  selected: {
    color: theme.Color.Green,
  },
  unselected: {
    color: theme.Color.Blue,
  },
  iconItemReason: {
    width: 0,
    height: 0,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonNext: {
    backgroundColor: theme.Color.ButtonBackground,
    marginTop: 30,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 30,
    marginRight: 30,
    flex: 1,
    fontSize: theme.Size.FontMedium,
    fontWeight: '600',
  },
});

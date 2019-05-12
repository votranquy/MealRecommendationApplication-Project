import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  ctnBGLightBlue: {
    backgroundColor: '#43bcdb',
    paddingBottom: 10,
  },

  ctnBGMoreLightBlue: {
    backgroundColor: '#69c9e1',
    paddingBottom: 10,
  },

  ctnBGBlue: {
    backgroundColor: '#109cda',
    paddingBottom: 10,
  },

  ctnPaddingBottom10: {
    paddingBottom: 10,
  },

  ctnItemsMiddle: {
    alignSelf: 'center',
  },

  txtTitle: {
    marginTop: 20,
    fontSize: theme.Size.FontBigger,
    color: theme.Color.DarkBlue,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  txtWhiteCenterNormal: {
    fontSize: theme.Size.FontSmall,
    color: theme.Color.White,
    textAlign: 'center',
  },

  imgDotted: {
    tintColor: 'white',
    width: 30,
    height: 30,
  },

  ctnMarginTop10: {
    marginTop: 10,
  },

  ctnMarginTop20: {
    marginTop: 20,
  },

  ctnMarginTop30: {
    marginTop: 30,
  },

  ctnPaddingHorizontal5: {
    paddingHorizontal: 5,
  },

  ctnPaddingHorizontal20: {
    paddingHorizontal: 20,
  },

  ctnItemsRowGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  ctnItemsImage: {
    width: '25%',
    alignItems: 'center',
  },

  ctnItemsText: {
    width: '50%',
  },

  ctnMarginHorizontal20: {
    marginHorizontal: 20,
  },

  ctnLeftContentCovered: {
    borderWidth: 1,
    borderColor: theme.Color.White,
    width: '65%',
  },

  ctnRightContentCovered: {
    borderWidth: 1,
    borderColor: theme.Color.White,
    width: '35%',
  },

  txtWhiteLeftContent: {
    color: theme.Color.White,
    marginHorizontal: 10,
    marginVertical: 5,
  },

  imageIconCloud: {
    width: '100%',
  },


  ctnItemsGroupCharged: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginVertical: 20,
    justifyContent: 'space-between',
  },

  ctnLeftCharged: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: '#ffb100',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  imgExpandableView: {
    tintColor: theme.Color.White,
  },

  ctnMiddleCharged: {
    width: '40%',
  },

  txtWhiteLeftHuge: {
    fontSize: theme.Size.FontHuge,
    color: theme.Color.White,
  },

  ctnRightCharged: {
    width: '40%',
    backgroundColor: '#0190de',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ctnBGDarkYellow: {
    backgroundColor: '#ffb100',
    paddingHorizontal: 20,
  },

  ctnContentPremium: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#21a7dc',
    justifyContent: 'center',
  },

  ctnMarginVertical20: {
    marginVertical: 20,
  },

  ctnLeftPremium: {
    width: '15%',
    alignItems: 'center',
  },

  ctnMiddlePremium: {
    width: '60%',
    marginHorizontal: 10,
  },

  ctnRightPremium: {
    width: '30%',
  },

  txtWhiteLeftHugest: {
    fontSize: theme.Size.FontHugest,
    color: theme.Color.White,
  },

  txtWhiteLeftBoldBig: {
    fontSize: theme.Size.FontBig,
    color: theme.Color.White,
    fontWeight: 'bold',
  },

  txtWhiteLeftSmaller: {
    fontSize: theme.Size.FontSmaller,
    color: theme.Color.White,
  },

  txtRightTitlePremium: {
    fontSize: theme.Size.FontSmall,
    color: theme.Color.White,
    fontWeight: 'bold',
  },

  ctnButtonFooter: {
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: 0,
    padding: 10,
    backgroundColor: '#3f83fe',
    flexDirection: 'row',
  },

  txtWhiteBoldNormal: {
    fontSize: theme.Size.FontSmall,
    color: theme.Color.White,
    fontWeight: 'bold',
  },

  txtWhiteLeftNormal: {
    fontSize: theme.Size.FontSmall,
    color: theme.Color.White,
    paddingHorizontal: 3,
    paddingVertical: 3,
  },

  txtWhiteRightBoldNormal: {
    fontSize: theme.Size.FontSmall,
    color: theme.Color.White,
    textAlign: 'right',
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontWeight: 'bold',
  },

  txtWhiteMiddleBoldNormal: {
    color: theme.Color.White,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  txtWhiteMiddleBoldUnderline: {
    color: 'yellow',
    marginHorizontal: 10,
    marginVertical: 5,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },

  imgIconWhite: {
    tintColor: theme.Color.White,
  },

  ctnAutoTop: {
    alignSelf: 'flex-end',
    position: 'absolute',
    zIndex: 1,
    top: '60%',
    backgroundColor: 'yellow',
  },
});

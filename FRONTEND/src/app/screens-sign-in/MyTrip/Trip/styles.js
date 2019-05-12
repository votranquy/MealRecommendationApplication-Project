import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.Color.White,
    padding: theme.Size.LayoutBig,
  },

  txtJanTrip: {
    fontSize: theme.Size.FontBigger,
    color: theme.Color.Black,
    fontFamily: theme.Font.SemiBold,
    marginBottom: theme.Size.LayoutBig,
  },

  ctnStations: {
    marginBottom: theme.Size.LayoutHuge,
  },

  btnUnCoverage: {
    marginBottom: theme.Size.LayoutHuge,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: theme.Color.White,
    borderColor: theme.Color.Blue,
    borderWidth: theme.Size.ButtonBorderWidth,
    borderRadius: theme.Size.ButtonCorner,
    fontSize: theme.Size.FontSmall,
    height: theme.Size.LayoutHuge + theme.Size.LayoutSmall,
  },

  txtStyBtnUnCoverage: {
    color: theme.Color.Blue,
    fontSize: theme.Size.FontSmallest,
  },

  ctnQuotePrice: {
    flex: 1,
    flexDirection: 'row',
  },

  ctnNoteState: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  txtPremiumTrip: {
    flex: 1,
    justifyContent: 'flex-start',
    fontSize: theme.Size.FontSmaller,
  },

  txtPayTrip: {
    justifyContent: 'flex-end',
  },

  txtNote: {
    flex: 1,
    justifyContent: 'flex-start',
    fontSize: theme.Size.FontTiny,
  },

  btnEndCoverage: {
    justifyContent: 'flex-end',
    marginHorizontal: 0,
    height: theme.Size.LayoutBiggest,
  },

  txtEndCoverage: {
    fontSize: theme.Size.FontSmallest,
    color: theme.Color.Blue,
  },
});

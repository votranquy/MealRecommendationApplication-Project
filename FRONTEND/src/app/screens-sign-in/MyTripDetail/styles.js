import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  ctnContent: {
    flex: 1,
    backgroundColor: theme.Color.White,
    padding: theme.Size.LayoutBigger,
  },

  ctnStations: {
    backgroundColor: theme.Color.White,
    padding: theme.Size.LayoutSmall,
  },

  ctnTotalPrice: {
    marginTop: theme.Size.LayoutHuge + theme.Size.LayoutSmall,
  },

  ctnQuotePrice: {
    flex: 1,
    flexDirection: 'row',
  },

  txtTotalPrice: {
    flex: 1,
    justifyContent: 'flex-start',
    fontSize: theme.Size.FontSmaller,
  },

  txtPrice: {
    justifyContent: 'flex-end',
  },

  txtStatusTrip: {
    fontSize: theme.Size.FontSmallest, textAlign: 'right',
  },

  btnViewClaim: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: theme.Color.White,
    borderColor: theme.Color.Blue,
    borderWidth: theme.Size.ButtonBorderWidth,
    borderRadius: theme.Size.ButtonCorner,
    fontSize: theme.Size.FontSmall,
    height: theme.Size.LayoutHuge + theme.Size.LayoutSmall,
    marginVertical: theme.Size.LayoutBiggest,
    marginHorizontal: theme.Size.LayoutBiggest,
  },

  txtStyBtnViewClaim: {
    color: theme.Color.Blue,
    fontSize: theme.Size.FontSmallest,
  },

});

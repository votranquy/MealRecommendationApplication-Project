import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.LightGray,
  },
  ctnContent: {
    flex: 1,
    backgroundColor: theme.Color.LightGray,
  },

  ctnPastTrips: {
    backgroundColor: theme.Color.LightGray,
    padding: theme.Size.LayoutBig,
  },

  txtPastTrip: {
    textAlign: 'center',
    fontSize: theme.Size.FontBigger,
    fontFamily: theme.Font.Bold,
    color: theme.Color.Black,
  },
  txtBuyPolicy: {
    textAlign: 'right',
    color: theme.Color.White,
  },
});

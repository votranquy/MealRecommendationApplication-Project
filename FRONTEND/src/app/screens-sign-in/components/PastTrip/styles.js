import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: theme.Size.LayoutBig,
    backgroundColor: theme.Color.White,
    padding: theme.Size.LayoutBig,
  },

  ctnNamePrice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ctnDateState: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  txtPriceTrip: {
    color: theme.Color.MediumGray,
  },

  txtNameTrip: {
    width: '50%',
    fontSize: theme.Size.FontSmaller,
  },

  txtDateTrip: {
    fontSize: theme.Size.FontTiny,
    color: theme.Color.Gray,
  },

  txtState: {
    fontSize: theme.Size.FontSmallest,
  },
});

import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.Color.White,
  },

  ctnTripDetail: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: theme.Size.LayoutBig,
  },

  ctnLocation: {
    flex: 1,
    flexDirection: 'row',
  },

  txtLocation: {
    fontSize: theme.Size.FontSmallest,
    marginLeft: theme.Size.LayoutMedium,
  },

  txtColorLocation: {
    fontSize: theme.Size.FontSmallest,
    marginLeft: theme.Size.LayoutMedium,
    color: theme.Color.LightBlue,
  },

  txtArrivalDate: {
    fontSize: theme.Size.FontSmallest,
    justifyContent: 'flex-end',
  },

  txtColorArrivalDate: {
    fontSize: theme.Size.FontSmallest,
    justifyContent: 'flex-end',
    color: theme.Color.LightBlue,
  },
});

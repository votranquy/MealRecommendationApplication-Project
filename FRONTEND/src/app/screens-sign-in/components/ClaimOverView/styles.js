import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    margin: theme.Size.LayoutBiggest,
    borderWidth: 1,
    borderColor: theme.Color.LightGray,
    borderRadius: theme.Size.LayoutSmall,
    backgroundColor: theme.Color.White,
  },

  ctnHeaderItemForm: {
    paddingHorizontal: theme.Size.LayoutBig,
    backgroundColor: theme.Color.LightGray,
    height: theme.Size.LayoutHuger,
    alignItems: 'center',
    flexDirection: 'row',
    borderTopLeftRadius: theme.Size.LayoutSmall,
    borderTopRightRadius: theme.Size.LayoutSmall,
  },

  txtHeaderForm: {
    fontWeight: 'bold',
  },

  ctnMainItemRightForm: {
    flex: 1,
  },

  ctnMainItemForm: {
    paddingHorizontal: theme.Size.LayoutBig,
    paddingVertical: theme.Size.LayoutBig,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: theme.Color.LightGray,
  },

  txtMainLeftForm: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontMedium,
    flex: 2,
  },

  ctnMainRightForm: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  txtMainRightTopForm: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontBig,
    color: theme.Color.Green,
  },

  txtMainRightBottomForm: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontMedium,
    paddingRight: theme.Size.LayoutSmall,
  },

  imgIconForm: {
    tintColor: theme.Color.Black,
  },

  txtMainTripForm: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: theme.Size.FontSmaller,
    height: theme.Size.LayoutHuger,
    borderWidth: 0.5,
    borderColor: theme.Color.LightGray,
    paddingHorizontal: theme.Size.LayoutBig,
  },

});

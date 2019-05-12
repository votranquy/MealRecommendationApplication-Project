import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
  },

  titleContainer: {
    flexDirection: 'row',
    borderBottomColor: theme.Color.Gray,
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },

  title: {
    color: theme.Color.DarkestGray,
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontMedium,
    marginRight: theme.Size.LayoutHuge,
  },

  btnImage: {
    marginLeft: 'auto',
    paddingLeft: theme.Size.LayoutMedium,
    tintColor: theme.Color.Gray,
  },

  txtRemoveButton: {
    fontSize: theme.Size.FontSmallest,
    fontFamily: theme.Font.Bold,
  },

  body: {

  },
});

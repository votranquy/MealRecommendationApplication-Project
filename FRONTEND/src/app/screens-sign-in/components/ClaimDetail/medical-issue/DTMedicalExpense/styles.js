import { StyleSheet } from 'react-native';
import theme from '../../../../../../theme';

export default StyleSheet.create({
  container: {
    marginHorizontal: theme.Size.LayoutHuger,
  },

  txtTitleItem: {
    fontWeight: 'bold',
    paddingTop: theme.Size.LayoutMedium,
  },

  expenseItems: {
    marginBottom: theme.Size.LayoutBig,
  },

  txtExpense: {
    fontSize: theme.Size.FontBig,
    fontWeight: 'bold',
  },

  txtContent: {
    fontSize: theme.Size.FontSmall,
    marginBottom: theme.Size.LayoutMedium,
  },

  epvExpense: {
    height: theme.Size.LayoutHuger,
  },

  ctnImage: {
    flex: 1,
    height: 80,
    marginHorizontal: theme.Size.LayoutSmall,
    marginVertical: theme.Size.LayoutSmall,
    borderWidth: 0.3,
    borderColor: theme.Color.Gray,
  },

  ctnDashedBorder: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: theme.Color.NearWhite,
  },

  imgContent: {
    width: '100%',
    resizeMode: 'contain',
  },

  ctnImageItem: {
    flexDirection: 'row',
  },
});

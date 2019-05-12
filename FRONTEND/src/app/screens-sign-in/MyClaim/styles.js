import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.Background,
  },

  ctnFilter: {
    paddingTop: theme.Size.LayoutBiggest,
    paddingHorizontal: theme.Size.LayoutBiggest,
    flexDirection: 'row',
    textAlign: 'center',
    alignSelf: 'center',
  },

  txtFilter: {
    fontWeight: 'bold',
    marginRight: theme.Size.LayoutSmall,
    alignSelf: 'center',
  },

  btnFilter: {
    marginLeft: theme.Size.LayoutSmall,
    marginRight: theme.Size.LayoutSmall,
    backgroundColor: theme.Color.Blue,
    color: theme.Color.Blue,
    paddingLeft: theme.Size.LayoutMedium,
    paddingRight: theme.Size.LayoutMedium,
    height: theme.Size.LayoutHuger,
    width: 'auto',
  },

  btnSubmit: {
    ...theme.Style.DefaultButton,
    marginTop: theme.Size.LayoutBiggest,
    width: '100%',
    borderRadius: 0,
    backgroundColor: theme.Color.Blue,
    color: theme.Color.Blue,
  },

  ctnSubmit: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: theme.Size.LayoutBig,
  },

  txtSubmit: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontSmall,
    color: 'white',
    alignSelf: 'center',
  },

  imgSubmit: {
    alignSelf: 'center',
    tintColor: 'white',
  },
});

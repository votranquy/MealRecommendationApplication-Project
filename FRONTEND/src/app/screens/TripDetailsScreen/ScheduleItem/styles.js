import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.Test1,
  },
  address1Container: {
    flexDirection: 'row',
  },
  iconAddressContainer: {
    height: 100,
  },
  iconAddress: {
    height: 100,
    marginBottom: 10,
  },
  iconBlankContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconBlank: {
    marginTop: 2,
  },
  nameAddressContainer: {
    flex: 5,
  },
  nameAddress: {
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontBig,
    marginLeft: 10,
  },
  dateAddressContainer: {
    flex: 3.5,
  },
  dateAddress: {
    fontSize: theme.Size.FontBig,
  },
  iconPowerOn: {
    height: 30,
    width: 30,
    marginTop: 2,
  },
  clearBoxContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  inactive: {
    width: 0,
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  clearBox: {
    width: 2,
    height: 25,
    marginLeft: 49,
    backgroundColor: theme.Color.LightBlue,
  },
  iconArrowRight: {
    marginTop: 10,
    height: 10,
    width: 30,
  },

  address0Container: {
    flexDirection: 'row',
    paddingTop: 30,
  },
});

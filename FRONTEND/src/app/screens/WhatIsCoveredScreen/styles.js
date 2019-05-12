import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1,
    fontSize: 9,
    letterSpacing: 2,
  },
  ctnHeader: {
    height: 200,
    backgroundColor: theme.Color.WhatIsCoveredHeader,
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  icoWhatIsCovered: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  btnHowMuchText: {
    flex: 1,
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontMedium,
    color: theme.Color.Blue,
    textAlign: 'center',
  },

  btnBorder: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: theme.Color.White,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: theme.Color.White,
    borderTopWidth: 0.5,
    borderTopColor: theme.Color.Gray,
  },

  groupItemsForm: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  expHeader: {
    color: theme.Color.Blue,
  },

  expContent: {
    flexDirection: 'row',
    borderTopColor: theme.Color.Gray,
    borderTopWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
  },

  txtContentLeft: {
    flex: 7,
    fontSize: theme.Size.FontMedium,
    color: theme.Color.DarkestGray,
  },

  txtContentRight: {
    flex: 3,
    textAlign: 'right',
    color: theme.Color.NiceBlack,
    fontSize: theme.Size.FontMedium,
    fontFamily: theme.Font.Bold,
  },

  btnContainer: {
    backgroundColor: theme.Color.Test1,
  },

  showMoreButtonTextContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
    borderTopColor: theme.Color.Gray,
    borderTopWidth: 0.5,
  },

  showMoreButtonText: {
    flex: 1,
    color: theme.Color.Blue,
    fontSize: theme.Size.FontSmall,
    fontFamily: theme.Font.Bold,
  },

});

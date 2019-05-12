import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  buttonHowMuchText: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontSmaller,
    color: '#4184ff',
  },

  btnBorderBlue: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: theme.Color.White,
    color: theme.Color.White,
    borderWidth: 1,
    borderColor: '#4184ff',
  },

  ctnTitleExpand: {
    height: 40,
  },

  ctnHeader: {
    backgroundColor: theme.Color.LightBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },

  txtHeader: {
    color: theme.Color.White,
    fontSize: theme.Size.FontBigger,
    fontWeight: 'bold',
  },

  imgHeader: {
    tintColor: theme.Color.White,
  },

  groupItemsForm: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  togHeader: {
    color: '#4184ff',
  },

  ctnContent: {
    flexDirection: 'row',
    marginTop: 10,
  },

  txtContentLeft: {
    width: '70%',
  },

  txtContentRight: {
    width: '30%',
    textAlign: 'right',
    fontWeight: 'bold',
    color: 'blue',
  },

  txtContentRightInView: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: 'blue',
  },

  txtContentRightTextInView: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'blue',
  },

  ctnContentRight: {
    width: '30%',
  },

  txtContentLeftGray: {
    width: '70%',
    color: '#aaaaaa',
  },

  txtContentRightGray: {
    width: '30%',
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#aaaaaa',
  },

  txtContentRightText: {
    width: '30%',
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'blue',
  },

  btnGroupItemsBot: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },

});

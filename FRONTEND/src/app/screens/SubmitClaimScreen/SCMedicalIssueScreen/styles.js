import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  ctnMedicalIssueHeader: {
    height: 200,
    backgroundColor: '#ffb100',
    justifyContent: 'center',
  },

  txtMedicalIssueText1: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },

  containerForm: {
    flex: 1,
    backgroundColor: theme.Color.White,
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },

  inStepMedicalIssue: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },

  textTitle: {
    fontSize: theme.Size.FontHuger,
    fontWeight: 'bold',
  },

  iconBuyMedicalIssue: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  changeButton: {
    color: '#4184ff',
    marginTop: -20,
    marginLeft: -10,
    alignSelf: 'flex-start',
  },

  containerTitle: {
    flexDirection: 'row',
    marginTop: 10,
  },

  textSubTitle: {
    fontSize: theme.Size.FontMedium,
    fontWeight: 'bold',
    color: '#96c86c',
    width: '80%',
  },

  textSubType: {
    fontSize: theme.Size.FontMedium,
    color: '#4184ff',
    width: '80%',
  },

  textType: {
    fontSize: theme.Size.FontMedium,
    fontWeight: 'bold',
  },

  containerType: {
    backgroundColor: theme.Color.White,
    flexDirection: 'column',
    marginLeft: 20,
  },

  imageIconType: {
    height: 20,
    width: 20,
    marginLeft: 10,
    tintColor: '#96c86c',
  },

  imageIconTitle: {
    height: 30,
    width: 30,
    marginLeft: 10,
    tintColor: '#96c86c',
  },

  buttonNext: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
  },

  containerButtonNext: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
});

import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  containerHeader: {
    height: 200,
    backgroundColor: '#ffb100',
    justifyContent: 'center',
  },

  iconHeader: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  LblHeaderTitle: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },

  inStepIndicator: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },

  containerBody: {
    flex: 1,
    backgroundColor: theme.Color.White,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  txtCauseTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  containerCauseItem: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },

  txtCauseItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#96c86c',
  },

  txtChangeButton: {
    fontSize: 16,
    color: '#4184ff',
  },

  causeDetailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },

  containerCauseDetails: {
    backgroundColor: theme.Color.White,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
  },

  containerIssue: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },

  txtCheckedIssue: {
    fontSize: 18,
    color: '#96c86c',
    marginTop: 15,
  },

  txtUncheckedIssue: {
    fontSize: 18,
    color: '#4184ff',
    paddingTop: 15,
  },

  iconChecked: {
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
    marginTop: 40,
  },
});

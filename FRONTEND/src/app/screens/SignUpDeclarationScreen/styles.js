import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  ctnPolicyHeader: {
    height: 200,
    backgroundColor: theme.Color.LightBlue,
  },

  txtHeaderTitle: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  txtHeaderDescription: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.White,
    alignSelf: 'center',
  },

  containerForm: {
    flex: 1,
    backgroundColor: theme.Color.White,
    flexDirection: 'column',
  },

  inStepPolicy: {
    marginTop: 20,
  },
  sectionTitle: {
    flex: 1,
    backgroundColor: theme.Color.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderBottomColor: theme.Color.Gray,
    borderBottomWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
  },
  txtTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  groupItemsForm: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  txtLabel: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  edtInput: {
    marginTop: 10,
  },
  txtStatement: {
    height: 150,
  },
  buttonNext: {
    ...theme.Style.DefaultButton,
    width: '100%',
    alignSelf: 'center',
  },
  iconBuyPolicy: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
  iconEdit: {
    height: 15,
    width: 15,
  },
  progressCurrent: {
    color: '#000000',
    borderColor: '#8BC35C',
  },
  learnMoreButton: {
    width: 300,
    color: theme.Color.LightBlue,
    marginLeft: 250,
    textAlign: 'center',
    alignSelf: 'center',

  },
});

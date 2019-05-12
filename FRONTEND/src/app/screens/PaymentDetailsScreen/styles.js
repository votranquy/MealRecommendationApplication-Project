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

  txtPolicyText1: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  txtPolicyText2: {
    fontSize: theme.Size.FontMedium,
    color: theme.Color.White,
    alignSelf: 'center',
  },

  iconBuyPolicy: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  containerForm: {
    flex: 1,
    backgroundColor: theme.Color.White,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
  },

  inStepPolicy: {
    marginTop: 20,
  },

  titleContainer: {
    marginTop: 20,
    paddingBottom: 10,
    borderBottomColor: theme.Color.BorderBottomTitle,
    borderBottomWidth: 0.5,
  },
  titleDetails: {
    fontSize: theme.Size.FontBig,
    fontWeight: 'bold',
  },

  priceContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  titlePrice: {
    flex: 0.5,
    textAlign: 'left',
    fontSize: theme.Size.FontMedium,
  },
  valuePrice: {
    textAlign: 'right',
    flex: 0.5,
    fontSize: theme.Size.FontBig,
    fontWeight: 'bold',
  },

  noteContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  noteContent: {
    flex: 0.75,
    textAlign: 'left',
  },

  creditNumberContainer: {
    marginTop: 20,
  },
  expiryDateContainer: {
    flexDirection: 'row',
  },
  expiryMContainer: {
    flex: 0.5,
    marginRight: 0,
  },
  expiryYearContainer: {
    flex: 0.5,
  },

  confirmItem: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 0,
  },
  confirmCheckboxContainer: {
    marginLeft: 0,
    padding: 0,
  },
  confirmCheckbox: {
    flex: 0.1,
    marginLeft: 0,
    padding: 0,
    color: theme.Color.Green,
  },
  confirmTitle: {
    flex: 0.9,
    marginTop: 5,
  },

  groupItemsForm: {
    marginTop: 20,

  },

  buttonNextContainer: {
    alignContent: 'center',
    flex: 1,
  },

  buttonNext: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    alignSelf: 'center',
    width: '100%',
  },
  learnMoreButton: {
    color: theme.Color.Blue,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

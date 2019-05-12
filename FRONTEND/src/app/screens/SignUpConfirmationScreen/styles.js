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

  txtPolicyText3: {
    marginTop: 15,
    fontSize: theme.Size.FontBiggest,
    color: theme.Color.Green,
    alignSelf: 'center',
  },

  txtPolicyText4: {
    marginTop: 3,
    fontSize: theme.Size.FontBiggest,
    color: theme.Color.Green,
    alignSelf: 'center',
  },

  text2: {
    color: theme.Color.Red,
  },
  txtPolicyText5: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    fontSize: theme.Size.FontSmall,
    color: theme.Color.Black,
    alignSelf: 'center',
    textAlign: 'center',
  },

  containerForm: {
    flex: 1,
    backgroundColor: theme.Color.White,
    flexDirection: 'column',
  },

  groupItemsForm: {
    marginTop: 20,
  },
  buttonNext: {
    ...theme.Style.DefaultButton,
    marginTop: 10,
    width: 330,
    height: 50,
    alignSelf: 'center',
  },
  buttonTripEstimator: {
    ...theme.Style.DefaultButton,
    marginTop: 10,
    width: 330,
    height: 50,
    alignSelf: 'center',
    backgroundColor: theme.Color.White,
    borderColor: theme.Color.Blue,
    borderWidth: 1,
  },

  textBtnStyle: {
    color: theme.Color.Blue,
    fontSize: theme.Size.FontMedium,
  },

  buttonFAQ: {
    ...theme.Style.DefaultButton,
    marginTop: 10,
    width: 330,
    height: 50,
    alignSelf: 'center',
    backgroundColor: theme.Color.White,
    borderColor: theme.Color.Blue,
    borderWidth: 1,
  },
  iconBuyPolicy: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
});

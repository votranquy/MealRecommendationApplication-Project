import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  ctnSubmitClaimHeader: {
    height: 200,
    backgroundColor: '#ffb100',
    justifyContent: 'center',
  },

  txtSubmitClaimText1: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  txtSubmitClaimText2: {
    fontSize: theme.Size.FontMedium,
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

  inStepSubmitClaim: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },

  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  iconBuySubmitClaim: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  claimTypeStyleButton: {
  },
});

import { StyleSheet } from 'react-native';
import { yellow } from 'ansi-colors';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },

  submitClaim: {
    flex: 0.33,
    backgroundColor: theme.Color.TYellow,
  },

  titleText: {
    height: 70,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: theme.Size.FontHugest,
  },

  iconClaim: {
    padding: 45,
    marginTop: 20,
    marginBottom: 14,
    alignSelf: 'center',
  },

  titleClaimButton: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: theme.Size.FontBigger,
  },

  // Title Submit claim
  txtSuccess: {
    paddingTop: 25,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#00FF7F',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: theme.Size.FontHuger,
  },

  txtSubmited: {
    paddingTop: 15,
    marginTop: 9,
    width: 350,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: theme.Size.FontBiggest,
  },

  txtCheck: {
    paddingTop: 18,
    marginTop: 12,
    width: 350,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: theme.Size.FontBiggest,
  },

  infoText: {
    width: 350,
    height: 60,
    marginTop: 22,
    padding: 14,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'white',
    textAlignVertical: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 5,
    fontSize: theme.Size.FontBigger,
  },

  buttonBackClaim: {
    width: 350,
    padding: 14,
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3272B',
    borderRadius: 5,
  },

  txtScroll: {
    marginTop: -20,
  },
});

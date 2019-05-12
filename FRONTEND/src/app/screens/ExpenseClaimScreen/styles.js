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
    color: '#34BAFA',
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
    paddingTop: 24,
    width: 350,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: theme.Size.FontBiggest,
  },

  txtCheck: {
    paddingTop: 25,
    width: 350,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: theme.Size.FontBiggest,
  },

  infoText: {
    width: 350,
    height: 70,
    paddingTop: 4,
    padding: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'white',
    textAlignVertical: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 5,
    fontSize: theme.Size.FontBigger,
    backgroundColor: '#E3272B',
  },

  buttonBackClaim: {
    width: 350,
    padding: 10,
    marginTop: 26,
    marginLeft: 30,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#34BAFA',
    borderWidth: 2,
  },

  txtScroll: {
    marginTop: -30,
  },
});

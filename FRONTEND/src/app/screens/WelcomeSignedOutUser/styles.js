import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtContainer: {
    flex: 1,
    position: 'absolute',
    left: 20,
    top: 50,
  },
  txtName: {
    fontSize: 25,
    color: '#FFFFFF',
  },
  txtSlogan: {
    marginTop: 5,
    fontSize: 15,
    color: '#FFFFFF',
  },

  contentContainer: {
    position: 'absolute',
    top: 300,
    backgroundColor: theme.Color.White,
    alignItems: 'center',
  },

  txtWelcome: {
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontHuger,
    marginBottom: theme.Size.LayoutBig,
    color: theme.Color.DarkBlue,
  },

  btnStarted: {
    width: 160,
  },

  txtbtnSignIn: {
    color: theme.Color.Blue,
    fontSize: theme.Size.FontSmall,
  },

  topBarActions: {
    position: 'absolute',
    top: theme.Size.LayoutBig,
    right: 0,
  },
  imageBackground: {
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

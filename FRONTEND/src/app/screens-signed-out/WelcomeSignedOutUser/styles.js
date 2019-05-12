import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentContainer: {
    backgroundColor: theme.Color.White,
    alignItems: 'center',
  },

  welcomeText: {
    fontFamily: theme.Font.Bold,
    fontSize: theme.Size.FontHuger,
    marginBottom: theme.Size.LayoutBig,
    color: theme.Color.DarkBlue,
  },

  startedButton: {
    width: 160,
  },

  signInButtonText: {
    fontSize: theme.Size.FontSmall,
  },

  topBarActions: {
    position: 'absolute',
    top: theme.Size.LayoutBig,
    right: 0,
  },
});

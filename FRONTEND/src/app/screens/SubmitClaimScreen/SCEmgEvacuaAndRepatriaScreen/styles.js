import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
    marginBottom: 20,
  },

  ctnEmgEvacuaAndRepatriaHeader: {
    height: 200,
    backgroundColor: '#ffb100',
    justifyContent: 'center',
  },

  txtEmgEvacuaAndRepatriaText1: {
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

  inStepEmgEvacuaAndRepatria: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },

  textTitle: {
    fontSize: theme.Size.FontHuge,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  iconBuyEmgEvacuaAndRepatria: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  textDescription: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontSmaller,
  },

  buttonHowMuchText: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontSmaller,
    color: '#4184ff',
  },

  btnBorderBlue: {
    ...theme.Style.DefaultButton,
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: theme.Color.White,
    color: theme.Color.White,
    borderWidth: 1,
    borderColor: '#4184ff',
  },

});

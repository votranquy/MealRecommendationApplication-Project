import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1,
    fontSize: 9,
    letterSpacing: 2,
  },
  iconMSIG: {
    position: 'relative',
    alignSelf: 'center',
    top: 10,
    right: 40,
  },
  ctnMyClaimHeader: {
    height: 200,
    backgroundColor: '#ffb100',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
  },
  txtMyClaimText1: {
    fontSize: theme.Size.FontHuger,
    color: theme.Color.White,
    alignSelf: 'center',
  },
  iconBuyMyClaim: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },
  stepIndicatorMain: {
    marginTop: -14,
  },
  contentContainer: {
    paddingLeft: 30,
    paddingRight: 10,
  },
  titleScreen: {
    fontSize: theme.Size.FontHuge,
    fontWeight: '400',
    marginTop: 10,
    color: theme.Color.Black,
    paddingRight: 30,
  },
  desText: {
    color: theme.Color.Black,
    marginTop: 5,
    fontWeight: '400',
    paddingRight: 30,
  },
  inputContainer: {
    justifyContent: 'center',
    marginTop: 20,
    flex: 1,
  },
  titleSelect: {
    marginLeft: 30,
    marginRight: 30,
    color: theme.Color.Black,
    fontWeight: '500',
  },
  selectBorder: {
    borderWidth: 0.8,
    borderColor: theme.Color.Gray,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 4,
    marginTop: 5,
    flex: 1,
  },
  selectItem: {
    flex: 1,
    color: theme.Color.Black,
  },
  inputContainerStyle: {
    borderBottomColor: theme.Color.White,
    backgroundColor: theme.Color.White,
    paddingLeft: 8,
    paddingRight: 10,
  },
  containerStyleDropdown: {
    borderWidth: 0.3,
    borderColor: theme.Color.Gray,
    flex: 1,
  },

  textInput: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    marginTop: 5,
  },

  dateIcon: {
    width: 0,
    height: 0,
  },
  dateInput: {
    marginLeft: 30,
    marginRight: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 1,
    borderColor: theme.Color.Gray,
    paddingTop: 5,
    height: 50,
    paddingBottom: 10,
  },
  dateText: {
    fontSize: theme.Size.FontMedium,
    paddingTop: 10,
    paddingBottom: 10,
  },

  textInputImage: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    color: theme.Color.Blue,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonQuestion: {
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    flex: 1,
    borderRadius: 5,
    fontSize: theme.Size.FontMedium,
    backgroundColor: theme.Color.White,
    borderWidth: 1,
    borderColor: theme.Color.Blue,
    color: theme.Color.Blue,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonNextStep: {
    flex: 1,
    marginBottom: 20,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  imageUploadContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 20,
  },
  inputImageUploadContainer: {
    flex: 0.1,
  },
  inputImageUpload: {

  },
  titleImageUpload: {
    flex: 0.9,
    fontSize: theme.Size.FontSmall,
    color: theme.Color.Blue,
  },
});

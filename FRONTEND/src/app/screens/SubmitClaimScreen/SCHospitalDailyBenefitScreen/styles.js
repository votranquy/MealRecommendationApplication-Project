import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Color.White,
    marginBottom: 20,
  },

  ctnHospitalDailyBenefitHeader: {
    height: 200,
    backgroundColor: '#ffb100',
    justifyContent: 'center',
  },

  txtHospitalDailyBenefitText1: {
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

  inStepHospitalDailyBenefit: {
    marginTop: -12,
    marginLeft: -20,
    marginRight: -20,
  },

  textTitle: {
    fontSize: theme.Size.FontHuger,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  iconBuyHospitalDailyBenefit: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 30,
  },

  textDescription: {
    fontWeight: 'bold',
    fontSize: theme.Size.FontSmaller,
  },

  txtLabel: {
    fontSize: theme.Size.FontSmaller,
    color: 'black',
    fontWeight: 'bold',
  },

  edtInput: {
    marginTop: 10,
    fontSize: theme.Size.FontSmaller,
  },

  edtInputDetail: {
    marginTop: 10,
    fontSize: theme.Size.FontSmaller,
    height: 60,
  },

  groupItemsForm: {
    marginTop: 20,
  },

  edtGroupDropdown: {
    marginTop: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 5,
    height: 50,
  },

  edtDropdown: {
    marginLeft: 10,
  },

  editContainerDropdown: {
    position: 'absolute',
    top: -20,
    width: '100%',
  },

  ctnImageButtonExpense: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ctnAddPhoto: {
    paddingLeft: 5,
    flex: 1,
  },

  imgAddPhoto: {
    width: 30,
    height: 30,
    tintColor: '#4888ff',
  },

  txtAddPhoto: {
    width: 300,
    color: '#4888ff',
    paddingLeft: 10,
  },

  ctnDateTimeHospital: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inpDate: {
    width: '48%',
    marginTop: 10,
    fontSize: theme.Size.FontSmaller,
  },

  btnNext: {
    ...theme.Style.DefaultButton,
    width: '100%',
    alignSelf: 'center',
  },
});

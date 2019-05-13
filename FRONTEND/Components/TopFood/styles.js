import { StyleSheet } from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: theme.Color.White,
  },
  row: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:"#FFF",
    padding:3,
    margin:3,
    //borderRadius: 20,
  },
  image:{
    flex:0.3,
    // borderRadius: 100
  },
  content:{
    flex:0.7,
    padding:3,
  },
  content_row:{
    flex:1,
    flexDirection:"row",
    alignItems: 'center',
  },
  content_row_name:{
    color:"green",
    fontSize: 20,
    alignItems: 'center',
  },
  content_row_rate:{
    color:"green",
    fontSize: 20,
    alignItems: 'center',
  },
  content_row_address:{
    color:"gray",
    fontSize: 17,
    alignItems: 'center',
  },
  content_row_menu:{
    color:"gray",
    fontSize: 17,
    alignItems: 'center',
  },
});

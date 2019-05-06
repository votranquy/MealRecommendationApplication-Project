//Scroll down to move to the next page

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ListView,
  Image,
  RefreshControl
} from 'react-native';

//var URL="http://10.0.12.37/MealRecommendationApplicationBackEnd/RefreshListView.php?pagenumber=0";
export default class RefreshListView extends Component {

  constructor(props){
    super(props);
    this.state = {
      refreshing:false,
      page:0,
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
    }
  }

  fetchData(){
    fetch("http://10.0.12.37/MealRecommendationApplicationBackEnd/RefreshListView.php?pagenumber="+this.state.page ,
      {method:"POST",body:null})
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData)
      });
    })
    .done()
  }

  componentDidMount(){
    this.fetchData();
  }

  createRow(property){
    return(
      <View style={styles.row}>
        <View style={styles.cell}>
            <Text>{property.id}</Text>
          </View>
          <View style={styles.cell}>
            <Text>{property.username}</Text>
          </View>
          <View style={styles.cell}>
            <Text>{property.phone_number}</Text>
          </View>
          <View style={styles.cell}>
            <Text>{property.id_role}</Text>
          </View>
      </View>
    );
  }

  loadNewData(){
    this.setState({
      refreshing:true,
    });
    fetch("http://10.0.12.37/MealRecommendationApplicationBackEnd/RefreshListView.php?pagenumber="+this.state.page,{method:"POST",body:null})
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        refreshing:false,
        page: this.state.page+1,
      });
    })
    .done()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.list}>
          <ListView 
            refreshControl={
              <RefreshControl 
                refreshing={this.state.refreshing}
                onRefresh={this.loadNewData.bind(this)}
              />
            }
            dataSource={this.state.dataSource}
            renderRow={this.createRow}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    margin:10,
    padding:20,
  },
  row: {
    flex: 1,
    flexDirection:'row',
    borderBottomWidth: 1, 
    borderColor:'red',
    
  },
  cell:{
    flex:1,
   justifyContent:'center',
   borderBottomWidth: 1, 
  }
});


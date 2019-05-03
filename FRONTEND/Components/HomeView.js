import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar                       from "react-native-underline-tabbar";

import HomePage                from "./HomePage";
import Category                   from "./Category";
import NearMe                      from "./NearMe";
import Random                     from "./Random";
import Trend                          from "./Trend";
import Header                       from "./Header";
import TopFood                    from "./TopFood";

const Page = ({label}) => (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        {label}
      </Text>
    </View>
);

export default class HomeView extends Component {

  openMenu() {
    const { open } = this.props;
    open();
  }

  render() {
    return (
        <View style={[styles.container, {paddingTop: 20}]}>
          <Header onOpen={this.openMenu.bind(this)}/>
          <ScrollableTabView
              tabBarActiveTextColor="#53ac49"
              renderTabBar={() => <TabBar underlineColor="#53ac49" />}>
            <TopFood   tabLabel={{label: "         Tốp      "}} navigator={this.props.navigator}/>
            {/* <Category        tabLabel={{label: "Danh Mục  "}} navigator={this.props.navigator}/> */}
            {/* <Random         tabLabel={{label: " Random    "}}  navigator={this.props.navigator}/> */}
            <NearMe          tabLabel={{label: "Gần Tôi      "}}  navigator={this.props.navigator}/>
            {/* <Trend              tabLabel={{label: "Phổ Biến    "}}  navigator={this.props.navigator}/> */}
            {/* <Page               tabLabel={{label: "Page #6     "}}  label="Page #5"/> */}
            {/* <Page               tabLabel={{label: "Page #7     "}}  label="Page #5"/> */}
          </ScrollableTabView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }, 
   welcome: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});


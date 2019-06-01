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
import TopFood                    from "./TopFood/index";
import Restaurant                 from './Restaurant';
import theme from '../theme';

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
    // const {onClick} = this.props;
    return (
        <View style={styles.container}>
          <Header onOpen={this.openMenu.bind(this)}/>
          <ScrollableTabView
              tabBarActiveTextColor={theme.Color.Purple}
              tabBarTextStyle={{fontFamily: 'Roboto', fontSize: theme.Size.FontSmall, fontWeight:"300"}}
              renderTabBar={() => <TabBar underlineColor={theme.Color.Purple} />}
          >
            <TopFood   tabLabel={{label: "Top"}} navigator={this.props.navigator}/>
            <Random         tabLabel={{label: "Ngẫu nhiên"}}  navigator={this.props.navigator} />
            <NearMe          tabLabel={{label: "Gần tôi"}}  navigator={this.props.navigator}/>
            <Trend              tabLabel={{label: "Phổ biến"}}  navigator={this.props.navigator}/>
            <Restaurant     tabLabel={{label: "Quán ăn"}}  navigator={this.props.navigator}/>
            {/* <Page               tabLabel={{label: "Page #7     "}}  label="Page #5"/> */}
            {/* <Category        tabLabel={{label: "Danh Mục  "}} navigator={this.props.navigator}/> */}
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


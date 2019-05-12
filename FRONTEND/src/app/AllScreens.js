// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, ScrollView, TextButton } from '../components';
// Import internal logics
import navigator from '../navigator';

class AllScreens extends Component {
  render() {
    const { screenNames } = this.props;
    return (
      <ScrollView>
        {screenNames.map((screenName, index) => (
          <TextButton
            key={screenName}
            onPress={() => navigator.navigate(screenName)}
            text={screenName}
          />
        ))}
      </ScrollView>
    );
  }
}

export default AllScreens;

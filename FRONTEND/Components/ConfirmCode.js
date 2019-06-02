import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';

export default class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }
  
  _onFulfill(code){
    // TODO: call API to check code here
    // If code does not match, clear input with: this.refs.codeInputRef1.clear()
    if (code === '12345') {
      Alert.alert(
        'Confirmation Code',
        'Successful!',
        [{text: 'OK'}],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Confirmation Code',
        'Code not match!',
        [{text: 'OK'}],
        { cancelable: false }
      );
      
      this.refs.codeInputRef2.clear();
    }
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>CODE INPUT DEMO</Text>
          </View>
    
          <View style={styles.inputWrapper2}>
            <Text style={styles.inputLabel2}>BOX CONFIRMATION CODE</Text>
            <CodeInput
              ref="codeInputRef2"
              secureTextEntry
              activeColor='rgba(49, 180, 4, 1)'
              inactiveColor='rgba(49, 180, 4, 1.3)'
              autoFocus={false}
              ignoreCase={true}
              inputPosition='center'
              size={50}
              onFulfill={(code) => this._onFulfill(code)}
              containerStyle={{ marginTop: 30 }}
              codeInputStyle={{ borderWidth: 1.5 }}
            />
          </View>
  
        </ScrollView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6CE'
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'red',
    fontSize: 16,
    fontWeight: '800',
    paddingVertical: 30
  },
  wrapper: {
    marginTop: 30
  },
  inputWrapper1: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#009C92'
  },
  inputWrapper2: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#E0F8F1'
  },
  inputWrapper3: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#2F0B3A'
  },
  inputLabel1: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800'
  },
  inputLabel2: {
    color: '#31B404',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center'
  },
  inputLabel3: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center'
  }
});
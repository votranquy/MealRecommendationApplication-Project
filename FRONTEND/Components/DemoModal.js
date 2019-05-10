import React from 'react';
// import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
// import Slider from 'react-native-slider';
import MapView from 'react-native-maps';

import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Button,
} from 'react-native';

var {height,width} = Dimensions.get('window');

export default class DemoModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    //   isOpen: false,
    //   isDisabled: false,
      swipeToClose: false,
    //   sliderValue: 0.3,
      region:{
        latitude: 16.074301,
        longitude: 108.153342,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }
    };
  }

//   onClose() {
//     console.log('Modal just closed');
//   }

//   onOpen() {
//     console.log('Modal just opened');
//   }

//   onClosingState(state) {
//     console.log('the open/close of the swipeToClose just changed');
//   }

//   renderList() {
//     var list = [];

//     for (var i=0;i<50;i++) {
//       list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
//     }

//     return list;
//   }

  render() {
    // var BContent = <Button onPress={() => this.setState({isOpen: false})} style={[styles.btn, styles.btnModal]}>X</Button>;

    return (
      <View style={styles.wrapper}>
        <Button onPress={() => this.refs.modal1.open()} style={styles.btn} title="Basic modal" />
        <Modal
          style={[styles.modal, styles.modal1]}
          backdrop={true}
          coverScreen={true}
          ref={"modal1"}
        //   swipeToClose={this.state.swipeToClose}
        //   onClosed={this.onClose}
        //   onOpened={this.onOpen}
        //   onClosingState={this.onClosingState}
        >
          <View style={{height:height,width:width,flex:1, borderWidth:4, borderColor:"black"}}>
            {/* <Text style={styles.text}>Basic modal</Text>
            <Button
             onPress={() => this.setState({swipeToClose: !this.state.swipeToClose})} 
             style={styles.btn} title="XXXXXXX Day la chuoi"/> */}
              <MapView
          style={{flex:1}}
          region={this.state.region}
          initialRegion={this.state.region}
        //   onPress={this.onPress.bind(this)}
        >
          <MapView.Marker coordinate={this.state.region} title={"Here"} description={"No"} />
          {/* {this.renderMarker()} */}
        </MapView>
            </View>
        </Modal>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1,

  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    borderWidth:1,
    borderColor:"black",
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }

});

import React from 'react';
import { StyleSheet, View, Text,Image, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import theme from "../theme";
const { width, height} = Dimensions.get('window');


const slides = [
  {
    key: '1',
    title: 'Tìm kiếm',
    text: 'Giúp bạn tìm kiếm được các món ăn.\n\nDễ dàng tìm kiếm các món ăn theo tên, theo thể loại, vị trí.',
    image: require('../Image/searching.png'),
    backgroundColor:  theme.Color.NiceRed,
  },
  {
    key: '2',
    title: 'Lưu trữ',
    text: 'Lưu lại các món ăn yêu thích.\n\nBookmark chia thành nhiều thư mục. Dễ dàng thêm, sửa, xóa bookmark.',
    image: require('../Image/logout.png'),
    backgroundColor:  theme.Color.LightGray,
  },
  {
    key: '3',
    title: 'Gợi ý',
    text: 'Gợi ý cho bạn các món ăn có thể bạn thích.\n\nVị trí gần nhất, giá cả phải chăng nhất, chất lượng thức ăn tốt nhất',
    image: require('../Image/google.png'),
    backgroundColor: theme.Color.NiceBlack,
  }
];

export default class AppB extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showRealApp: false
          }
    }

  _renderItem = (item) => {
    return (
      <View style={{backgroundColor: item.backgroundColor }}>

        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>

      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <AppB />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
    }
  }
}


const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    slide:{
        flex:1,
    },
    image: {
      width: width,
      height: height*0.9,
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      backgroundColor: 'transparent',
      textAlign: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 22,
      color: 'white',
      backgroundColor: 'transparent',
      textAlign: 'center',
      marginBottom: 16,
    },
  });
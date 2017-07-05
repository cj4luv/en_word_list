import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import Swiper from '../../components/swiper/Swiper';
var {height, width} = Dimensions.get('window');

class Dictation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentWillMount() {
    this.setState({
      data:this.props.data,
    });
  }

  //Swipe 이미지 리스트 생성
  _getSwipeImageList() {
    var list = [];
    this.state.data.map((data, i) => {
      list.push(
        <View key={i} style={{justifyContent:'center', alignItems:'center', width:width,height:height}}>
          <Text>{i+1}. {data.word}</Text>
          <Text>{data.translation}</Text>
        </View>
      );
    });

    return list.valueOf();
  }


  render() {
    return (
      <Swiper
        loadMinimal={true}
        index={this.state.index}
        showsButtons
        loop={false}
        showsPagination={false}
        height={height}
       >
        {this._getSwipeImageList()}
      </Swiper>
    );
  }
}

module.exports = Dictation;

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import WORDS from '../Words';
import Footer from '../footer/Footer';

class Learn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portionPoint: 10,
    };
  }

  splitWords() {
    let length =  Math.ceil(WORDS.words.length/this.state.portionPoint);
    let arr = WORDS.words;
    let start = 0;
    let end = this.state.portionPoint;
    let dataArr = [];

    for(let i = 0;i<length;i++) {
      end = end * (i + 1);
      dataArr.push(arr.slice(start,end));
      start = end;
    }
    return dataArr;
  }

  number(index) {
    let length =  Math.ceil(WORDS.words.length/this.state.portionPoint);
    let num = 1;
    let arr = [];

    for(let i = 1; i <= length; i ++) {
      arr.push(num);
      num += this.state.portionPoint;
    }
    return arr[index];
  }

  render() {
    return(
      <View style={{flex:1}}>
        <FlatList
          data={this.splitWords()}
          extraData={WORDS}
          renderItem={({item,index,separators}) => {
            return(
              <TouchableOpacity onPress={()=>Actions.dictation({data:item})}>
                <View style={{height: 70}}>
                  <Text>NO. {this.number(index)} ~ {(index+1)*this.state.portionPoint}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index}
          initialNumToRender={13}
          ItemSeparatorComponent={()=><View style={{borderWidth: 0.5, borderColor: '#ddd'}}/>}
        />
        <Footer />
      </View>
    );
  }
}

module.exports = Learn;

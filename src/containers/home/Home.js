import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import WORDS from '../list/Words';

class Home extends Component {
  splitWords() {
    let length =  Math.ceil(WORDS.words.length/10);
    let arr = WORDS.words;
    let start = 0;
    let end = 10;
    let dataArr = [];

    for(let i = 0;i<length;i++) {
      end = end * (i + 1);
      dataArr.push(arr.slice(start,end));
      start = end;
    }
    return dataArr;
  }

  number(index) {
    let length =  Math.ceil(WORDS.words.length/10);
    let num = 1;
    let arr = [];

    for(let i = 1; i <= length; i ++) {
      arr.push(num);
      num += 10;
    }
    return arr[index];
  }

  render() {
    return(
      <FlatList
        data={this.splitWords()}
        extraData={WORDS}
        renderItem={({item,index,separators}) => {
          return(
            <TouchableOpacity onPress={()=>{alert(index)}}>
              <View style={{height: 70}}>
                <Text>NO. {this.number(index)} ~ {(index+1)*10}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index}
        initialNumToRender={13}
        ItemSeparatorComponent={()=><View style={{borderWidth: 0.5, borderColor: '#ddd'}}/>}
      />
    );
  }
}

module.exports = Home;

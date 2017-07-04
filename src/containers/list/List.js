import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

class List extends Component {

  render() {
    return(
      <FlatList
        style={{marginTop:100}}
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text onPress={()=>{alert(item.key)}}>{item.key}</Text>}
      />
    );
  }

}


module.exports = List;

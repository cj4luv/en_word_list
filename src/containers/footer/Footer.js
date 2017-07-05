import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

var {height, width} = Dimensions.get('window');
import {Actions} from 'react-native-router-flux';

class Footer extends Component {
  render() {
    return(
      <View style={{
        width:width,
        height:55,
        borderTopWidth:0.5,
        borderColor: '#ddd',
        backgroundColor: 'white',
        flexDirection:'row',
      }}>
        <TouchableOpacity onPress={()=>Actions.list()}>
          <View style={{width: width/2, flex:1, backgroundColor:'red'}}>
            <Text>1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>Actions.home()}>
          <View style={{width: width/2, flex:1, backgroundColor:'green'}}>
            <Text>2</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

module.exports = Footer;

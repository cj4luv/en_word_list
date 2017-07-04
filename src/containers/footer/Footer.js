import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

class Footer extends Component {
  render() {
    return(
      <View style={{
        width:width,
        height:50,
        backgroundColor: 'orange',
      }}>
      </View>
    );
  }
}

module.exports = Footer;

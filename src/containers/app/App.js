import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Home from '../home/Home';
import List from '../list/List';
import Footer from '../footer/Footer';

class App extends Component {
  render() {
    return (
      <View style={{flex:1 }}>
        <Router>
          <Scene key="home" component={Home} title='home' initial />
          <Scene key="list" component={List} title='list' hide/>
        </Router>
        <Footer />
      </View>
    );
  }
}



module.exports = App;

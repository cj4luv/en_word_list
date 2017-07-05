import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform
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
          <Scene key="home" getSceneStyle={getSceneStyle} component={Home} title='home' type='replace' initial/>
          <Scene key="list" getSceneStyle={getSceneStyle} component={List} title='list' type='replace' />
        </Router>
        <Footer />
      </View>
    );
  }
}

// 라우터 네비게이터 마진값 CSS
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#ffffff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : Platform.OS === 'android' ?  64 : 64;
    // style.marginBottom = 50;
  }
  return style
}

module.exports = App;

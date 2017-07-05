import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Learn from '../learn/Learn';
import MainList from '../main/MainList';
import Dictation from '../dictation/Dictation';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="learn" getSceneStyle={getSceneStyle} component={Learn} title='learn' type='replace' initial/>
        <Scene key="mainList" getSceneStyle={getSceneStyle} component={MainList} title='mainList' type='replace' />
        <Scene key="dictation" getSceneStyle={getSceneStyle} component={Dictation} title='dictation' hideNavBar hideNavBar/>
      </Router>
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

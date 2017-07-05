import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import WORDS from '../Words';
import Footer from '../footer/Footer';

class MainList extends Component {
  render() {
    return(
      <View style={{flex:1}}>
        <FlatList
          data={WORDS.words}
          extraData={WORDS}
          renderItem={({item,index,separators}) => {
            return(
              <TouchableOpacity onPress={()=>{alert(item.word)}}>
                <View>
                  <Text style={{color:'gray', paddingLeft:5, flex:1, paddingTop:4}}>{index + 1}</Text>
                  <View style={{flexDirection:'row', height: 50, paddingHorizontal:5,}}>

                    <View style={{marginLeft:5, width:50, height:50,}}>
                      <Text style={{color:'blue',fontSize:20,fontWeight:'600'}}>{item.word}</Text>
                      <Text style={{fontWeight:'400'}}>[{item.pronunciation}]</Text>
                    </View>

                    <View style={{marginLeft: 5, height:50, flex:1,}}>
                      <Text>{item.translation}</Text>
                    </View>
                  </View>
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

module.exports = MainList;

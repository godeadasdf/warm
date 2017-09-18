import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class BottomBar extends Component {
  
  renderItem() {
  
  }
  
  render() {
    const {titles} = this.props;
    return (
      <View style={styles.container}>
        {
          titles.map((p) => {
            return <Text style={styles.text}>{p}</Text>;
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  'container': {
    height:50,
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems:'center'
  },
  'text': {
    flex: 1,
    color:'#12b',
    textAlign:'center',
    alignSelf:'stretch',
    alignItems:'center',
    borderWidth:4,
    borderColor:'#d1b'
  }
});
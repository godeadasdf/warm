import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomBar from './src/component/BottomBar';

export default class App extends React.Component {
  render() {
    const titles = [ 'a', 'b', 'c' ];
    return (
      <View style={styles.container}>
        <BottomBar
          titles={titles}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

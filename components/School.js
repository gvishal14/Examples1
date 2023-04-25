import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';


export default class School extends Component {
  render(){
    return (
  <View style={styles.container}>

   <Text>this is  a school component ===.{this.props.name}</Text>

  </View>
  );}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input:{
    borderWidth: 10
  },
  btn:{
    margin:10
  },
  
});

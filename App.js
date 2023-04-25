import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import School from './components/School'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component {
constructor(){
  super()
  this.state = {
    name:'Vishal',
    nameExtra:'priyansh'
  }
}


changevalue = (text) => {
  this.setState({name:text})
}
  render(){
    return (
  <View style={styles.container}>
  <TextInput onChangeText ={(text)=>this.changevalue(text)} style={styles.input} placeholder="enter some values"/>
    <View style={styles.btn}>
    <Button tittle="Submit" />
    </View>
     <Text>{this.state.name}</Text>
     <Text>{this.state.nameExtra}</Text>

 
    
    <School name={this.state.name}/>

  </View>
  );
  }
  
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

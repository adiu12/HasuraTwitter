/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import { AppRegistry } from 'react-native';

import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import search from './search';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,TouchableOpacity
} from 'react-native';



export default class screen2 extends Component<{}> {
   
  static navigationOptions={
	  title:'Search page',
	  tabBarLabel: '🔍',
	  
	  labelStyle:{
		backgroundColor:'lightgrey', 
         fontSize:'30',		
	  }
  };
   render() {
	   const {navigate}=this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Click below to search
		  </Text>
        <Button title="search"
		style={{height:30,width:80,color:'orange'}}
		onPress={()=> navigate('search')}
		 />
	

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
	color:'green',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('screen2', () => screen2);
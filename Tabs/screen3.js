/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import search from './search';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button
} from 'react-native';

export default class screen3 extends Component<{}> {
	
	 static navigationOptions={
	  tabBarLabel:'✉',
	  title:'Mails',
	 
	 };
	
  render() {
	
    return (
      <View style={styles.container}>
	      
	  
        <Text style={styles.welcome}>
          Mails
   
        </Text>
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
 
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
/*
 const myDrawer=DrawerNavigator({
	   search:{screen: search},
	   
   });
   
export default myDrawer;
*/
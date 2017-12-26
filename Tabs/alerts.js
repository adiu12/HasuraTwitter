import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import search from './search';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class alerts extends Component<{}> {
	 static navigationOptions={
	  title:'Alerts',
	  tabBarLabel:'🔔',
	 };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Alerts
   
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
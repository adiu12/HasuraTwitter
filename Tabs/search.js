/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import { AppRegistry } from 'react-native';
import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,TextInput,
  View,TouchableOpacity
} from 'react-native';



export default class search extends Component<{}> {
		static navigationOptions=({navigation})=>({
	    title:'search',
	    headerStyle:{
		  
		  backgroundColor:'lightgrey',
	  }
		});
  render() {
	   const{navigate}=this.props.navigation;
    return (
      <View style={styles.container}>
	       
        
<View style={{ backgroundColor:'white',height:60}}>
		

        <TextInput
        underlineColorAndroid='transparent'
          placeholder="    search twitter "
         
          />
	
		</View>
		<Text> </Text>
		<Text> </Text>
		<Text> </Text>
		<Text> </Text>
		<Text> </Text>
		<Text> </Text>
		<Text> </Text>
		<Text> </Text>
		<Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text>
		<Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text><Text> </Text>
     <View style={{flexDirection:'row',backgroundColor:'lightgrey'}}>
         <TouchableOpacity
         
         onPress={this.onPress}
          >
         <Text> All </Text>
       </TouchableOpacity>
        <TouchableOpacity
     
         onPress={this.onPress}
       >
         <Text> Main </Text>
       </TouchableOpacity>
             </View>
			 
			 
  
       </View>          	  
       
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    backgroundColor: 'lightgrey',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('search', () => search);
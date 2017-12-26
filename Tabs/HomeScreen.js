/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity, Image, ScrollView,AppRegistry,Button
} from 'react-native';

import draw from './draw';

export default class HomeScreen extends Component<{}> {
	static navigationOptions=({navigation})=>({
		drawerLabel:'Home',
		title:'Home',
		 tabBarLabel: '🏠',
		 StackIcon:require('../images/beard.png')
	}); 

  render() {
	   const{navigate}=this.props.navigation;
    return (
    <View style={styles.container}>
     <ScrollView>
        
    
     
        
             <Image
          resizeMethod="resize"
		  resizeMode ="stretch"
        source={require('../images/tweet.png')}
	
	
	
		   style={{	height:300, width :400,margin:5}}
         
		
            
             			/>
						
		 <Image
          resizeMethod="resize"
		  resizeMode ="stretch"
        source={require('../images/tweet.png')}
	
		   style={{	height:300, width :400,paddingTop:10,margin:5}}		
		 />
        
           
       
       
	   <View  
            style={{ height: 40, width: 40 ,borderRadius:20}}>
        <Image
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
        
	      />
	    </View>
  
    
      
        <View style={{flexDirection:'row',backgroundColor:'white'}}>
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
    
      
   
  
     
            </ScrollView>
	  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  
  
    backgroundColor: 'white',
  },
 
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
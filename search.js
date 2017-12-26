/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,TextInput,
  View
} from 'react-native';



export default class search extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
	       
        
<View style={{ backgroundColor:'white',height:60,paddingTop:10}}>
		
<Text style ={{TextAlign:'bottom'}}>&nbsp;&nbsp;&nbsp;&nbsp;- </Text>
        <TextInput
        underlineColorAndroid='transparent'
          placeholder="                 search "
         
          />
	
		</View>
       
       </View>          	  
       
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:10,
    
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

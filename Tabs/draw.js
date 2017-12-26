 import {TabNavigator,StackNavigator,DrawerNavigator,DrawerItems} from 'react-navigation';
import search from './search';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,AppRegistry,Image,Button
} from 'react-native';

export default class draw extends Component<{}> {
	static navigationOptions=({navigation})=>({
          drawerLabel:'profile',
		   tabBarLabel:'✉',
		   title:'Mails',
		
	});
  render() {
	  
	  const{navigate}=this.props.navigation;
	  const { routes } = this.props.navigation.state;
	  
    return (
      <View style={styles.container}>
	            
        
		<Image
            source={require('../images/beard.png')}
           
            style={{ height: 80, width: 80,  borderRadius:40}}
          />
            <Text style={{fontWeight:'bold',margin:10}}>       
          Shahidh K Muhammed
            </Text>
		<Text style={{margin:10}}> @shahidh_k </Text>
		<View style={{flexDirection:'row',backgroundColor:'white'}}>
	
  <Text style={{fontWeight:'bold',margin:10}}> 690</Text>
   <Text style={{margin:10}}>Following</Text>
  
  <Text style={{fontWeight:'bold',margin:10}}> 653 </Text>
   <Text style={{margin:10}}>Followers </Text>
        </View>
     <Text style={{fontWeight:'bold',margin:10}}>👤 &nbsp;Profile </Text>  
	 <Text style={{fontWeight:'bold',margin:10}}>▤ &nbsp;Lists </Text>  
	 <Text style={{fontWeight:'bold',margin:10}}>⚡️ &nbsp;Moments</Text>  
	 <Text style={{fontWeight:'bold',margin:10}}>❏ &nbsp;Highlights </Text>
          <Text> </Text>
          <Text> </Text>	
           <Text style={{fontWeight:'bold',margin:10}}>Settings and privacy </Text>
		   <Text> </Text>
		   <Text style={{fontWeight:'bold',margin:10}}>Help centre </Text>
        		   
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   margin:10,
    backgroundColor: 'white',
  },
 
 
});
AppRegistry.registerComponent('draw', () => draw);
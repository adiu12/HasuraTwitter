import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import React, { Component } from 'react';
import {
  Platform,
 Image,
  Text,
  ScrollView
} from 'react-native';

import search from './Tabs/search';
import HomeScreen from './Tabs/HomeScreen';
import screen2 from './Tabs/screen2';
import screen3 from './Tabs/screen3';
import draw from './Tabs/draw';
import alerts from './Tabs/alerts';
  

   
    const myDrawer=DrawerNavigator({
Home:{screen:HomeScreen},
       profile:{screen: draw},               
					  },
	{
		initialRouteName:'profile',
		drawerWidth:200,
	  drawerPosition:'left', 
	   contentComponent: 'SideDrawer',
	  },


{
	  contentComponent:props =>  <profile{...props}/> 
	   
   }); 
   
   const mytabs=TabNavigator({
Home:{ screen:HomeScreen },

 
Searchpage:{ screen:screen2},
Alert:{screen:alerts},
Mail:{ screen:draw},

},{
tabBarOptions:{
	style: {
    backgroundColor: 'white',
	height:70,
	    

},
activeTintColor:'blue',
inactiveTintColor:'black',
indicatorStyle:{
	backgroundColor:'blue',
},
labelStyle:{
	fontSize:40,
}


},

 
	   
   });
   
   
   
   
   
 const mystack=StackNavigator ({
	Home:{screen:mytabs},
	
	
	search :{screen:search},
	profile:{screen: myDrawer}, 
 },{
	
	 labelStyle:{
		backgroundColor:'lightgrey', 
         fontSize:'40',		
	  }
 });
   
   

 
  export default mystack ;



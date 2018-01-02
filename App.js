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
  

   /*
    const myDrawer=DrawerNavigator({

        Home:{screen:HomeScreen },               
	    draw:{screen:draw},			  },
	{
		
		drawerWidth:100,
	  drawerPosition:'left',
       drawerOpenRoute:'DrawerOpen',
	   drawerCloseRoute:'DrawerClose',
	   drawerToggleRoute:'DrawerToggle',
	   
	  },


{
	  contentComponent:draw 
	   
   }); 
*/   
   const mytabs=TabNavigator({
Home:{ screen:HomeScreen },

 
Searchpage:{ screen:screen2},
Alert:{screen:alerts},
Mails:{ screen:screen3},

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
	Home:{screen:mytabs,   navigationOptions:({navigation})=>({
	  headerLeft:<Text style={{fontSize:23}} onPress={()=> navigation.navigate('DrawerToggle')}>☷
</Text>,
	  })},
	
	
	search :{screen:search},
	Home:{screen:  DrawerNavigator({

                      
	    Home:{screen:mytabs,navigationOptions:({navigation})=>({
	  headerLeft:<Text style={{fontSize:23}} onPress={()=> navigation.navigate('DrawerToggle')}>☷
</Text>,
	  })},			  },
	{
		
		drawerWidth:300,
	  drawerPosition:'left',
       drawerOpenRoute:'DrawerOpen',
	   drawerCloseRoute:'DrawerClose',
	   drawerToggleRoute:'DrawerToggle',
	  contentComponent:draw 
	  },



	  
	   
   ), 
 }, 
 },{
	
	 labelStyle:{
		backgroundColor:'lightgrey', 
         fontSize:'40',		
	  },
	
 });
 
 
 
   
   

 
  export default mystack ;



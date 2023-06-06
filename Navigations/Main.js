import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HomeNavigator from './HomeNavigator';

const Tab = createMaterialBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator initialRouteName='Home' 
    component={HomeNavigator}
    tabBarOptions={{
        keyboardHidesTabBar:true,
        showLabel:true,
        activeTintColor:'#e91e63',
        
    }
}
    >
    <Tab.Screen name="Home"
    component={HomeNavigator}
    options={{
      tabBarIcon:({color})=>(
        <Icon 
        name="home"
        style={{position:'relative'}}
        color={color}
        size={30}
        />
      )
    }}
    
    ></Tab.Screen>

    <Tab.Screen name="Cart"
    component={HomeNavigator}
    options={{
      tabBarIcon:({color})=>(
        <Icon name ="shopping-cart"
        style={{position:'relative'}}
        color={color}
        size={30}
        />
      )
    }}
    ></Tab.Screen>
  </Tab.Navigator>
  )
}

export default Main
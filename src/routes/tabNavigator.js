import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Record from '../screens/Record';
import Budget from '../screens/Budget';
const Tab = createBottomTabNavigator();
export default function tabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#232',
        activeTintColor:'#f3f',
        inactiveTintColor:'#f3f',
        allowFontScaling:true, 
        style:{
            // borderRadius:60
        }
        
      }}>
      <Tab.Screen
        
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="ios-home-outline"
                type="ionicon"
                color="#f3f"
                size={25}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Icon
              name="ios-settings-outline"
              type="ionicon"
              color="#f3f"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="ios-cash-outline"
              type="ionicon"
              color="#f3f"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Record"
        component={Record}
        options={{
          tabBarIcon: () => (
            <Icon
              name="ios-list-circle-outline"
              type="ionicon"
              color="#f3f"
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

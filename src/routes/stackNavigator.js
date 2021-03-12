import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tabNavigator';
import FullTab from './FullTab';
const Stack = createStackNavigator();
export default function stackNavigator() {
  const [headerTitleName, setHeaderTitleName] = React.useState(
    'HomeNavigation',
  );

  const getHeaderColor = () => {
    console.log(headerTitleName)
    switch (headerTitleName) {
      case "HOME":
        return '#388E3C'
      case "BUDGET":
        return '#AC0FB5'
      case "RECORD":
        return '#d9d334'
      case "SETTINGS":
        return '#3d93fc'
      default:
        return "#345"
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerTitle: headerTitleName,
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: getHeaderColor()},
          }}>
          {(props) => {
            return (
              <FullTab
                //   {...props}
                getName={(name) => {
                  setHeaderTitleName(name);
                }}
              />
            );
          }}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

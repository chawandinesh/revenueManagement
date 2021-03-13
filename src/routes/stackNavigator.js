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

  const getHeaderTitleName = () => {
    switch (headerTitleName) {
      case "HOME":
        return "DASHBOARD"
      case "BUDGET":
        return 'INCOME'
      case "RECORD":
        return 'EARN LIST'
      case "SETTINGS":
        return 'TOOLS'
      default:
        return "#345"
    }

  }

  const getHeaderColor = () => {
    switch (headerTitleName) {
      case "HOME":
        return '#388E3C'
      case "BUDGET":
        return '#AC0FB5'
      case "RECORD":
        return '#c7af3a'
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
            headerTitle: getHeaderTitleName(),
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

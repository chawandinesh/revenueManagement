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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerTitle: headerTitleName,
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#757'},
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

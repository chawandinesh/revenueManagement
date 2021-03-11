import React from 'react';
import TabNavigator from './src/routes/tabNavigator';
import Routes from './src/routes/Routes';
import FullTab from './src/routes/FullTab';
import StackNavigator from './src/routes/stackNavigator';
import {Context} from './src/context/context';

export default function App() {
  return (
    <Context>
      <StackNavigator />
    </Context>
  );
}

// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import PageChooseColor from './PageChooseColor';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown : false
      }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ColorPage" component={PageChooseColor}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
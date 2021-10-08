import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
